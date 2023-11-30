"use client";
import React from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navbarLinks = [
  {
    text: "About",
    href: "#about",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-transparent border-b-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex container px-4 py-2 lg:py-4 flex-wrap items-center justify-between mx-auto ">
        <Link href="/" className="text-xl md:text-2xl text-white font-semibold">
          <Image
            src="/images/logo_white.svg"
            alt="logo"
            width={30}
            height={30}
            className="rounded-full lg:ml-10"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <NavbarLink href={link.href} text={link.text}></NavbarLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navbarLinks}></MenuOverlay> : null}
    </nav>
  );
};

export default Navbar;
