import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import NavbarItem from "@/components/navbar/NavItem";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        HITESH KHUNT.
      </div>
      <div className="hidden lg:flex md:items-center space-x-8">
        <NavbarItem />
      </div>
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="text-secondary" onClick={() => setIsOpen(true)}>
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4">
              <NavbarItem />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
