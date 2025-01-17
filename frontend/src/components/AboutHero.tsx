import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import aboutMeImage from "@/assets/About-me.png";

const AboutHero = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
    
    
  return (
    <>
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center text-center gap-4 my-8">
         <img className="object-contain" src={aboutMeImage} alt="Experience-image" />

         {/* Experience section  */}
         <p className="text-4xl">Experience</p>
         <p>My journey in technology and leadership has been incredibly fulfilling. Since March 2020</p>
        </div>
      </div>

      
   

  

      
  


      
    </>
  );
};

export default AboutHero;
