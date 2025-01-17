import { NavLink } from "react-router-dom";
import { useGetNavbarsQuery } from "@/api/navbarApi";
import { useGetSocialMediasQuery } from "@/api/socialMediaApi";
import { UpdateNavBar, UpdateSocialMedia } from "@/interface";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useGetLabelsReadQuery } from "@/api/labelsReadApi";
import NavButton from "../NavButton";

const NavbarItem = () => {
  const { data: labelsRead } = useGetLabelsReadQuery(undefined);
  const { data: navbars } = useGetNavbarsQuery(undefined);
  const { data: socialMedia } = useGetSocialMediasQuery(undefined);

  return (
    <>
      {navbars &&
        navbars.map((nav: UpdateNavBar) => (
          <NavLink key={nav.id} to={nav.link} className="hover:text-gray-400">
            {nav.name}
          </NavLink>
        ))}
      <Separator orientation="vertical" className="h-8 hidden md:flex" />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base">
              FOLLOW ON
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[132px] list-none">
                {socialMedia?.map((social: UpdateSocialMedia) => (
                  <li key={social.id}>
                    <a href={social.link} target="_blank">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavButton
        text={labelsRead?.nav_btn_text}
        url={labelsRead?.nav_btn_url}
        type="secondary"
        classname="hidden md:block !py-0"
      />
    </>
  );
};

export default NavbarItem;
