import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import ServicesSlider from "./slider/ServicesSlider";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const Services = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <div className="mx-4 sm:mx-8 md:mx-10 px-4 mb-20">
  <div className="flex flex-col sm:flex-row items-center lg:justify-between mb-8">
    <div className="space-y-4 text-center sm:text-left">
      <h4 className="text-sm font-light sm:text-4xl md:text-2xl lg:text-3xl">
        {labelsRead?.service_slider_title}
      </h4>
      <p className="text-sm font-light sm:text-base">
        {labelsRead?.service_slider_text}
      </p>
    </div>
    
    
    <NavButton
      text={labelsRead?.service_slider_btn_text}
      url={labelsRead?.service_slider_btn_url}
      classname="bg-secondary md:self-start text-primary mt-4 md:mt-0 md:justify-end"
    />
    
    
  </div>
  <ServicesSlider />
  <div className="text-end md:mt-10 lg:mt-10">
  <Link to={"/serviceDetail"} className="uppercase">View details</Link>
  </div>
</div>

  );
};

export default Services;
