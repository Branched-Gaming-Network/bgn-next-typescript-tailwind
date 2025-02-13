"use client";

//Package / function imports
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

//Asset Imports
import brandlogo from "../../../brand-art/brandlogo.svg";
import TreeSVG from "../../../brand-art/TreeSVG";

const Navbar = () => {
  const menuRef = useRef<HTMLInputElement | null>(null);

  const toggleMobileMenu = () => {
    menuRef.current ? menuRef.current.classList.toggle("hidden") : null;
  };

  return (
    <nav className="z-20 rounded-lg shadow mx-4 my-2 bg-background-100 dark:bg-background-900 fixed top-0 right-0 left-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Primary Nav and Logo */}
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-1 px-1 ">
                {/* <Image
                  width="80"
                  src={TreeSVG}
                  alt="Placeholder alternate text"
                  className="mx-4 invert dark:invert-0"
                /> */}
                <TreeSVG className="w-12 fill-primary-500 mx-4 invert dark:invert-0"/>
                <span className="font-bold font-sans text-primary-500 lg:text-3xl text-2xl">
                  Branched
                </span>
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-3 text-lg">
              <Link
                href="/"
                className="py-5 px-3 font-semibold hover:text-gray-500"
              >
                Home
              </Link>
              <Link
                href="/"
                className="py-5 px-3 font-semibold hover:text-gray-500"
              >
                About
              </Link>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1 text-lg">
            <Link
              href="/"
              className="py-5 px-3 font-semibold hover:text-gray-500"
            >
              Events
            </Link>
            <Link
              href="/"
              className="py-5 px-3 font-semibold hover:text-gray-500 "
            >
              Creators
            </Link>
            <Link
              href="/discord"
              className="py-5 px-3 font-semibold text-primary-500 hover:text-gray-500"
            >
              Join Our Discord!
            </Link>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className="hidden mobile-menu md:hidden text-center transition duration-500"
        ref={menuRef}
      >
        <Link
          href="/"
          className="block font-semibold py-4 px-4 text-md bg-primary-100/60 dark:bg-primary-950/60 backdrop-blur-md"
          onClick={toggleMobileMenu}
        >
          Join Our Discord!
        </Link>
        <Link
          href="/"
          className="block font-semibold py-4 px-4 text-md bg-primary-100/60 dark:bg-primary-950/60 backdrop-blur-md"
          onClick={toggleMobileMenu}
        >
          Mobile Item 2
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
