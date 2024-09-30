import Image from "next/image";
import React from "react";
import MailImage from "/src/assets/icons/mail.svg";
import Link from "next/link";
import SocialImage from "../Common/SocialImage";

const TopBar = () => {
  return (
    <div className="bg-secondary text-primary container h-[90px] md:h-[40px] grid md:flex md:items-center justify-between ">
      <div className="mail flex items-center gap-2">
        <Image
          className="w-5 h-5"
          src={MailImage}
          alt="mail"
          width={16}
          height={16}
        />
        <Link
          href="mailto:contact@concinnitylimited.com"
          className="text-[14px] font-bold inline-block">
          contact@concinnitylimited.com
        </Link>
      </div>
      <div className="socials flex items-center gap-3">
        <p className="text-[14px] font-bold">Follow us: </p>
        <div className="flex items-center gap-2">
          <SocialImage />
        </div>
        <Link href="/" className="text-[14px] font-bold">
          EN
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
