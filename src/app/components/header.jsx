"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full text-gray-300 z-50 drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="#home" scroll={true}>
            <div className="cursor-pointer flex items-center space-x-2">
              <img src="/logo2.png" alt="Logo" className="w-28 h-15" />
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="https://drive.google.com/file/d/1p5OUWUBEZHOhmnY0A2K1tYdPGdjv-zSV/view?usp=sharing"
              scroll={false}
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <span className="cursor-pointer font-thin text-white text-lg transition duration-300 hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899] hover:bg-clip-text hover:text-transparent">
                Resume
              </span>
            </Link>
            <Link href="#about" scroll={true}>
              <span className="cursor-pointer font-thin text-white text-lg transition duration-300 hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899] hover:bg-clip-text hover:text-transparent">
                About
              </span>
            </Link>
            <Link href="#projects" scroll={true}>
              <span className="cursor-pointer font-thin text-white text-lg transition duration-300 hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899] hover:bg-clip-text hover:text-transparent">
                Projects
              </span>
            </Link>
            <Link href="#contact" scroll={true}>
              <span className="cursor-pointer font-thin text-white text-lg transition duration-300 hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899] hover:bg-clip-text hover:text-transparent">
                Contact
              </span>
            </Link>
          </nav>

          <button
            onClick={toggleSidebar}
            className="md:hidden text-white hover:text-gray-300 transition duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full p-4">
          <button
            onClick={toggleSidebar}
            className="text-white self-end hover:text-white focus:outline-none"
            aria-label="Close Menu"
          >
            <FaTimes className="h-6 w-6 text-white font-thin" />
          </button>
          <nav className="mt-8 space-y-4">
            <Link
              href="https://drive.google.com/file/d/1p5OUWUBEZHOhmnY0A2K1tYdPGdjv-zSV/view?usp=sharing"
              scroll={false}
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <span
                className="cursor-pointer  mb-4 block text-white hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899] hover:bg-clip-text hover:text-transparent text-lg transition duration-300"
                onClick={toggleSidebar}
              >
                Resume
              </span>
            </Link>
            <Link href="#about" scroll={true}>
              <span
                className="cursor-pointer mb-4 block text-white hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899] hover:bg-clip-text hover:text-transparent text-lg transition duration-300"
                onClick={toggleSidebar}
              >
                About
              </span>
            </Link>
            <Link href="#projects" scroll={true}>
              <span
                className="cursor-pointer  mb-4 block text-white hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899] hover:bg-clip-text hover:text-transparent text-lg transition duration-300"
                onClick={toggleSidebar}
              >
                Projects
              </span>
            </Link>
            <Link href="#contact" scroll={true}>
              <span
                className="cursor-pointer  mb-4 block text-white hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899] hover:bg-clip-text hover:text-transparent text-lg transition duration-300"
                onClick={toggleSidebar}
              >
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          aria-hidden={!isOpen}
        />
      )}
    </>
  );
};

export default Header;
