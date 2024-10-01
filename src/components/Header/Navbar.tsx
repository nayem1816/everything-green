"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "/src/assets/images/logo.png.webp";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

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
  const [navbarScroll, setNavbarScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handelScroll = () => {
    if (window.scrollY >= 100) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <nav
      className={`md:absolute z-50 w-full py-5 bg-black 
    ${navbarScroll ? "md:bg-black" : "md:bg-transparent"}
    `}>
      <div className={`container text-white py-3`}>
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
                                  onMouseEnter={() =>
                                    subChild.children &&
                                    setIsSubOpenLevel3(true)
                                  }
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
              {isOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-1 space-y-6 bg-[#1A1A1A] text-center py-3">
            {navData.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  key={index}
                  href={item.link}
                  className="block text-white uppercase font-bold hover:bg-primary py-3">
                  {item.title}
                </Link>
                {item.children && (
                  <div className="relative bg-tertiary hidden group-hover:block w-full">
                    {item.children.map((child, index) => (
                      <>
                        <Link
                          onMouseOver={() =>
                            item.children && setIsSubOpenLevel2(true)
                          }
                          onMouseLeave={() => setIsSubOpenLevel2(false)}
                          key={index}
                          href={child.link}
                          className="block text-white  text-sm">
                          <span
                            className={`w-full grid grid-cols-3 justify-between items-center hover:bg-primary py-3 px-4 ${
                              isSubOpenLevel2 ? "bg-primary" : null
                            }`}>
                            <span></span>
                            {child.title}
                            {child.children && (
                              <FaArrowRightLong className="mr-[32px] place-self-end" />
                            )}
                          </span>
                          {child.children && isSubOpenLevel2 && (
                            <div className="bg-gray-500 container hidden group-hover:block w-full">
                              {child.children.map((subChild, index) => (
                                <>
                                  <Link
                                    onMouseOver={() =>
                                      child.children && setIsSubOpenLevel3(true)
                                    }
                                    onMouseLeave={() =>
                                      setIsSubOpenLevel3(false)
                                    }
                                    href={subChild.link}
                                    key={index}
                                    className="block text-sm">
                                    <span
                                      className={`flex justify-between items-center hover:bg-primary py-3 px-4 ${
                                        subChild.children && isSubOpenLevel3
                                          ? "bg-primary"
                                          : null
                                      }`}>
                                      {subChild.title}
                                      {subChild.children && (
                                        <FaArrowRightLong className="" />
                                      )}
                                    </span>
                                    {subChild.children && isSubOpenLevel3 && (
                                      <div className="bg-gray-500 container hidden group-hover:block w-full">
                                        {subChild.children.map(
                                          (subSubChild, index) => (
                                            <Link
                                              href={subSubChild.link}
                                              key={index}
                                              className="space-y-2 py-3 px-4 hover:bg-primary block text-sm text-start">
                                              {subSubChild.title}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </Link>
                                </>
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
              className="block text-white border-[3px] border-primary px-3 py-2 rounded-full uppercase font-bold">
              Tools
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
