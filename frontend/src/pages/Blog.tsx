import BlogList from "@/components/BlogList";
import { getBlog } from "@/api/blogApi";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import moment from "moment";
import NavButton from "@/components/NavButton";
import { useGetLabelsReadQuery } from "@/api/labelsReadApi";

interface SingleBlogProps {
  id: string;
  title: string;
  introduction: string;
  description: string;
  author: string;
  image: string;
  Category: { id: string; name: string };
  createdAt: string;
}

const BlogDetails = () => {
  const { id } = useParams();
  const { showError } = useToast();
  const [oneBlog, setOneBlog] = useState<SingleBlogProps>();
  const [time, setTime] = useState<string>("1 Min");
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);

  function readingTime(text: string) {
    const averageWPM = 250;

    const adjustedText = text.replace(/(.)\1+/g, "$1");

    const adjustedSentences = adjustedText.replace(/([.!?])\s*\1+/g, "$1");

    const adjustedCharCount = adjustedSentences.length;

    const adjustedWords = adjustedSentences.trim().split(/\s+/);
    const adjustedWordCount = adjustedWords.length;
    const averageWordLength = adjustedCharCount / adjustedWordCount;

    const adjustedTime =
      (adjustedCharCount / averageWPM) * (averageWordLength / 5);

    const formattedAdjustedTime =
      adjustedTime > 1 ? Math.round(adjustedTime) + " Min" : "Less than 1 Min";

    return formattedAdjustedTime;
  }

  const getBlogById = async (id: string) => {
    try {
      const singleBlog = await getBlog(id);
      setOneBlog(singleBlog);
      const reading = readingTime(singleBlog?.description);
      setTime(reading);
    } catch (error) {
      showError("Failed to fetch blog");
    }
  };

  useEffect(() => {
    if (id) {
      getBlogById(id);
    }
  }, [id]);

  return (
    <>
      {oneBlog && (
        <div>
          <img
            src={`${import.meta.env.VITE_API_URL}/api/img/${oneBlog?.image}`}
            alt={`${oneBlog?.title}`}
            className=""
          />
          <h1 className="-mt-20 text-4xl text-center">{oneBlog?.title}</h1>
          <Separator className="bg-muted-foreground mt-10" />
          <div className="container mx-auto px-4 md:flex">
            <div className="md:w-2/3 md:py-16 py-8 md:pr-6">
              <h4 className="mb-2 font-bold">Introduction</h4>
              <div
                dangerouslySetInnerHTML={{ __html: oneBlog.introduction }}
                className="text-muted-foreground"
              />
            </div>
            <div className="md:w-1/3 md:py-16 py-8 md:ps-6 md:border-t-0 border-t-[1px] md:border-s-[1px] border-muted-foreground">
              <div className="grid grid-rows-2 gap-4">
                <div className="grid grid-cols-2 gap-2 justify-start">
                  <p className="text-muted-foreground text-sm">
                    Publication Date
                  </p>
                  <p className="text-muted-foreground text-sm">Category</p>
                  <p className="text-sm">
                    {moment(oneBlog.createdAt).format("MMMM DD, YYYY")}
                  </p>
                  <p className="text-sm">{oneBlog.Category.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 justify-start">
                  <p className="text-muted-foreground text-sm">Reading Time</p>
                  <p className="text-muted-foreground text-sm">Author Name</p>
                  <p className="text-sm">{time}</p>
                  <p className="text-sm">{oneBlog.author}</p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="bg-muted-foreground mb-6" />
          <div className="container mx-auto px-4 py-12">
            <div
              dangerouslySetInnerHTML={{ __html: oneBlog.description }}
              className="blog"
            />
          </div>
          <div className="container mx-auto px-4">
            <div className="flex justify-between my-10">
              <h2 className="text-4xl">{labelsRead?.blog_page_title}</h2>
              <NavButton text="View All" url="/blog-details" />
            </div>
            <BlogList type={oneBlog?.Category?.id} count="3" />
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
