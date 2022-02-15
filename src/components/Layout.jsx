import { Top, Burger, Content } from "../styles/Layout.js";
import { Business } from "./Business";
import { SideBar } from "./SideBar";
import logo from "../assets/logo.jpg";
import menuBurger from "../assets/menu-burger.svg";
import { useState } from "react";
import { NavBar } from "./NavBar";
import useWindowDimensions from "../hook/useWindowDimension";

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const { width } = useWindowDimensions();

  return (
    <div>
      <Top>
        <img src={logo} alt="Logo" />
        <Burger src={menuBurger} alt="Menu Burger" onClick={handleOpen} />
      </Top>
      <Content>
        {width < 768 ? (
          <NavBar open={open} handleOpen={handleOpen} />
        ) : (
          <SideBar />
        )}
        <Business />
      </Content>
    </div>
  );
};
