"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineFileDownload } from "react-icons/md";

const Intro = () => {
  const socialLinks = [
    {
      title: "Mail",
      href: "mailto:tummalapellykeerthireddy@gmail.com",
      icon: <FaEnvelope />,
      bgcolor: "bg-red-500",
      borderColor: "border-transparent",
      hoverColor:
        "hover:bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899]",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/keerthi-reddy-tummalapelly",
      icon: <FaLinkedin />,
      bgcolor: "bg-blue-500",
      borderColor: "border-transparent",
      hoverColor:
        "hover:bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899]",
    },
    {
      title: "GitHub",
      href: "https://github.com/keerthireddytummalapelly",
      icon: <FaGithub />,
      bgcolor: "bg-gray-500",
      borderColor: "border-transparent",
      hoverColor:
        "hover:bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899]",
    },
    {
      title: "LeetCode",
      href: "https://leetcode.com/keerthireddytummalapelly",
      icon: <SiLeetcode />,
      bgcolor: "bg-orange-500",
      borderColor: "border-transparent",
      hoverColor:
        "hover:bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899]",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen text-black px-4 sm:px-6 lg:px-8">
  <div className="w-full md:w-2/3 text-center md:text-left">
    <h1 className="text-3xl lg:text-5xl font-thin mb-4 text-white">
      Hello, I'm <br />
      <span className="bg-gradient-to-r font-bold from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent inline-flex items-center whitespace-nowrap mt-4">
        Keerthi Reddy Tummalapelly
        <img
          alt="👋"
          draggable="false"
          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
          className="w-8 h-8 md:w-12 md:h-12 ml-2 wave-emoji"
        />
      </span>
    </h1>

    <p className="text-lg sm:text-xl font-thin text-gray-300 mt-4">
      A passionate Software Developer who loves coding and building impactful solutions.
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 items-center">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${link.bgcolor} ${link.borderColor} transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#a855f7] hover:via-[#d946ef] hover:to-[#ec4899]`}
          title={link.title}
        >
          <span className="text-white text-2xl">{link.icon}</span>
        </Link>
      ))}
    </div>

    {/* Download CV Button */}
    <div className="flex justify-center md:justify-start items-center gap-4 lg:gap-8 mt-6">
      <Link
        href="https://drive.google.com/file/d/1p5OUWUBEZHOhmnY0A2K1tYdPGdjv-zSV/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <button className="px-4 py-2 flex items-center gap-2 text-lg font-medium text-white rounded-lg bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] hover:opacity-90 transition-opacity duration-300">
          <span className="font-semibold">Download Resume</span>
          <span className="text-xl sm:text-md">
            <MdOutlineFileDownload />
          </span>
        </button>
      </Link>
    </div>
  </div>

  <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start mt-6 md:mt-0">
    <img
      src="https://assets-v2.lottiefiles.com/a/f75ac2f2-116a-11ee-aa38-a35154041321/UTSEH078Aw.gif" // Replace with your actual image path
      alt="Keerthi Reddy Tummalapelly"
      className="rounded-lg shadow-lg w-64 h-64 object-cover hidden md:block"
    />
  </div>
</div>

  );
};

export default Intro;
