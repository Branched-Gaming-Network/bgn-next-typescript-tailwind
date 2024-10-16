"use client";

//Package / function imports
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'

//Asset Imports
import placeholder from './images/placeholder.jpg';

const Navbar = () => {
    const menuRef = useRef<HTMLInputElement | null>(null);
    
    const toggleMobileMenu = () => {
        menuRef.current ? menuRef.current.classList.toggle("hidden") : null
    }

    return ( 
        <nav className="z-20 rounded-lg shadow mx-4 my-2 bg-background-100 dark:bg-background-900 fixed top-0 right-0 left-0">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    {/* Primary Nav and Logo */}
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <div>
                            <Link 
                                href="/" 
                                className="flex items-center py-5 px-3 "
                            >
                                <Image width='60' src={placeholder} alt='Placeholder alternate text' className='mx-4 invert dark:invert-0' />
                                <span className="font-bold font-sans text-xl">Brand</span>
                            </Link>
                        </div>
                        {/* Primary Nav */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link 
                                href="/" 
                                className="py-5 px-3 font-semibold hover:text-gray-500"
                            >
                                Prim Item 1
                            </Link>
                            <Link 
                                href="/" 
                                className="py-5 px-3 font-semibold hover:text-gray-500"
                            >
                                Prim Item 2
                            </Link>
                        </div>
                    </div>
                    {/* Secondary Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link 
                            href="/" 
                            className="py-5 px-3 font-semibold hover:text-gray-500"
                        >
                            Sec Item 1
                        </Link>
                        <Link 
                            href="/" 
                            className="py-5 px-3 font-semibold hover:text-gray-500"
                        >
                            Sec Item 2
                        </Link>
                        <Link 
                            href="/" 
                            className="py-5 px-3 font-semibold hover:text-gray-500"
                        >
                            Sec Item 3
                        </Link>             
                    </div>
                    {/* Mobile button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className="hidden mobile-menu md:hidden text-center transition duration-500" ref={menuRef}>
                <Link 
                    href="/" 
                    className="block font-semibold py-4 px-4 text-sm bg-primary-100/60 dark:bg-primary-950/60 backdrop-blur-md" 
                    onClick={toggleMobileMenu}
                >
                    Mobile Item 1
                </Link>
                <Link 
                    href="/" 
                    className="block font-semibold py-4 px-4 text-sm bg-primary-100/60 dark:bg-primary-950/60 backdrop-blur-md" 
                    onClick={toggleMobileMenu}
                >
                    Mobile Item 2
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;