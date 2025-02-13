import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import aboutMe from "@/assets/About-me.png";
import expertImage from "@/assets/expertImage.png"

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  useEffect(() => {
    const experiences = gsap.utils.toArray(".experience");

    experiences.forEach((experience) => {
      gsap.fromTo(
        experience,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: experience,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center gap-4 my-8">
        <img className="object-contain" src={aboutMe} alt="About Me" />
        <p className="lg:text-4xl">Experience</p>
        <p className="text-sm lg:text-2xl">
          My journey in technology and leadership has been incredibly
          fulfilling. Since March 2020
        </p>
         
          <div className="flex gap-5">
          <img className="object-contain w-1/5" src={expertImage} alt="" />
          

        <div className="timeline mx-auto max-w-4xl space-y-8 py-12 relative">
          {/* Vertical dotted line spanning only between the dots */}
          <div className="absolute left-2 top-[100px] bottom-[16px] border-l-2 border-dotted border-gray-500"></div>

          {/* Experience 1 */}
          <div className="experience opacity-0 transform translate-y-12 relative">
            <div className="relative pl-8">
              {/* Dot */}
              <span className="absolute left-0 top-[16px] h-4 w-4 bg-white rounded-full"></span>
              <p className="text-sm text-white-400 mb-2">2012 - 2014</p>
              <h3 className="text-lg font-bold">
                Mobile Application Developer
              </h3>
              <p className="text-gray-300">Dev IT Solutions LLC</p>
              <p className="text-gray-500 text-sm">
                Focused on honing technical skills in mobile development.
              </p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="experience opacity-0 transform translate-y-12 relative">
            <div className="relative pl-8">
              {/* Dot */}
              <span className="absolute left-0 top-[16px] h-4 w-4 bg-white rounded-full"></span>
              <p className="text-sm text-white-400 mb-2">2014 - 2016</p>
              <h3 className="text-lg font-bold">Assistant Manager</h3>
              <p className="text-gray-300">Finlogic Technologies</p>
              <p className="text-gray-500 text-sm">
                Managed key projects and assisted in team development.
              </p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default AboutHero;
