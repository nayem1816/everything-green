import Image from "next/image";
import React from "react";
import cardImg1 from "@/assets/images/Ecomerce-case-study-copy-700x500.jpg.webp";
import cardImg2 from "@/assets/images/Lead-generation-700x500.jpg.webp";
import cardImg3 from "@/assets/images/UK-property-lead-generation-700x500.jpg.webp";
import cardImg4 from "@/assets/images/SEO-case-study-700x500.jpg.webp";
import Link from "next/link";

const caseImages = [
  {
    title: "E-commerce Case Study",
    src: cardImg1,
  },
  {
    title: "Lead Generation Case Study",
    src: cardImg2,
  },
  {
    title: "UK Property Lead Generation Case Study",
    src: cardImg3,
  },
  {
    title: "SEO Case Study",
    src: cardImg4,
  },
];

const CaseStudy = () => {
  return (
    <div className="py-36 bg-tertiary">
      <div className="container">
        <h2 className=" text-secondary text-3xl md:text-7xl underline underline-offset-8 decoration-2 text-center font-dmSerif font-bold">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-28 px-5">
          {caseImages.map((image, index) => (
            <Link href="/" key={index} className="relative group">
              <Image
                src={image.src}
                alt={image.title}
                layout="responsive"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start hover:border-t-[5px] hover:border-b-[5px] hover:border-primary group-hover:border-primary">
                <div className="opacity-100 group-hover:opacity-200 px-8 transition duration-400">
                  <h3 className="text-white group-hover:text-primary text-3xl md:text-5xl font-bold tracking-wider">
                    {image.title}
                  </h3>
                  <div className="w-[80px] h-[6px] bg-secondary group-hover:bg-primary  mt-8"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
