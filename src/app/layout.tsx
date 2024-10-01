import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/Header/TopBar";
import TopFooter from "@/components/Footer/TopFooter";
import BottomFooter from "@/components/Footer/BottomFooter";
import Navbar from "@/components/Header/Navbar";
import BannerSlider from "@/components/Home/BannerSlider";

export const metadata: Metadata = {
  title: "SEO Expert in Hong Kong | SEO Service Provider | Concinnity Limited",
  description:
    "Concinnity Limited is a SEO company in Hong Kong that provides SEO services to help businesses grow their online presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="md:fixed top-0 w-full z-50">
          <TopBar />
        </div>
        <div className="md:fixed top-[40px] w-full z-[999]">
          <Navbar />
        </div>
        <div className="">
          <BannerSlider />
        </div>
        <div className="">{children}</div>
        <TopFooter />
        <BottomFooter />
      </body>
    </html>
  );
}
