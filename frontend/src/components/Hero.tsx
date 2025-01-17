import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import { useGetBrandLogosQuery } from "@/api/brandLogoApi";
import Slider from "react-infinite-logo-slider";
import { UpdateBrandLogo } from "@/interface";
import NavButton from "./NavButton";

const Hero = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  const { data: fetchedBrandLogos } = useGetBrandLogosQuery(undefined);
    console.log(labelsRead);
    
  return (
    <div>
        <div className=" mx-20 px-4 mt-24 flex justify-center mb-20">
         
        
        <img
          src={labelsRead?.main_image}
          alt={`Hitesh Khunt Photo`}
          className="h-[598px] w-[370px] sm:h-[400px] mb:h-[500px] object-contain"
        />
        
      
          
        
        <div className="max-w-2xl">

        <h1 className="mb-1 text-4xl">Hitesh Khunt</h1>
        <h3 className="mb-5 text-2xl">CEO & Cofounder of Applie Infosol Pvt Ltd</h3>
        <p className="mb-4">Hi, I’m Hitesh Khunt—a creative tech enthusiast with over 13 years of experience in the IT industry. I specialize in crafting premium solutions that seamlessly blend technology and design, delivering results that are as functional as they are visually impactful.
        </p>

        <p className="mb-4">From solving complex problems to creating unique, user-centric designs, my approach balances innovation with aesthetics to help businesses achieve their goals. If you’re looking for a blend of cutting-edge technology and thoughtful design, you’re in the right place.
        </p>
        
        <p>Scroll to see how I bring ideas to life with precision and creativity.</p>
          
          <div className="flex gap-4 mt-8">
        <NavButton
          text={"My work"}
          url={labelsRead?.service_slider_btn_url}
          classname="bg-secondary text-primary uppercase"
        />

         <NavButton
          text={labelsRead?.service_slider_btn_text}
          url={labelsRead?.service_slider_btn_url}
          classname="bg-primary text-secondary uppercase hover:bg-secondary hover:text-primary"
        />
        </div>

        </div>
      
        </div>



      {/* Brand logos */}
        <div className="sm:w-full space-y-2 sm:text-left">
          {/* <p>{labelsRead?.hero_title_2}</p>  */}
          {fetchedBrandLogos ? (
            <div className="flex items-center sm:items-start md:items-center flex-col md:flex-row">
              {/* <p className="text-nowrap text-muted-foreground">TRUSTED BY</p> */}
              <div className="w-[85%]">
                <Slider
                  duration={20}
                  pauseOnHover={true}
                  blurBorders={true}
                  blurBorderColor={"#111111"}
                >
                  {fetchedBrandLogos?.map((logo: UpdateBrandLogo) => {
                    const logoUrl = `${import.meta.env.VITE_API_URL}/api/img/${
                      logo.logo
                    }`;
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
          ) : null}
          <NavButton
            text={labelsRead?.hero_btn_text}
            url={labelsRead?.hero_btn_url}
            type="primary"
            classname="sm:px-10 sm:py-3 h-auto"
          />
          
        </div>

    </div>
  );
};

export default Hero;
