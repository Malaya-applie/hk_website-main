import { useGetCaseStudiesQuery } from "@/api/caseStudyApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CaseStudyInterface } from "@/interface";
import { Button } from "../ui/button";

const CaseStudySlider = () => {
  const { data: casestudies } = useGetCaseStudiesQuery(undefined);
    console.log(casestudies);
    
     
  return (
    <Swiper
      slidesPerView={window.innerWidth < 1024 ? "auto" : 2}
      spaceBetween={0}
      centeredSlides={true}
      className="mySwiper"
      key={casestudies}
    >
      {casestudies?.map((casestudy: CaseStudyInterface) => {
        const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${
          casestudy.image
        }`;
        return (
          <SwiperSlide
            key={casestudy.id}
            className="px-6 lg:border-e-2 border-muted-foreground"
          >
            <div>
              <img
                src={imageUrl}
                alt={`${casestudy.title} Image`}
                className="max-h-80 w-full object-cover"
              />
              <div className="flex sm:gap-0 gap-4 sm:flex-row flex-col justify-between items-center bg-[#282828] p-8 mb-4">
                <h4 className="text-xl">{casestudy.title}</h4>
                <Button className="text-secondary sm:px-8 sm:py-2 h-auto">
                  {casestudy.button_text}
                </Button>
              </div>
              
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CaseStudySlider;




{/* <div className="flex sm:flex-row flex-col gap-4">
                <div className="sm:w-1/2">
                  <h5>Description</h5>
                  <p
                    className="text-xs text-muted-foreground truncate whitespace-normal line-clamp-6"
                    dangerouslySetInnerHTML={{ __html: casestudy.description }}
                  />
                </div>
                {casestudy?.points && (
                  <div className="sm:w-1/2 ps-4">
                    <h5>Points</h5>
                    <div
                      className="ms-6"
                      dangerouslySetInnerHTML={{ __html: casestudy.points }}
                    />
                  </div>
                )}
              </div> */}