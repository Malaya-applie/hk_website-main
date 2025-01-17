import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import NavButton from "./NavButton";

const AboutAward = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  //  console.log(labelsRead?.award_about_btn_url); // this is comming undefined
   
  return (
    <div className="container px-4 mx-20 py-10 flex lg:flex-nowrap flex-wrap gap-8">
      <div className="lg:w-1/2">
        <h4 className="text-5xl mb-8">{labelsRead?.award_about_title}</h4>
        <p className="mb-8">{labelsRead?.award_about_description}</p>
        <NavButton
          text={labelsRead?.award_about_btn_text}
          url={labelsRead?.award_about_btn_url}
          classname="bg-secondary text-primary rounded-none"
        />
        <button className="uppercase text-primary bg-secondary border-primary border-[1px] sm:px-20 sm:py-6 w-max rounded-none hover:text-secondary hover:bg-primary">Learn more</button>
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

export default AboutAward;
