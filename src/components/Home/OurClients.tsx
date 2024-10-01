import React from "react";
import Image from "next/image";
import client1 from "@/assets/images/logo_fashionTV.png.webp";
import client2 from "@/assets/images/logo_Nissin.png.webp";
import client3 from "@/assets/images/logo_DP-world.png.webp";
import client4 from "@/assets/images/logo_city-of-dreams.png.webp";
import client5 from "@/assets/images/logo_KPMG.png.webp";
import client6 from "@/assets/images/logo_THP-Group.png.webp";
import client7 from "@/assets/images/logo_Pacific-Prime.png.webp";
import client8 from "@/assets/images/logo_YesStyle.png.webp";
import client9 from "@/assets/images/logo_Beconcept-.png.webp";
import Link from "next/link";

const clientsData = [
  {
    id: 1,
    image: client1,
    alt: "Fashion TV",
  },
  {
    id: 2,
    image: client2,
    alt: "Nissin",
  },
  {
    id: 3,
    image: client3,
    alt: "DP World",
  },
  {
    id: 4,
    image: client4,
    alt: "City of Dreams",
  },
  {
    id: 5,
    image: client5,
    alt: "KPMG",
  },
  {
    id: 6,
    image: client6,
    alt: "THP Group",
  },
  {
    id: 7,
    image: client7,
    alt: "Pacific Prime",
  },
  {
    id: 8,
    image: client8,
    alt: "YesStyle",
  },
  {
    id: 9,
    image: client9,
    alt: "Beconcept",
  },
];

const OurClients = () => {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className=" text-tertiary text-3xl md:text-7xl underline underline-offset-8 decoration-2 text-center font-dmSerif font-bold">
          Our Clients
        </h2>
        <div className="grid grid-cols-3 gap-x-16 gay-y-16 md:gap-y-24 mt-20 md:px-56  justify-center items-center">
          {clientsData.map((client) => (
            <Link
              href="/"
              key={client.id}
              className=" flex justify-center items-center">
              <Image
                className="filter grayscale hover:filter-none  object-contain w-56 h-32 transition duration-300"
                src={client.image}
                alt={client.alt}
                width={200}
                height={100}
                objectFit="contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
