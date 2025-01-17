import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import starImage from "@/assets/Star.png";
import { Button } from "./ui/button";

const Award = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <div className="mx-20 container px-4 py-10 flex lg:flex-nowrap flex-wrap gap-8">
      <div className="lg:w-1/2">
        <h4 className="text-5xl mb-8">{labelsRead?.award_title}</h4>
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
      <div className="lg:w-1/2 space-y-6 mx-auto">
        <div className="flex sm:flex-row flex-col gap-6">
          <img
            src={`${labelsRead?.award_1}`}
            alt="award image 1"
            className=""
          />
          <img
            src={`${labelsRead?.award_2}`}
            alt="award image 2"
            className=""
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-6">
          <img
            src={`${labelsRead?.award_4}`}
            alt="award image 4"
            className=""
          />
          <img
            src={`${labelsRead?.award_3}`}
            alt="award image 3"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Award;
