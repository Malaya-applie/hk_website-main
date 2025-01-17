import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

interface NavButtonProps {
  text?: string;
  url?: string;
  classname?: string;
  type?: "primary" | "secondary"  
}

const NavButton = ({ text, url, classname, type }: NavButtonProps) => {
  let navigate = useNavigate();

  const btnClass = type === "primary" ? "" : "text-secondary bg-primary rounded-md"

  return (
    <>
      {url && (
        <Button
          className={cn(
            "text-primary bg-secondary border-primary border-[1px] sm:px-10 sm:py-6 w-max rounded-none hover:text-secondary", btnClass,
            classname
          )}
          onClick={() => {
            navigate(url);
          }}
        >
          {text}
        </Button>
      )}
    </>
  );
};

export default NavButton;
