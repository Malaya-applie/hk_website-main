import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import ServicesSlider from "./slider/ServicesSlider";
import NavButton from "./NavButton";

const Services = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <div className="mx-20 px-4 mb-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="space-y-4">
          <h4 className="text-4xl md:text-5xl">
            {labelsRead?.service_slider_title}
          </h4>
          <p className="text-base">{labelsRead?.service_slider_text}</p>
        </div>
        <NavButton
          text={labelsRead?.service_slider_btn_text}
          url={labelsRead?.service_slider_btn_url}
          classname="bg-secondary text-primary"
        />
      </div>
      <ServicesSlider />
    </div>
  );
};

export default Services;
