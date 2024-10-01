import CaseStudy from "@/components/Home/CaseStudy";
import DigitalMarketing from "@/components/Home/DigitalMarketing";
import LetsTalk from "@/components/Home/LetsTalk";
import OurClients from "@/components/Home/OurClients";
import OurServices from "@/components/Home/OurServices";
import SeoServices from "@/components/Home/SeoServices";
import TopNotch from "@/components/Home/TopNotch";

export default function Home() {
  return (
    <div className="">
      <TopNotch />
      <OurServices />
      <SeoServices />
      <CaseStudy />
      <DigitalMarketing />
      <OurClients />
      <LetsTalk />
    </div>
  );
}
