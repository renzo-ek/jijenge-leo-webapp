"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    title: "About Us",
    path: "#about",
  },
  {
    title: "Programs",
    path: "#projects",
  },
  {
    title: "Our Rates",
    path: "#rates",
  },  
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-gray-200 dark:border-[#33353F] top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-slate-900 dark:text-white font-semibold"
        >
          <Image
            className="rotate-continuous"
            src="/images/logo.png"
            alt="ISA"
            width={60}
            height={40}
          />
        </Link>
        
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-gray-300 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-gray-800 dark:hover:text-white hover:border-gray-800 dark:hover:border-white transition-colors duration-200"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-gray-300 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-gray-800 dark:hover:text-white hover:border-gray-800 dark:hover:border-white transition-colors duration-200"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;