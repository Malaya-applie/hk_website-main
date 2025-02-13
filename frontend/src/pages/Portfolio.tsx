import { useEffect } from "react";
import PortfolioSlider from "@/components/slider/PortfolioSlider";
import { useGetPortfolioDetailsQuery } from "@/api/portfolioDetailsApi";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const { data: portfolioDetails } = useGetPortfolioDetailsQuery(undefined);


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
      }, []);



  return (
    <>
      {/* Portfolio Slider */}
      <PortfolioSlider />

      {/* Portfolio Details Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 md:px-20 my-8 mt-20">
        {portfolioDetails?.portfolio?.map((portfolio, index) => {
          // Construct the image URL dynamically
          const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${portfolio.logo}`;

          return (
            <div onClick={() => navigate(`/portfolio-details/${portfolio.id}`)} key={index} className=" overflow-hidden cursor-pointer">
              {/* Portfolio Image */}
              <img
                src={imageUrl} // Use the dynamically constructed image URL
                alt={`${portfolio.clientName} Image`}
                className="w-full h-48 sm:h-64 object-contain"
              />

              {/* Portfolio Details */}
              <div className="flex sm:gap-0 gap-4 sm:flex-row flex-col justify-between items-center bg-[#282828] p-6">
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-white">
                    {portfolio.clientName}
                  </h4>
                  <h5 className="text-sm text-gray-300">{portfolio.tagline}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;