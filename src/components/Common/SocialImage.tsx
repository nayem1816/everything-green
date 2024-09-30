import React from "react";
import FacebookImage from "/src/assets/icons/facebook.svg";
import TwitterImage from "/src/assets/icons/twitter.svg";
import LinkedinImage from "/src/assets/icons/linkedin.svg";
import YoutubeImage from "/src/assets/icons/youtube.svg";
import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: FacebookImage,
    alt: "facebook",
  },
  {
    src: TwitterImage,
    alt: "twitter",
  },
  {
    src: LinkedinImage,
    alt: "linkedin",
  },
  {
    src: YoutubeImage,
    alt: "youtube",
  },
];

const SocialImage = () => {
  return (
    <>
      {images.map((image, index) => (
        <Link key={index} href={`/`}>
          <Image
            className="w-5 h-5"
            src={image.src}
            alt={image.alt}
            width={16}
            height={16}
          />
        </Link>
      ))}
    </>
  );
};

export default SocialImage;
