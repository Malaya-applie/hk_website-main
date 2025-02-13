import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import starImage from "@/assets/Star.png";
import { Button } from "./ui/button";

const Award = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <div className="px-10 lg:mx-10 container lg:px-4 py-10 flex lg:flex-nowrap flex-wrap gap-8">
      <div className="lg:w-1/2">
        <h4 className="text-2xl lg:text-5xl mb-8">{labelsRead?.award_title}</h4>
        <p className="mb-8">{labelsRead?.award_description}</p>
        <div className="flex sm:gap-16 gap-4 mb-8 sm:flex-row flex-col">
          <div className="flex gap-4">
            <img src={starImage} alt="rating 1" className="" />
            <img src={starImage} alt="rating 2" className="" />
            <img src={starImage} alt="rating 3" className="" />
            <img src={starImage} alt="rating 4" className="" />
            <img src={starImage} alt="rating 5" className="" />
          </div>
          <h5 className="font-bold">{labelsRead?.award_rating_text}</h5>
        </div>
        <Button className="text-primary bg-secondary border-primary border-[1px] rounded-none sm:px-10 sm:py-6">
          {labelsRead?.service_slider_btn_text}
        </Button>
      </div>
         
      <div className="lg:w-1/2 space-y-0 mx-auto grid grid-cols-2  border-gray-300 lg:border-0">
  <div className="flex justify-center items-center border-r border-b border-gray-300 lg:border-0">
    <img
      src={`${labelsRead?.award_1}`}
      alt="award image 1"
      className="w-1/2 sm:w-1/3 md:w-2/3 h-auto"
    />
  </div>
  <div className="flex justify-center items-center border-b border-gray-300 lg:border-0 py-4">
    <img
      src={`${labelsRead?.award_2}`}
      alt="award image 2"
      className="w-1/2 sm:w-1/3 md:w-2/3 h-auto"
    />
  </div>
  <div className="flex justify-center items-center border-r border-gray-300 lg:border-0 py-4">
    <img
      src={`${labelsRead?.award_4}`}
      alt="award image 4"
      className="w-1/2 sm:w-1/3 md:w-2/3 h-auto"
    />
  </div>
  <div className="flex justify-center items-center">
    <img
      src={`${labelsRead?.award_3}`}
      alt="award image 3"
      className="w-1/2 sm:w-1/3 md:w-2/3 h-auto"
    />
  </div>
</div>


    </div>
  );
};

export default Award;
