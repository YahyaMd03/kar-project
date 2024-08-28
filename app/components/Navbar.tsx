'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-50 fixed inset-x-0 z-10 rounded-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/bridges-logo.svg" alt="KAR Consultancy Logo" width={50} height={50} />
            </Link>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-700">KAR Structural Consultancy</h1>
              <p className="text-sm text-gray-500 whitespace-normal sm:whitespace-nowrap">Building Strength, Engineering Excellence</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/project" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                Project
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <Link href="/" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/project" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
            Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
