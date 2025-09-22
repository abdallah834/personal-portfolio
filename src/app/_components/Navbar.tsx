"use client";

import CardNav from "@/components/CardNav";
import StaggeredMenu from "@/components/StaggeredMenu";

export default function Navbar() {
  //////////////////////////////Staggered menu variables for mobile////////////////////////////
  const personalGmail = "abdallahayman834@gmail.com";
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Projects", ariaLabel: "View our services", link: "/projects" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    {
      label: "Gmail",
      link: `https://mail.google.com/mail/u/0/?to=${personalGmail}&fs=1&tf=cm`,
    },
    {
      label: "GitHub",
      link: "https://github.com/abdallah834?tab=repositories",
    },
  ];

  ////////////////////////////// navbar variables for pc or laptops////////////////////////////
  const items = [
    {
      label: "About",
      bgImg: "/img-0.png",
      textColor: "#fff",
      link: "/about",
    },
    {
      label: "Projects",
      bgImg: "/img-1.png",
      textColor: "#fff",
      link: "/projects",
      links: [],
    },
    {
      label: "Contact",
      bgImg: "/img-2.png",
      textColor: "#fff",
      link: "/contact",
    },
    {
      label: "Home",
      bgImg: "/home-img.png",
      textColor: "#fff",
      link: "/",
    },
  ];

  return (
    <>
      <CardNav
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        className="hidden lg:block"
      />

      <div className="lg:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          accentColor="#1c6cf7 "
        />
      </div>
    </>
  );
}
