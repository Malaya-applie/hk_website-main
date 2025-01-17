import { getBlogsByType } from "@/api/blogApi";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";
import NavButton from "./NavButton";

interface SingleBlogProps {
  id?: string;
  title?: string;
  image?: string;
  Category?: { name: string };
}

interface BlogProps {
  type: string;
  count: string;
}

const SingleBlog = ({ type, count }: BlogProps) => {
  const { showError } = useToast();
  const [oneBlogs, setOneBlogs] = useState<SingleBlogProps[]>();
  
  
  const getBlogByType = async (type: string) => {
    try {
      const singleBlog = await getBlogsByType(type, count);
      setOneBlogs(singleBlog);
    } catch (error) {
      showError("Failed to fetch blog");
    }
  };

  useEffect(() => {
    getBlogByType(type);
  }, [type]);

  return (
    <>
      {oneBlogs?.length !== 0 && (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {oneBlogs?.map((blog) => (
            <div key={blog.id} className="mb-8">
              <img
                src={`${import.meta.env.VITE_API_URL}/api/img/${blog?.image}`}
                alt={`${blog?.title}`}
                className="mb-4"
              />
              <h2 className="text-xl">{blog?.title}</h2>
              <p className="text-md text-muted-foreground mb-2">
                {blog?.Category?.name}
              </p>
              <NavButton text="Read More" url={`/blog/${blog?.id}`} classname="w-full" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SingleBlog;
