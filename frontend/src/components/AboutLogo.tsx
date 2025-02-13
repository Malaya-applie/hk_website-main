import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import { useGetBrandLogosQuery } from "@/api/brandLogoApi";
import { UpdateBrandLogo } from "@/interface";

const AboutLogo = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  const { data: fetchedBrandLogos } = useGetBrandLogosQuery(undefined);

  return (
    <div className="container mx-auto px-4 my-32">
      <h4 className="text-2xl lg:text-5xl mb-12 text-center">
        {labelsRead?.about_logo_title}
      </h4>
      <div className="px-[10%]">
        <div className="hidden lg:flex flex-wrap justify-center">
          {fetchedBrandLogos?.map((logo: UpdateBrandLogo, index: number) => {
            const logoUrl = `${import.meta.env.VITE_API_URL}/api/img/${logo.logo}`;
            const isGroupOne = index < 4; 
            const isGroupTwo = index >= 4 && index < 8;
            const isGroupThree = index >= 8;

            return (
              <div
                className={`${
                  isGroupOne || isGroupTwo ? "w-1/4" : isGroupThree ? "w-1/5" : ""
                }`}
                key={logo.id}
              >
                <img src={logoUrl} alt={`Logo ${logo.name}`} className="mx-auto" />
              </div>
            );
          })}
        </div>

        {/* Small Screen Responsive Grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
          {fetchedBrandLogos?.map((logo: UpdateBrandLogo, index: number) => {
            const logoUrl = `${import.meta.env.VITE_API_URL}/api/img/${logo.logo}`;
            return (
              <div key={logo.id} className="flex justify-center">
                <img src={logoUrl} alt={`Logo ${logo.name}`} className="mx-auto w-full max-w-[120px]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutLogo;
