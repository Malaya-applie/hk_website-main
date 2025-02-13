import { useGetLabelsReadQuery } from "@/api/labelsReadApi";

const Section = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
    
  return (
    <div className="h-[30vh] sm:h-[60vh] md:h-[30vh] lg:h-[50vh] mb-20 bg-[url('./assets/background-image.png')] bg-no-repeat bg-cover bg-center">
  <div className="container px-4 flex justify-between flex-col mx-auto py-10 h-full">
    <h4 className="text-md sm:text-4xl md:text-3xl lg:text-3xl  lg:mt-10 lg:ms-20 ">{labelsRead?.section_text_1}</h4>
    <p className="text-end text-xs  sm:text-2xl lg:text-xl mx-50">{labelsRead?.section_text_2}</p>
  </div>
</div>
  
  );
};

export default Section;
