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
        <div className="rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-80">
          <SocialIcon
            key={social.id}
            url={social.url}
            network={social.network}
            label={social.name}
            bgColor="transparent"
            fgColor="#111111"
          ></SocialIcon>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
