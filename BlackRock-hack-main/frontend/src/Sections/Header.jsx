import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Logo } from "../Components/Logo";
import { ScrollShadow } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const menuItems = [
    "Insights",
    "Learn",
    "My Account",
    "About Us",
    "My Settings",
    "Learn More",
  ];

  return (
    <Navbar
      maxWidth="2xl"
      className="bg-[#1D1D1D]"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <NavLink to="/" exact="true" activeclassname="active">
          <Logo />
          <p className="pl-3 font-bold text-inherit"></p>
        </NavLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex items-center gap-20">
        <NavbarItem>
          <NavLink to="/insights" exact="true" activeclassname="active">
            <Link className="hover:text-lime-300" color="foreground">
              INSIGHTS
            </Link>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/learn" exact="true" activeclassname="active">
            <Link className="hover:text-lime-300" color="foreground">
              LEARN
            </Link>
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/account" exact="true" activeclassname="active">
            <Link className="hover:text-lime-300" color="foreground">
              MY ACCOUNT
            </Link>
          </NavLink>
        </NavbarItem>

        {/* Conditionally render buttons based on user authentication */}
        {user ? (
          <NavbarItem>
            <Button color="error" className="mr-2" onClick={handleLogout}>
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <NavLink to="/signup" exact="true" activeclassname="active">
              <Button color="primary" className="mr-2">
                Sign Up
              </Button>
            </NavLink>
            <NavLink to="/signin" exact="true" activeclassname="active">
              <Button color="primary" variant="bordered">
                Sign In
              </Button>
            </NavLink>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu className="custMenu monoFont bg-[#1D1D1D] text-slate-100 text-2xl">
        <ScrollShadow size={150} className="scrollbar-hide">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                exact="true"
                activeclassname="active"
              >
                <Link className="transition duration-500 ease-in-out text-4xl sm:text-[12rem]/[10rem] py-3 text-[#515154] hover:text-lime-300 hover:opacity-90">
                  <span className="text-lg sm:text-2xl pr-9 ">{index}</span>
                  {item}
                </Link>
              </NavLink>
            </NavbarMenuItem>
          ))}
        </ScrollShadow>
      </NavbarMenu>
    </Navbar>
  );
}
