"use client";

//Package / function imports
import Link from 'next/link';
import Image from 'next/image'

//Asset Imports
import placeholder from './images/placeholder.jpg';

const Footer = () => {
    return ( 
        <footer className="rounded-lg shadow m-4 bg-background-100 dark:bg-background-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between font-mono">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image width='70' src={placeholder} alt='Placeholder alternate text' className='' />
                        <span className="self-center text-2xl whitespace-nowrap dark:text-white  font-sans font-bold">Brand</span>
                    </a>
                    <ul className="flex flex-wrap text-center items-center mb-6 text-sm font-medium text-text-500 sm:mb-0 dark:text-text-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Foot1</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Foot2</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Foot3</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Foot4</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm font-mono text-gray-500 text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline mr-2">Brand™.</a>All Rights Reserved.</span>
            </div>
        </footer>
     );
}
 
export default Footer;