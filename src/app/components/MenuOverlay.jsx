import React from "react";
import NavbarLink from "./NavbarLink";
import SocialIcons from "./SocialIcons";

const MenuOverlay = ({ links }) => {
  return (
    <div className="flex flex-col py-32 gap-6 items-center min-h-screen">
      {links.map((link, index) => (
        <NavbarLink key={index} href={link.href} text={link.text} />
      ))}

      <div className="py-8">
        <SocialIcons></SocialIcons>
      </div>
    </div>
  );
};

export default MenuOverlay;
