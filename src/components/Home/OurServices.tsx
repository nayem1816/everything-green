import Image from "next/image";
import React from "react";
import serviceImg from "@/assets/icons/services.svg";
import dotImg from "@/assets/icons/service-dot.svg";

const OurServices = () => {
  return (
    <div className="py-20 shadow-top-bottom">
      <div className="container">
        <h2 className=" text-tertiary text-3xl md:text-7xl underline underline-offset-8 decoration-2 text-center font-dmSerif font-bold">
          Our Services
        </h2>
        <Image
          className="w-full h-full object-cover py-16 md:px-28 px-2"
          src={serviceImg}
          alt="Our Services"
          width={500}
          height={500}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
          <div className="grid justify-center items-center text-center">
            <Image src={dotImg} alt="Our Services" width={500} height={500} />
            <h2 className="text-primary font-bold text-2xl mt-4">TECHNOLOGY</h2>
          </div>
          <div className="grid justify-center items-center text-center">
            <Image src={dotImg} alt="Our Services" width={500} height={500} />
            <h2 className="text-primary font-bold text-2xl mt-4">MARKETING</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
