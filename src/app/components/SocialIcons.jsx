import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/mailto";

const socials = [
  {
    id: 1,
    name: "github link",
    network: "github",
    url: "https://github.com/MonikaZemankiewicz",
  },
  {
    id: 2,
    network: "linkedin",
    name: "linkedin link",
    url: "https://www.linkedin.com/in/monika-zemankiewicz-675920207/",
  },
  {
    id: 3,
    name: "mail to",
    network: "mailto",
    url: "mailto:zemankiewicz98@gmail.com",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex flex-row gap-6 justify-center">
      {socials.map((social) => (
        <SocialIcon
          key={social.id}
          url={social.url}
          rel="noopener noreferrer"
          target="_blank"
          network={social.network}
          label={social.name}
          bgColor="#cecccc1b"
          fgColor="#c7c5c9"
        ></SocialIcon>
      ))}
    </div>
  );
};

export default SocialIcons;
