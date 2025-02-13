import { Outlet, NavLink } from "react-router-dom";
import {
  Menu,
  ALargeSmall,
  Map,
  Image,
  MessageCircleMore,
  Mail,
  Wrench,
  MailPlus,
  FileText,
  BriefcaseBusiness,
  CircleFadingPlus,
  ChartColumnStacked,
  ScanText,
  ImageDown,
  Key
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";


import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useGetNavbarsQuery } from "@/api/navbarApi";
import { NavData, UpdateNavBar } from "@/interface";

export default function AdminLayout() {
  const { data: navbars } = useGetNavbarsQuery(undefined);
  const navData: NavData[] = [
    {
      id: 1,
      name: "Label",
      link: "label",
      logo: <ALargeSmall className="h-4 w-4" />,
    },
    {
      id: 2,
      name: "Navbar",
      link: "navbar",
      logo: <Map className="h-4 w-4" />,
    },
    {
      id: 3,
      name: "Brand Logo",
      link: "brand-logo",
      logo: <Image className="h-4 w-4" />,
    },
    {
      id: 4,
      name: "Client Feedback",
      link: "client-feedback",
      logo: <MessageCircleMore className="h-4 w-4" />,
    },
    {
      id: 5,
      name: "Newsletter",
      link: "newsletter",
      logo: <Mail className="h-4 w-4" />,
    },
    {
      id: 6,
      name: "Service",
      link: "service",
      logo: <Wrench className="h-4 w-4" />,
    },
    {
      id: 7,
      name: "Inquiry",
      link: "inquiry",
      logo: <MailPlus className="h-4 w-4" />,
    },
    {
      id: 8,
      name: "Case Study",
      link: "case-study",
      logo: <FileText className="h-4 w-4" />,
    },
    {
      id: 9,
      name: "Portfolio",
      link: "portfolio",
      logo: <BriefcaseBusiness className="h-4 w-4" />,
    },
    {
      id: 10,
      name: "Social Media",
      link: "social-media",
      logo: <CircleFadingPlus className="h-4 w-4" />,
    },
    {
      id: 11,
      name: "Category",
      link: "category",
      logo: <ChartColumnStacked className="h-4 w-4" />,
    },
    {
      id: 12,
      name: "Blog",
      link: "blog",
      logo: <ScanText className="h-4 w-4" />,
    },
    {
      id: 13,
      name: "Image",
      link: "image",
      logo: <ImageDown className="h-4 w-4" />,
    },
    {
      id: 14,
      name: "Portfolio Details",
      link: "portfolio-details",
      logo: <BriefcaseBusiness className="h-4 w-4" />,
    },
    {
      id: 15,
      name: "Portfolio Details Key Features",
      link: "portfolio-details-key-features",
      logo: <Key className="h-4 w-4" />,
    },
    {
      id: 16,
      name: "Portfolio Technology stack",
      link: "portfolio-technology-stack",
      logo: <Key className="h-4 w-4" />,
    },
    {
      id: 17,
      name: "Service Details",
      link: "service-details",
      logo: <Key className="h-4 w-4" />,
    },
    {
      id: 18,
      name: "Service Details Images",
      link: "service-details-images",
      logo: <Key className="h-4 w-4" />,
    },
  ];
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden md:block">
        <div className="flex h-full flex-col gap-2 fixed">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <NavLink to="/" className="font-semibold text-2xl">
              <span>Hitesh Khunt.</span>
            </NavLink>
          </div>
          <ScrollArea className="">
          <div className="flex-1">
          
            <nav className="grid items-start px-2 text-lg font-medium lg:px-4">
              {navData?.map((nav) => (
                <NavLink
                  to={nav.link}
                  key={nav.id}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground font-extrabold",
                      isActive
                        ? "bg-foreground text-secondary hover:text-secondary"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {nav.logo}
                  {nav.name}
                </NavLink>
              ))}
            </nav>
          </div>
            </ScrollArea>
          
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid items-start px-2 text-lg font-medium">
                <NavLink to="/" className="text-2xl pb-2 font-semibold">
                  <span>Hitesh Khunt.</span>
                </NavLink>
                {navData?.map((nav) => (
                  <NavLink
                    to={nav.link}
                    key={nav.id}
                    className={({ isActive }) =>
                      [
                        "mx-[-0.65rem] flex items-center gap-4 py-1 rounded-xl px-3 text-muted-foreground transition-all hover:text-foreground",
                        isActive
                          ? "bg-foreground text-secondary hover:text-secondary"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    {nav.logo}
                    {nav.name}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full justify-end gap-4">
            {navbars &&
              navbars.map((nav: UpdateNavBar) => (
                <NavLink
                  key={nav.id}
                  to={nav.link}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  {nav.name}
                </NavLink>
              ))}
          </div>
        </header>
        <main className="ms-20 flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
