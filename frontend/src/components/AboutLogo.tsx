import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import { useGetBrandLogosQuery } from "@/api/brandLogoApi";
import { UpdateBrandLogo } from "@/interface";
const AboutLogo = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  const { data: fetchedBrandLogos } = useGetBrandLogosQuery(undefined);
 
 
  return (
    <div className="container mx-auto px-4 my-32">
      <h4 className="text-5xl mb-12 text-center">
        {labelsRead?.about_logo_title}
      </h4>
      <div className="flex flex-wrap justify-center">
        {fetchedBrandLogos?.map((logo: UpdateBrandLogo) => {
          const logoUrl = `${import.meta.env.VITE_API_URL}/api/img/${
            logo.logo
          }`;
          return (
            <div className="w-1/5" key={logo.id}>
              <img
                src={logoUrl}
                alt={`Logo ${logo.name}`}
                className="mx-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutLogo;
