import CaseStudy from "@/components/Home/CaseStudy";
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
    </div>
  );
}
