import React from "react";
import NavbarLink from "./NavbarLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavbarLink href={link.href} text={link.text}></NavbarLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
