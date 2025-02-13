import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import { Separator } from "./ui/separator";
import { useGetNavbarsQuery } from "@/api/navbarApi";
import { useGetSocialMediasQuery } from "@/api/socialMediaApi";
import { CreateInquiry, UpdateNavBar, UpdateSocialMedia } from "@/interface";
import { NavLink } from "react-router-dom";
import { InquiryForm } from "./forms/InquiryForm";
import { createInquiry } from "@/api/inquiryApi";
import { useToast } from "@/hooks/useToast";

const Footer = () => {
  const { showSuccess, showError } = useToast();
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  const { data: navbars } = useGetNavbarsQuery(undefined);
  const { data: socialMedia } = useGetSocialMediasQuery(undefined);

  const handleCreate = async (newNewsletter: CreateInquiry) => {
    try {
      await createInquiry(newNewsletter);
      showSuccess("Inquiry created successfully");
    } catch (error) {
      showError("Failed to create inquiry");
    }
  };

  return (
    <>
      <div className="mx-5 lg:mx-0 bg-footer-image bg-no-repeat bg-cover bg-center py-24 md:py-10">
        <div className="md:mx-20 lg:mx-20 px-4 space-y-7 lg:flex md:flex md:items-center lg:items-center">
          <div className="md:me-10 lg:w-1/2 space-y-4 lg:text-start text-start md:-mt-[300px]">
            <h3 className="text-primary md:text-lg text-md lg:text-4xl">
              {labelsRead?.footer_form_title}
            </h3>
            <p className="text-primary md:text-lg text-sm lg:text-xl">
              {labelsRead?.footer_form_text}
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <InquiryForm
              onSubmit={(data) => handleCreate(data)}
              className="max-w-[550px] bg-secondary"
            />
          </div>
        </div>
      </div>
      <div className="md:mx-10 lg:mx-20 px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 my-20">
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <img
              src={labelsRead?.round_image}
              alt={`${labelsRead?.site_name} Image`}
              className="rounded-full w-20 lg:w-auto"
            />
            <h3 className="lg:text-5xl md:text-1xl sm:text-3xl text-2xl">
              {labelsRead?.footer_text}
            </h3>
          </div>
          <div className="flex justify-center">
            <a
              href={labelsRead?.footer_btn_url}
              className="text-secondary bg-primary rounded-full flex items-center justify-center font-extrabold lg:w-60 lg:h-60 md:w-44 md:h-44 w-36 h-36"
            >
              {labelsRead?.footer_btn_text}
            </a>
          </div>
        </div>
        <Separator className="bg-muted-foreground" />
        <div className="flex flex-col space-y-4 md:space-y-1 md:flex-row justify-between items-center my-6">
          <div className="space-x-6 sm:space-x-12 text-sm sm:text-base">
            {navbars?.map((nav: UpdateNavBar) => (
              <NavLink
                key={nav.id}
                to={nav.link}
                className="hover:text-gray-400"
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
          <div className="flex space-x-8 items-center">
            {socialMedia?.map((social: UpdateSocialMedia) => (
              <a key={social.id} href={social.link} target="_blank">
                <img
                  src={
                    typeof social.logo === "string"
                      ? `${import.meta.env.VITE_API_URL}/api/img/${social.logo}`
                      : ""
                  }
                  alt={`${social.name} Image`}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:flex lg:gap-8 gap-8 mb-8">
          <a href="#" className="text-muted-foreground hover:text-primary">
            Privacy Policy
          </a>
          <Separator
            orientation="vertical"
            className="bg-muted-foreground h-6"
          />
          <a href="#" className="text-muted-foreground hover:text-primary">
            Terms and Conditions
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            Copyright (c) {labelsRead?.site_name}
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
