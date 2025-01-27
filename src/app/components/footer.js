"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="items-center">
   
      <div className="flex justify-center items-center pb-6 text-gray-300">
        <Link
          href="https://github.com/"
          target="_blank"
          className="cursor-pointer hover:text-primary"
        >
          &copy; 2025 Keerthi Reddy Tummalapelly - Portfolio
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
