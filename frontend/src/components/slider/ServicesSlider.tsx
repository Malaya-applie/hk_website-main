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
      // Set the default direction to horizontal for larger screens
      direction="horizontal" 
      slidesPerView={1} // Show one slide at a time by default
      loop={true}
      spaceBetween={10} // Space between slides
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        // For small screens, switch to vertical layout without swiper functionality
        320: {
          direction: "vertical", // Vertical stack for small screens
          slidesPerView: "auto", // Show all slides stacked vertically
          spaceBetween: 20, // Adjust vertical space between slides
          loop: false, // Disable looping for vertical view
          pagination: false, // Disable pagination for vertical view
          navigation: false, // Disable navigation for vertical view
        },
        640: {
          direction: "horizontal", // Horizontal scroll for larger screens
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          pagination: {
            clickable: true,
          },
          navigation: true,
        },
        768: {
          direction: "horizontal", // Continue with horizontal scroll on tablets
          slidesPerView: 2, // Show 2 slides at once
          spaceBetween: 20,
        },
        1024: {
          direction: "horizontal", // Horizontal layout for desktops
          slidesPerView: 3, // Show 3 slides at once
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {services?.map((service: UpdateService) => {
        const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${service.icon}`;
        return (
          <SwiperSlide
  key={service.id}
  className="text-primary bg-[#282828] p-8 min-h-[300px] h-auto flex flex-col justify-between gap-4 border-2 border-white"
>
  <img
    src={imageUrl}
    alt={`${service.name} Image`}
    className="w-14 h-14 mb-5 lg:mb-5 lg:w-16 lg:h-14 object-contain"
  />
  <h4 className="text-sm lg:text-xl md:text-sm mb-4 lg:mb-5">{service.name}</h4>
  <p className="text-sm">{service.description}</p>
</SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServicesSlider;
