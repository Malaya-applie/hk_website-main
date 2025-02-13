import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import { useGetBrandLogosQuery } from "@/api/brandLogoApi";
import Slider from "react-infinite-logo-slider";
import { UpdateBrandLogo } from "@/interface";
import NavButton from "./NavButton";

const Hero = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  const { data: fetchedBrandLogos } = useGetBrandLogosQuery(undefined);
    
  return (
    <div className="px-4 sm:px-8 lg:px-20 mt-12 sm:mt-24">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-16">
        
        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            src={labelsRead?.main_image}
            alt="Hitesh Khunt Photo"
            className="w-[280px] sm:w-[320px] md:w-[370px] lg:w-[400px] object-contain"
          />
          
        </div>
      
        {/* Content Section */}
        <div className="w-full text-center lg:text-left mt-6 lg:mt-0 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Hitesh Khunt</h1>
          <h3 className="text-lg sm:text-2xl text-white">
            CEO & Cofounder of Applie Infosol Pvt Ltd
          </h3>
          <p className="text-sm  sm:text-base mt-4 text-white">
            Hi, I’m Hitesh Khunt—a creative tech enthusiast with over 13 years of experience in the IT industry. I specialize in crafting premium solutions that seamlessly blend technology and design, delivering results that are as functional as they are visually impactful.
          </p>
          <p className="text-sm  sm:text-base mt-4 text-white">
            From solving complex problems to creating unique, user-centric designs, my approach balances innovation with aesthetics to help businesses achieve their goals. If you’re looking for a blend of cutting-edge technology and thoughtful design, you’re in the right place.
          </p>
          <p className="text-sm sm:text-base mt-4 text-white">
            Scroll to see how I bring ideas to life with precision and creativity.
          </p>
      
          {/* Buttons */}
          <div className="flex flex-row gap-3 mt-6 justify-center lg:justify-start">
            <NavButton
              text="My Work"
              url={labelsRead?.service_slider_btn_url}
              classname="bg-secondary text-primary uppercase py-2 px-6 text-sm sm:text-base"
            />
            <NavButton
              text={labelsRead?.service_slider_btn_text}
              url={labelsRead?.service_slider_btn_url}
              classname="bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary py-2 px-6 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>
      

      {/* Brand Logos */}
      <div className="w-full space-y-4 text-center md:text-left">
        <p className="text-sm md:text-2xl md:text-center font-semibold">TRUSTED BY</p>
        {fetchedBrandLogos && (
          <div className="flex flex-col items-center md:items-start">
            <div className="w-full md:w-[85%]">
              <Slider
                duration={20}
                pauseOnHover={true}
                blurBorders={true}
                blurBorderColor={"#111111"}
              >
                {fetchedBrandLogos?.map((logo: UpdateBrandLogo) => {
                  const logoUrl = `${import.meta.env.VITE_API_URL}/api/img/${logo.logo}`;
                  return (
                    <Slider.Slide key={logo.id}>
                      <img
                        src={logoUrl}
                        alt={`Logo ${logo.name}`}
                        className="opacity-50"
                      />
                    </Slider.Slide>
                  );
                })}
              </Slider>
            </div>
          </div>
        )}
        
        {/* Call to Action Button */}
        <div className="flex justify-center md:justify-start">
          <NavButton
            text={labelsRead?.hero_btn_text}
            url={labelsRead?.hero_btn_url}
            type="primary"
            classname="py-2 px-6 sm:px-10 sm:py-3 text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
