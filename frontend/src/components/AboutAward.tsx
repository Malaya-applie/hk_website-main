import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import NavButton from "./NavButton";

const AboutAward = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  //  console.log(labelsRead?.award_about_btn_url); // this is comming undefined
   
  return (
    <div className="lg:container lg:px-4 lg:mx-20 py-10 flex lg:flex-nowrap flex-wrap gap-8">
      <div className="hidden lg:block lg:w-1/2">
        <h4 className="text-5xl mb-8">{labelsRead?.award_about_title}</h4>
        <p className="mb-8">{labelsRead?.award_about_description}</p>
        <NavButton
          text={labelsRead?.award_about_btn_text}
          url={labelsRead?.award_about_btn_url}
          classname="bg-secondary text-primary rounded-none"
        />
        <button className="uppercase text-primary bg-secondary border-primary border-[1px] sm:px-20 sm:py-6 w-max rounded-none hover:text-secondary hover:bg-primary">Learn more</button>
      </div>
      <div className="lg:w-1/2 px-4 space-y-0 mx-auto grid grid-cols-2  border-gray-300 lg:border-0">
  <div className="flex justify-center items-center border-r border-b border-gray-300 lg:border-0">
    <img
      src={`${labelsRead?.award_1}`}
      alt="award image 1"
      className="w-1/2 sm:w-1/3 h-auto"
    />
  </div>
  <div className="flex justify-center items-center border-b border-gray-300 lg:border-0 py-4">
    <img
      src={`${labelsRead?.award_2}`}
      alt="award image 2"
      className="w-1/2 sm:w-1/3 h-auto"
    />
  </div>
  <div className="flex justify-center items-center border-r border-gray-300 lg:border-0 py-4">
    <img
      src={`${labelsRead?.award_4}`}
      alt="award image 4"
      className="w-1/2 sm:w-1/3 h-auto"
    />
  </div>
  <div className="flex justify-center items-center">
    <img
      src={`${labelsRead?.award_3}`}
      alt="award image 3"
      className="w-1/2 sm:w-1/3 h-auto"
    />
  </div>
</div>

    </div>
  );
};

export default AboutAward;
