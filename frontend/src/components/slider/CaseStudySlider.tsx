import { useRef } from "react";
import { useGetCaseStudiesQuery } from "@/api/caseStudyApi";
import { useGetPortfolioDetailsQuery } from "@/api/portfolioDetailsApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { MoveLeft, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaseStudySlider = () => {
  const { data: casestudies } = useGetCaseStudiesQuery(undefined);
  const { data: portfolioDetails } = useGetPortfolioDetailsQuery(undefined);
  const navigate = useNavigate();
  const swiperRef = useRef(null);


  const portfolioDetailHandler = (id: string) => {
    navigate(`/portfolio-details/${id}`);
  };

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
    // 768
    <div>
      <Swiper
        slidesPerView={window.innerWidth < 768 ? 1 : 1} // Use 1 slide per view for smaller screens, 2 for larger screens
        spaceBetween={0} // Increase space between slides for better visibility
        centeredSlides={true}
        className="mySwiper"
        key={casestudies}
        ref={swiperRef}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]} // Add Autoplay module here
      >
        {portfolioDetails?.portfolio?.map((portfolioDetail) => {
          const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${
            portfolioDetail.projectOverviewImage
          }`;

          return (
            <SwiperSlide
              key={portfolioDetail.id}
              className="lg:border-e-2 border-muted-foreground"
            >
              <div className="mx-4 sm:mx-10 md:mx-5">
                <img
                  onClick={() => portfolioDetailHandler(portfolioDetail?.id)}
                  src={imageUrl}
                  alt={`place title name here Image`}
                  className="h-[400px] w-full object-cover cursor-pointer sm:max-h-[500px] md:max-h-[600px] lg:max-h-[500px]"
                />
                <div className="flex sm:gap-0 gap-4 sm:flex-row flex-col justify-between items-center bg-[#282828] p-8 mb-4">
                  <div>
                    <h4 className="text-xl">{portfolioDetail?.clientName}</h4>
                    <p>
                     {portfolioDetail?.tagline}
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <MoveLeft
                      size={30}
                      strokeWidth={1}
                      className="rounded-full border border-primary p-1 cursor-pointer"
                      onClick={goPrev}
                    />
                    <MoveRight
                      size={30}
                      strokeWidth={1}
                      className="rounded-full border border-primary p-1 cursor-pointer"
                      onClick={goNext}
                    />
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

export default CaseStudySlider;
