import { useGetCaseStudiesQuery } from "@/api/caseStudyApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ClientFeedbackInterface } from "@/interface";
import { Button } from "../ui/button";
import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import { StepBack, StepForward } from "lucide-react";
import { Separator } from "../ui/separator";
import { useRef } from "react";
import { useGetClientFeedbacksQuery } from "@/api/clientFeedbackApi";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

const ClientFeedbackSlider = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  const { data: casestudies } = useGetCaseStudiesQuery(undefined);
  const { data: ClientFeedback } = useGetClientFeedbacksQuery(undefined);
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).swiper.slidePrev();
    }
  };
  

  return (
    <div className="lg:mx-30 mx-10">
      <div className="flex lg:items-center justify-between sm:flex-row gap-7 mb-8">
        <h4 className="self-center sm:text-5xl text-lg text-nowrap md:text-3xl space-y-4">
          {labelsRead?.client_feedback_title}
        </h4>
        <div className="flex items-center">
          <Button className="bg-secondary hover:bg-secondary" onClick={goPrev}>
            <StepBack />
          </Button>
          <Separator className="lg:w-36 md:w-36 w-16 sm:w-20 bg-muted-foreground" />
          <Button className="bg-secondary hover:bg-secondary" onClick={goNext}>
            <StepForward />
          </Button>
        </div>
      </div>
      <Swiper
        // slidesPerView={window.innerWidth < 1024 ? "auto" : 3}
        breakpoints={{
          640: { slidesPerView: 1 }, // Small screens: 1 slide
          768: { slidesPerView: 2 }, // Medium screens: 2 slides
          1024: { slidesPerView: 3 }, // Large screens: 3 slides
        }}
        spaceBetween={30}
        className="mySwiper"
        key={casestudies}
        ref={swiperRef}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto every slide every 3 seconds
        modules={[Autoplay]} // Add Autoplay module to play the slides 
      >
        {ClientFeedback?.map((feedback: ClientFeedbackInterface) => {
          const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${
            feedback.userimage
          }`;
          return (
            <SwiperSlide key={feedback.id} className="">
              <div>
                <p
                  className="mb-4 text-xs md:text-lg lg:text-sm"
                  dangerouslySetInnerHTML={{ __html: feedback.feedback }}
                />
                <div className="flex items-center gap-4">
                  <img
                    src={imageUrl}
                    alt={`${feedback.name} Image`}
                    className=""
                  />
                  <div>
                    <h5>{feedback.name}</h5>
                    <p className="text-muted-foreground text-sm">
                      {feedback.position} - {feedback.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ClientFeedbackSlider;
