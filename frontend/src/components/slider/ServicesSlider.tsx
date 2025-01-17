import { useGetServicesQuery } from "@/api/serviceApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { UpdateService } from "@/interface";

const ServicesSlider = () => {
  const { data: services } = useGetServicesQuery(undefined);
    console.log(services);
    
  return (
    <Swiper
      slidesPerView={
        window.innerWidth < 640 ? 1 : window.innerWidth < 768 ? 2 : 3
      }
      loop={true}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {services?.map((service: UpdateService) => {
        const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${
          service.icon
        }`;
        return (
          <SwiperSlide
            key={service.id}
            className="text-primary bg-[#282828] p-8 min-h-72 h-full"
          >
            <img
              src={imageUrl}
              alt={`${service.name} Image`}
              className="w-16 h-14 object-contain mb-4"
            />
            <h4 className="text-xl mb-5">{service.name}</h4>
            <p className="text-sm">{service.description}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServicesSlider;
