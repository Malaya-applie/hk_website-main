import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';


const PortfolioDetailsSlider = () => {
  return (
    <>
        <Swiper
      slidesPerView={window.innerWidth < 1024 ? "auto" : 2}
      spaceBetween={2}
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
            className="lg:border-e-2 border-muted-foreground"
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
    </>
  )
}

export default PortfolioDetailsSlider