import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
const AboutText = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <div className="lg:container lg:mx-10 px-5 my-20">
      <div className="flex flex-col justify-center items-center lg:text-center text-primary bg-[#282828] lg:min-h-80 gap-4 sm:gap-0 px-5 lg:px-24 py-10 bg-[url('./assets/statistics-2.png')] bg-no-repeat 
      bg-[position:calc(100%+200px)_center] sm:bg-[position:right]">
     
        <p className="lg:text-xl">{labelsRead?.about_award_text}</p>
      </div>
    </div>
  );
};

export default AboutText;
