import { useGetLabelsReadQuery } from "@/api/labelsReadApi";

const Statistics = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <div className="container mx-auto px-4 my-20">
      <h3 className="text-center text-2xl sm:text-3xl mb-3">
        {labelsRead?.statistics_title}
      </h3>
      <p className="text-center mb-20">{labelsRead?.statistics_description}</p>
      <div className="mx-20 flex flex-col gap-6">
        <div className="flex flex-col justify-between text-primary bg-[#282828] min-h-80 gap-4 sm:gap-0 px-12 py-10 bg-[url('./assets/statistics-1.png'),_url('./assets/statistics-2.png')] bg-no-repeat bg-[position:left,_right] ">
          <div>
            <h4 className="text-3xl sm:text-5xl">
              {labelsRead?.statistics_1_stat}
            </h4>
            <h5 className="text-2xl">{labelsRead?.statistics_1_title}</h5>
          </div>
          <p className="text-xl">{labelsRead?.statistics_1_description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col sm:w-1/2 text-primary justify-between bg-[#282828] min-h-80 gap-4 sm:gap-0 px-12 py-10 ">
            <div>
              <h4 className="text-3xl sm:text-5xl">
                {labelsRead?.statistics_2_stat}
              </h4>
              <h5 className="text-2xl">{labelsRead?.statistics_2_title}</h5>
            </div>
            <p className="text-xl">{labelsRead?.statistics_2_description}</p>
          </div>
          <div className="flex flex-col sm:w-1/2 text-primary justify-between bg-[#282828] min-h-80 gap-4 sm:gap-0 px-12 py-10 ">
            <div>
              <h4 className="text-3xl sm:text-5xl">
                {labelsRead?.statistics_3_stat}
              </h4>
              <h5 className="text-2xl">{labelsRead?.statistics_3_title}</h5>
            </div>
            <p className="text-xl">{labelsRead?.statistics_3_description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between text-primary bg-[#282828] min-h-80 gap-4 sm:gap-0 px-12 py-10 bg-[url('./assets/statistics-3.png')] bg-no-repeat bg-[position:right] ">
          <div>
            <h4 className="text-3xl sm:text-5xl">
              {labelsRead?.statistics_4_stat} {labelsRead?.statistics_4_title}
            </h4>
          </div>
          <img
            src={labelsRead?.statistics_4_image}
            alt="statastic image 4"
            className="w-28"
          />
          <p className="text-xl">{labelsRead?.statistics_4_description}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
