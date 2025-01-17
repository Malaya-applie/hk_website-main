import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
const AboutText = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <div className="container mx-10 px-5 my-20">
      <div className="flex flex-col justify-center items-center text-center text-primary bg-[#282828] min-h-80 gap-4 sm:gap-0 px-24 py-10 bg-[url('./assets/statistics-2.png')] bg-no-repeat bg-[position:right] ">
     
        <p className="text-xl">{labelsRead?.about_award_text}</p>
        
      </div>
    </div>
  );
};

export default AboutText;
