"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import banner1 from "@/assets/images/banner-image-1.jpg.webp";
import banner2 from "@/assets/images/banner-image-2.jpg.webp";
import banner3 from "@/assets/images/banner-img-3.jpg.webp";

import pushBtn from "@/assets/images/bottom-arrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

const BannerSlider = () => {
  const handlePush = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="">
      <Swiper
        modules={[Autoplay, EffectFade]}
        loop={true}
        effect={"fade"}
        spaceBetween={1}
        autoplay={{ delay: 1500 }}
        className="mySwiper">
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover -z-10"
              src={banner1 as StaticImageData}
              alt="banner"
              width={500}
              height={500}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start bg-black bg-opacity-50 z-10">
              <h2 className="text-secondary container xl:text-[120px] lg:text-[80px] md:text-[60px] text-[28px] leading-thin md:leading-none font-bold font-dmSerif mt-7 md:mt-0">
                Digital <br /> <span className="text-primary">Marketing</span>{" "}
                <br />
                That Goes <br />
                <span className="text-primary">Beyond Rankings</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={banner2 as StaticImageData}
              alt="banner"
              width={500}
              height={500}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start bg-black bg-opacity-50">
              <h2 className="text-secondary container xl:text-[120px] lg:text-[80px] md:text-[60px] text-[28px] leading-thin md:leading-none font-bold font-dmSerif mt-7 md:mt-0">
                Let’s <br /> <span className="text-primary">Jumpstart</span>{" "}
                <br />
                Your Digital <br />
                <span className="text-primary">Growth!</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={banner3 as StaticImageData}
              alt="banner"
              width={500}
              height={500}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start bg-black bg-opacity-50">
              <h2 className="text-secondary container xl:text-[120px] lg:text-[80px] md:text-[60px] text-[28px] leading-thin md:leading-none font-bold font-dmSerif mt-7 md:mt-0">
                Where <br /> <span className="text-primary">marketing</span>{" "}
                <br />
                meets <br />
                <span className="text-primary">tech</span>
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-x-0 flex justify-center z-50 -mt-28">
        <button onClick={() => handlePush()} className="">
          <Image
            className="w-6 h-6 cursor-pointer"
            src={pushBtn}
            alt="push"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
