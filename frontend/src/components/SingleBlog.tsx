import { getOneBlogByType } from "@/api/blogApi";
import moment from "moment";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";
import NavButton from "./NavButton";

interface SingleBlogProps {
  id?: string;
  title?: string;
  introduction?: string;
  image?: string;
  Category?: { name: string };
  createdAt?: string;
}

interface BlogProps {
  type: string;
}

const SingleBlog = ({ type }: BlogProps) => {
  const { showError } = useToast();
  const [oneBlog, setOneBlog] = useState<SingleBlogProps>();
  const getBlogByType = async (type: string) => {
    try {
      const singleBlog = await getOneBlogByType(type);
      setOneBlog(singleBlog);
    } catch (error) {
      showError("Failed to fetch blog");
    }
  };

  useEffect(() => {
    getBlogByType(type);
  }, [type]);

  return (
    <>
      {oneBlog && (
        <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-10">
          <img
            src={`${import.meta.env.VITE_API_URL}/api/img/${oneBlog?.image}`}
            alt={`${oneBlog?.title}`}
            className="lg:w-1/3"
          />
          <div className="lg:w-2/3 my-8 gap-4 flex flex-col">
            <h2 className="text-3xl">{oneBlog?.title}</h2>
            <p className="text-muted-foreground text-sm truncate whitespace-normal line-clamp-2">
              {oneBlog?.introduction}
            </p>
            <div className="grid grid-cols-2 gap-2 justify-start w-max">
              <p className="text-muted-foreground text-sm">Category</p>
              <p className="text-muted-foreground text-sm">Publication Date</p>
              <p>{oneBlog?.Category?.name}</p>
              <p>{moment(oneBlog?.createdAt).format("MMMM DD, YYYY")}</p>
            </div>
            <NavButton text="Read More" url={`/blog/${oneBlog?.id}`} />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBlog;
