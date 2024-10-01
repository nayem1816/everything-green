"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png.webp";
import footerImg from "@/assets/images/badge.png";

const BottomFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Image src={logo} alt="Concinnity" width={250} height={50} />
          <p className="text-lg leading-relaxed">
            Our digital marketing agency can provide you with: a solid team that
            works on your campaigns, expertise that helps your brand move
            forward in the digital landscape, and results that define your
            success.
          </p>
          <form onSubmit={handleSubmit} className="flex pe-3">
            <input
              type="email"
              placeholder="Subscribe to our Newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black px-4 py-3 rounded-l-full w-full"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-r-full font-semibold">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid md:justify-center">
          <div className="">
            <h3 className="text-2xl font-bold mb-4 text-[#DDDDDD]">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {["ABOUT", "BLOG", "CONTACT", "TOOLS", "PRIVACY POLICY"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-orange-500 transition-colors font-bold text-[14px]">
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="grid md:justify-center">
          <div className="">
            <h3 className="text-2xl font-bold mb-4 text-[#DDDDDD]">Services</h3>
            <ul className="space-y-2">
              {[
                "SEO AUDIT",
                "ECOMMERCE SEO",
                "INTERNATIONAL SEO",
                "DATA ANALYSIS",
                "DATA ARCHITECTURE",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors font-bold text-[14px]">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 grid justify-center">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <Image
            className="rounded-lg cursor-pointer"
            src={footerImg}
            alt="Green Shield"
            width={250}
            height={250}
          />
        </div>
        <p className="text-md mt-1 font-bold text-center">
          © Copyright 2024 Concinnity Limited.
        </p>
      </div>
    </footer>
  );
};

export default BottomFooter;
