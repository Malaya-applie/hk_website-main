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
  console.log(ClientFeedback);

  return (
    <div className="mx-20">
      <div className="flex items-center justify-between sm:flex-row flex-col gap-8 mb-8">
        <h4 className="sm:text-5xl text-2xl space-y-4">
          {labelsRead?.client_feedback_title}
        </h4>
        <div className="flex items-center">
          <Button className="bg-secondary hover:bg-secondary" onClick={goPrev}>
            <StepBack />
          </Button>
          <Separator className="w-36 bg-muted-foreground" />
          <Button className="bg-secondary hover:bg-secondary" onClick={goNext}>
            <StepForward />
          </Button>
        </div>
      </div>
      <Swiper
        slidesPerView={window.innerWidth < 1024 ? "auto" : 3}
        spaceBetween={30}
        className="mySwiper"
        key={casestudies}
        ref={swiperRef}
      >
        {ClientFeedback?.map((feedback: ClientFeedbackInterface) => {
          const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${
            feedback.userimage
          }`;
          return (
            <SwiperSlide key={feedback.id} className="">
              <div>
                <p
                  className="mb-4"
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
