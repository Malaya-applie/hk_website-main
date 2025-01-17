import { useGetPortfoliosQuery } from "@/api/portfolioApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PortfolioInterface } from "@/interface";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const PortfolioSlider = () => {
  const { data: portfolios } = useGetPortfoliosQuery(undefined);

  return (
    
    <Swiper
      slidesPerView={window.innerWidth < 1024 ? "auto" : 2}
      spaceBetween={0}
      centeredSlides={true}
      className="mySwiper my-8"
      key={portfolios}
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
                className="max-h-80 w-full object-cover"
              />
              <div className="flex sm:gap-0 gap-4 sm:flex-row flex-col justify-between items-center bg-[#282828] p-8 mb-4">
                <div>
                  <h4 className="text-xl">{portfolio.title}</h4>
                  <h5 className="text-sm">{portfolio.heading}</h5>
                </div>
                <Button className="text-muted-foreground bg-transparent border-muted-foreground border-[1px] rounded-full sm:h-16 sm:w-16">
                  <MoveRight />
                </Button>
              </div>
              <div className="flex lg:flex-row flex-col gap-4 mb-4">
                <div className="lg:w-1/2">
                  <h5>Problem:</h5>
                  <p
                    className="text-xs truncate whitespace-normal line-clamp-6"
                    dangerouslySetInnerHTML={{ __html: portfolio.problem }}
                  />
                </div>
                <div className="lg:w-1/2">
                  <h5>Solution:</h5>
                  <div
                    className="text-xs truncate whitespace-normal line-clamp-6"
                    dangerouslySetInnerHTML={{ __html: portfolio.solution }}
                  />
                </div>
              </div>
              <div>
                <h5 className="mb-2">Impact:</h5>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-y-4">
                  <div className="flex flex-col justify-between lg:h-20 px-4 border-s-[1px] border-muted-foreground">
                    <h5 className="text-xs">{portfolio?.impact_1_title}</h5>
                    <h4 className="lg:text-2xl">{portfolio?.impact_1_stats}</h4>
                  </div>
                  <div className="flex flex-col justify-between lg:h-20 px-4 border-s-[1px] border-muted-foreground">
                    <h5 className="text-xs">{portfolio?.impact_2_title}</h5>
                    <h4 className="lg:text-2xl">{portfolio?.impact_2_stats}</h4>
                  </div>
                  <div className="flex flex-col justify-between lg:h-20 px-4 border-s-[1px] border-muted-foreground">
                    <h5 className="text-xs">{portfolio?.impact_3_title}</h5>
                    <h4 className="lg:text-2xl">{portfolio?.impact_3_stats}</h4>
                  </div>
                  <div className="flex flex-col justify-between lg:h-20 px-4 border-s-[1px] border-muted-foreground">
                    <h5 className="text-xs">{portfolio?.impact_4_title}</h5>
                    <h4 className="lg:text-2xl">{portfolio?.impact_4_stats}</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
   
  );
};

export default PortfolioSlider;
