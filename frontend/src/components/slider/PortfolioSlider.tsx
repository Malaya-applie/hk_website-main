import { useRef } from "react";
import { useGetPortfoliosQuery } from "@/api/portfolioApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { PortfolioInterface } from "@/interface";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const PortfolioSlider = () => {
  const { data: portfolios } = useGetPortfoliosQuery(undefined);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={window.innerWidth < 1024 ? "auto" : 2}
        spaceBetween={0}
        centeredSlides={true}
        className="mySwiper my-8"
        key={portfolios}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // Stack cards vertically on small screens
          },
          1024: {
            slidesPerView: 2, // Keep two cards side-by-side on large screens
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {portfolios?.map((portfolio: PortfolioInterface) => {
          const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${
            portfolio.image
          }`;
          return (
            <SwiperSlide
              key={portfolio.id}
              className="px-6 lg:border-e-2 border-muted-foreground"
            >
              <div>
                <img
                  src={imageUrl}
                  alt={`${portfolio.title} Image`}
                  className="h-[350px] w-full object-cover"
                />
                <div className="flex sm:gap-0 gap-4 sm:flex-row  justify-between items-center bg-[#282828] p-8 mb-4">
                  <div>
                    <p className=" text-lg text-nowrap lg:text-xl">{portfolio.title}</p>
                    <p className="font-normal text-md lg:text-sm">{portfolio.heading}</p>
                  </div>
                  <Button
                    onClick={handleNext}
                    className="text-muted-foreground bg-transparent border-muted-foreground border-[1px] rounded-full h-12 w-12 sm:h-16 sm:w-16"
                  >
                    <MoveRight />
                  </Button>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 mb-4">
                  <div className="lg:w-1/2">
                    <h5>Problem:</h5>
                    <p
                      className="text-md lg:text-xs truncate whitespace-normal line-clamp-6"
                      dangerouslySetInnerHTML={{ __html: portfolio.problem }}
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h5>Solution:</h5>
                    <div
                      className="text-md lg:text-xs truncate whitespace-normal line-clamp-6"
                      dangerouslySetInnerHTML={{ __html: portfolio.solution }}
                    />
                  </div>
                </div>
                <div>
                  <h5 className="mb-2">Impact:</h5>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-y-4">
                    <div className="flex flex-col justify-between lg:h-20 px-4 border-s-[1px] border-muted-foreground">
                      <h5 className="lg:text-xs">{portfolio?.impact_1_title}</h5>
                      <h4 className="lg:text-2xl">{portfolio?.impact_1_stats}</h4>
                    </div>
                    <div className="flex flex-col justify-between lg:h-20 px-4 border-s-[1px] border-muted-foreground">
                      <h5 className="lg:text-xs">{portfolio?.impact_2_title}</h5>
                      <h4 className="lg:text-2xl">{portfolio?.impact_2_stats}</h4>
                    </div>
                    <div className="flex flex-col justify-between lg:h-20 px-4 border-s-[1px] border-muted-foreground">
                      <h5 className="lg:text-xs">{portfolio?.impact_3_title}</h5>
                      <h4 className="lg:text-2xl">{portfolio?.impact_3_stats}</h4>
                    </div>
                    <div className="flex flex-col justify-between lg:h-20 px-4 border-s-[1px] border-muted-foreground">
                      <h5 className="lg:text-xs">{portfolio?.impact_4_title}</h5>
                      <h4 className="lg:text-2xl">{portfolio?.impact_4_stats}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className=""></div>
    </>
  );
};

export default PortfolioSlider;