"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "/src/assets/images/logo.png.webp";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const navData = [
  {
    title: "Solutions",
    link: "/",
    children: [
      {
        title: "Marking",
        link: "/",
        children: [
          {
            title: "Seo",
            link: "/",
            children: [
              {
                title: "Ecommerce SEO",
                link: "/",
              },
              {
                title: "International SEO",
                link: "/",
              },
              {
                title: "Local SEO",
                link: "/",
              },
              {
                title: "Seo Audit",
                link: "/",
              },
              {
                title: "Organic Exposure",
                link: "/",
              },
            ],
          },
          { title: "Digital Strategy", link: "/" },
        ],
      },
    ],
  },
  { title: "Blog", link: "/" },
  { title: "Contact", link: "/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpenLevel2, setIsSubOpenLevel2] = useState(false);
  const [isSubOpenLevel3, setIsSubOpenLevel3] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-black">
      <div className="container text-white py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">
              <Image
                src={Logo}
                alt="Concinnity"
                className="h-10 inline w-full"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-16 items-center">
            {navData.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.link}
                  className="hover:bg-primary text-sm uppercase font-bold px-5 py-3">
                  {item.title}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 bg-gray-900 w-48 hidden group-hover:block mt-2">
                    {item.children.map((child, index) => (
                      <>
                        <Link
                          href={child.link}
                          onMouseEnter={() => setIsSubOpenLevel2(true)}
                          onMouseLeave={() => setIsSubOpenLevel2(false)}
                          key={index}
                          className="space-y-2 py-3 px-4 hover:bg-primary block">
                          <span className="flex justify-between items-center">
                            {child.title}
                            {child.children && (
                              <FaArrowRightLong className="" />
                            )}
                          </span>

                          {child.children && isSubOpenLevel2 && (
                            <div className="absolute -top-2 left-full bg-gray-900 w-48 hidden group-hover:block mt-0">
                              {child.children.map((subChild, index) => (
                                <Link
                                  href={subChild.link}
                                  onMouseEnter={() => setIsSubOpenLevel3(true)}
                                  onMouseLeave={() => setIsSubOpenLevel3(false)}
                                  key={index}
                                  className="space-y-2 py-3 px-4 hover:bg-primary block">
                                  <span className="flex justify-between items-center">
                                    {subChild.title}
                                    {subChild.children && (
                                      <FaArrowRightLong className="" />
                                    )}
                                  </span>

                                  {subChild.children && isSubOpenLevel3 && (
                                    <div className="absolute -top-2 left-full bg-gray-900 w-48 hidden group-hover:block mt-0">
                                      {subChild.children.map(
                                        (subSubChild, index) => (
                                          <Link
                                            key={index}
                                            className="space-y-2 py-3 px-4 hover:bg-primary block"
                                            href={subSubChild.link}>
                                            {subSubChild.title}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </Link>
                      </>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/tools"
              className="border-2 border-orange-500 px-5 py-2 rounded-full transition duration-300 text-sm uppercase font-bold">
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
