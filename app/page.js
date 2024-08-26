import ShortMentorships from "@/components/HeroCards/ShortMentorships";
import WelcomeHero from "@/components/NewHero/WelcomeHero";
import WhatWeDo from "@/components/NewHero/WhatWeDo";
import DemoView from "@/components/NewHero/DemoView";
import Head from "@/components/Head";
import New from "@/components/NewHero/New";
import Programming from "@/components/HeroCards/Programming";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <New />
      <Programming/>
      <Head />
      <WelcomeHero />
      <WhatWeDo />
      <DemoView />
      <ShortMentorships />
    </div>
  );
}
