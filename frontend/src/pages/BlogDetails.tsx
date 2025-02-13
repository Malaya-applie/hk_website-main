import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import { useGetCategoriesQuery } from "@/api/categoryApi";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UpdateCategory } from "@/interface";
import { useEffect, useState } from "react";
import SingleBlog from "@/components/SingleBlog";
import BlogList from "@/components/BlogList";

const BlogDetails = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  const { data: fetchedCategories } = useGetCategoriesQuery(undefined);
  const [type, setType] = useState("all");

  useEffect(() => {}, [type]);

  return (
    <>
      <div className="container mx-auto px-4 ">
        <h2 className="text-center text-4xl font-bold my-20">
          {labelsRead?.blog_title}
        </h2>
        <ToggleGroup
          type="single"
          className="lg:flex lg:flex-wrap lg:gap-5 grid grid-cols-3 gap-3 mb-10"
          defaultValue="all"
        >
          <ToggleGroupItem
            disabled={type === "all"}
            value={"all"}
            aria-label={"All"}
            key={"all"}
            className="border-primary border-[1px] lg:w-1/6 md:w-1/3 sm:w-1/2 w-full rounded-none disabled:opacity-100 disabled:pointer-events-auto disabled:cursor-pointer"
            onClick={() => setType("all")}
          >
            All
          </ToggleGroupItem>
          {fetchedCategories?.map((category: UpdateCategory) => (
            <ToggleGroupItem
              disabled={type === category.id.toString()}
              value={category.id.toString()}
              aria-label={category.name}
              key={category.id}
              className="border-primary border-[1px] lg:w-1/6 md:w-1/3 sm:w-1/2 w-full rounded-none disabled:opacity-100 disabled:pointer-events-auto disabled:cursor-pointer text-[10px] lg:text-sm"
              onClick={() => setType(category.id.toString())}
            >
              {category.name}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <SingleBlog type={type} />
        <BlogList type={type} count="all" />
      </div>
    </>
  );
};

export default BlogDetails;
