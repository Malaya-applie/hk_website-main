import { useGetLabelsReadQuery } from "@/api/labelsReadApi";

const Section = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
    
  return (
    <div className="h-96 mb-20 bg-[url('./assets/background-image.png')] bg-no-repeat bg-cover bg-center">
      <div className="container px-4 flex justify-between flex-col mx-auto py-10 h-full">
        <h4 className="text-5xl mt-10 ms-20">{labelsRead?.section_text_1}</h4>
        <p className="text-end text-2xl -mx-50">{labelsRead?.section_text_2}</p>
      </div>
    </div>
  );
};

export default Section;
