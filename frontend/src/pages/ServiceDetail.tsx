import { useState, useEffect } from "react";
import { useGetServiceDetailsImagesQuery, useGetServiceDetailsTypeQuery } from "@/api/serviceDetailsApi";

const ServiceDetail = () => {
  const { data: images = [] } = useGetServiceDetailsImagesQuery();
  const { data: services = [] } = useGetServiceDetailsTypeQuery();

  const [activeStates, setActiveStates] = useState<{ [key: number]: number | null }>({});
  const [activeService, setActiveService] = useState<number | null>(null); // Track open service for small screens


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);



  useEffect(() => {
    const initialState = services.reduce((acc, service) => {
      const serviceImages = images.filter((img) => img.serviceTypeId === service.id);
      if (serviceImages.length > 0) {
        const middleIndex = Math.floor(serviceImages.length / 2);
        acc[service.id] = middleIndex;
      }
      return acc;
    }, {} as { [key: number]: number });

    setActiveStates(initialState);

    // Set the first one open on small screens
    if (services.length > 0 && images.length > 0) {
      setActiveService(images[0]?.id || null);
    }
  }, [services, images]);

  const handleHover = (serviceId: number, index: number) => {
    setActiveStates((prev) => ({ ...prev, [serviceId]: index }));
  };

  const handleMouseLeave = (serviceId: number) => {
    const serviceImages = images.filter((img) => img.serviceTypeId === serviceId);
    if (serviceImages.length > 0) {
      const middleIndex = Math.floor(serviceImages.length / 2);
      setActiveStates((prev) => ({ ...prev, [serviceId]: middleIndex }));
    }
  };

  return (
    <div className="mx-4 md:mx-10 lg:mx-20">
      {services.length > 0 ? (
        services.map((service) => {
          const serviceImages = images.filter((img) => img.serviceTypeId === service.id);
          const middleIndex = Math.floor(serviceImages.length / 2);

          return (
            <div key={service.id} className="mb-10">
              {/* Header */}
              <h1 className="mb-5">
                {service.serviceType || "Consulting Services"}
              </h1>

              {/* Description */}
              <div
                className="mb-3"
                dangerouslySetInnerHTML={{ __html: service.serviceDescription }}
              ></div>

              {/* Large Screen Layout */}
              <div
                className="hidden lg:flex h-[500px]"
                onMouseLeave={() => handleMouseLeave(service.id)}
              >
                {serviceImages.map((img, index) => {
                  const isActive = activeStates[service.id] === index;

                  return (
                    <div
                      key={img.id}
                      onMouseEnter={() => handleHover(service.id, index)}
                      className="border border-t-0 border-b-0 border-l-0 p-4 flex flex-col items-center justify-start"
                      style={{
                        overflow: "hidden",
                        width: isActive ? "1000px" : "300px",
                        transition: "width 0.5s ease-in-out",
                      }}
                    >
                      <p className="text-white text-lg mb-4">{img.serviceImageTitle}</p>
                      <div
                        className="transition-all"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: "translateX(20px)",
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                        }}
                      >
                        <div className="flex flex-col items-center">
                          <img
                            style={{ height: "300px" }}
                            src={`${import.meta.env.VITE_API_URL}/api/img/${img.serviceImage}`}
                            alt={img.serviceImageTitle}
                          />
                          <p className="text-xs mt-2 w-7/12">{img.serviceImageDescription}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Small Screen Layout */}
              <div className="lg:hidden flex flex-col space-y-4">
                {serviceImages.map((img, index) => {
                  const isFirst = index === 0;
                  const isExpanded = activeService === img.id;

                  return (
                    <div key={img.id} className="border-b p-4">
                      {/* Clickable Title */}
                      <div
                        onClick={() => setActiveService(isExpanded ? null : img.id)}
                        className="cursor-pointer text-center text-lg font-semibold"
                      >
                        {img.serviceImageTitle}
                      </div>

                      {/* Expandable Content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col items-center mt-4">
                          <img
                            style={{ height: "300px" }}
                            src={`${import.meta.env.VITE_API_URL}/api/img/${img.serviceImage}`}
                            alt={img.serviceImageTitle}
                          />
                          <p className="text-xs mt-2 w-10/12 text-center">
                            {img.serviceImageDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 text-center">Loading services...</p>
      )}
    </div>
  );
};

export default ServiceDetail;
