"use client";

//Package / function imports
import Image from "next/image";

//Asset Imports
import brandlogo from "../../../brand-art/brandlogo.svg";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4 bg-background-100 dark:bg-background-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between sm:mx-auto font-mono">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              width="40"
              src={brandlogo}
              alt="Branched circuit tree logo"
              className="invert dark:invert-0"
            />
            <span className="self-center text-xl whitespace-nowrap dark:text-primary-500 font-sans font-bold">
              Branched
            </span>
          </a>
          <ul className="flex flex-wrap text-center items-center mb-6 text-sm font-medium text-text-500 sm:mb-0 dark:text-text-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Creators
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm font-mono text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
          <a href="" className="hover:underline mr-2">
            Branched.
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
