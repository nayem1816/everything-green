"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gray-900">
      <div className="container text-white py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">
              <img src="/logo.png" alt="Concinnity" className="h-8 inline" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/solutions" className="hover:text-orange-400">
              Solutions
            </Link>
            <Link href="/blog" className="hover:text-orange-400">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-orange-400">
              Contact
            </Link>
            <Link
              href="/tools"
              className="border-2 border-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 transition duration-300">
              Tools
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/solutions"
              className="block text-white hover:text-orange-400">
              Solutions
            </Link>
            <Link
              href="/blog"
              className="block text-white hover:text-orange-400">
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-orange-400">
              Contact
            </Link>
            <Link
              href="/tools"
              className="block text-white hover:text-orange-400 border-2 border-orange-500 px-3 py-1 rounded-lg">
              Tools
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
