import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import SingleBlog from "@/components/SingleBlog";
import NavButton from "./NavButton";

const RecentBlog = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  return (
    <>
      <div className="mx-10 lg:mx-20 lg:px-4 ">
        <div className="flex justify-between my-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl">{labelsRead?.home_blog_title}</h2>
          
          <NavButton text="View All" url="/blog-details" /> 
              
        </div>

        <SingleBlog type={"all"} />
        
      </div>
    </>
  );
};

export default RecentBlog;
