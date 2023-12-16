import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex flex-col m-auto gap-8">
        <SocialIcons />
        <p className="text-[#c7c5c9] text-center">
          &copy;{new Date().getFullYear()}
          <span> Zemankiewicz</span> all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
