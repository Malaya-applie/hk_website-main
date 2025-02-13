import { useGetLabelsReadQuery } from "@/api/labelsReadApi";

const Statistics = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <div className="container mx-auto px-4 my-12 sm:my-20">
      <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3">
        {labelsRead?.statistics_title}
      </h3>
      <p className="hidden sm:block text-center text-sm sm:text-base md:text-lg mb-12 sm:mb-20">
        {labelsRead?.statistics_description}
      </p>
      <div className="mx-2 sm:mx-10 md:mx-1 lg:mx-20 flex flex-col gap-4 sm:gap-6">
        {/* First Section */}
        <div className="flex flex-col justify-between text-primary bg-[#282828] min-h-50 sm:min-h-80 gap-3 sm:gap-4 px-4 sm:px-8 py-6 sm:py-10 bg-[url('./assets/statistics-1.png'),_url('./assets/statistics-2.png')] bg-no-repeat bg-[position:left,_right] sm:bg-[length:auto] bg-[length:40%] md:bg-[length:62%]">
          <div>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {labelsRead?.statistics_1_stat}
            </h4>
            <h5 className="text-lg sm:text-xl md:text-2xl">
              {labelsRead?.statistics_1_title}
            </h5>
          </div>
          <p className="hidden sm:block text-sm sm:text-base md:text-lg">
            {labelsRead?.statistics_1_description}
          </p>
        </div>

        {/* Revenue Growth & Operational Efficiency (Always Side-by-Side) */}
        <div className="flex flex-row gap-4 sm:gap-6">
          {/* Revenue Growth */}
          <div className="flex flex-col w-1/2 text-primary justify-between bg-[#282828] min-h-32 sm:min-h-48 gap-3 sm:gap-4 px-3 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 border-2 border-white">
            <div>
              <h4 className="text-lg sm:text-xl md:text-3xl lg:text-4xl">
                {labelsRead?.statistics_2_stat}
              </h4>
              <h5 className="text-base sm:text-lg md:text-2xl lg:mb-20">
                {labelsRead?.statistics_2_title}
              </h5>
            </div>
            <p className="hidden sm:block text-xs sm:text-sm md:text-lg">
              {labelsRead?.statistics_2_description}
            </p>
          </div>

          {/* Operational Efficiency */}
          <div className="flex flex-col w-1/2 text-primary justify-between bg-[#282828] min-h-32 sm:min-h-48 gap-3 sm:gap-4 px-3 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 border-2 border-white">
            <div>
              <h4 className="text-lg sm:text-xl md:text-3xl lg:text-4xl">
                {labelsRead?.statistics_3_stat}
              </h4>
              <h5 className="text-base sm:text-lg md:text-2xl">
                {labelsRead?.statistics_3_title}
              </h5>
            </div>
            <p className="hidden sm:block text-xs sm:text-sm md:text-lg">
              {labelsRead?.statistics_3_description}
            </p>
          </div>
        </div>

        {/* Last Section */}
        <div className="flex flex-col justify-between text-primary bg-[#282828] min-h-40 sm:min-h-80 gap-3 sm:gap-4 px-4 sm:px-8 py-6 sm:py-10 bg-[url('./assets/statistics-3.png')] bg-no-repeat bg-[position:right] sm:bg-[length:45%] md:bg-[length:85%] bg-[length:85%]">
          <div>
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {labelsRead?.statistics_4_stat} {labelsRead?.statistics_4_title}
            </h4>
          </div>
          <img
            src={labelsRead?.statistics_4_image}
            alt="statistic image 4"
            className="w-14 sm:w-16 md:w-20 lg:w-24 self-start"
          />
          <p className="hidden sm:block text-xs sm:text-sm md:text-lg">
            {labelsRead?.statistics_4_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
