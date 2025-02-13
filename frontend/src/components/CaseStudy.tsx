import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import CaseStudySlider from "./slider/CaseStudySlider";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  return (
    <div className="px-4 mb-20">
      <div className="flex items-center justify-between gap-8 mb-8 mx-5 lg:mx-15">
        {/* <h4 className="sm:text-5xl text-2xl space-y-4">
          {labelsRead?.case_study_title}
        </h4> */}
        <h4 className="sm:text-5xl md:text-3xl text-2xl space-y-4">Our Work</h4>
         
        <NavButton
          text={labelsRead?.case_study_btn_text}
          url={labelsRead?.case_study_btn_url}
          classname="bg-secondary text-primary underline border-none"
        />
        <Link to={"/portfolio"} className="uppercase self-end">See all</Link>
      </div>
      <div>
      <CaseStudySlider />
     
      </div>
    </div>
  );
};

export default CaseStudy;
