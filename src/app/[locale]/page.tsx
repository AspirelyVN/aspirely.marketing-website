"use client";
// import { useTranslations } from "next-intl";
// import { MdOutlineWifi } from "react-icons/md";
// import { RiSpeakLine } from "react-icons/ri";

import HeroSection from "@/components/Home/HeroSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import TutorCarousel from "@/components/Home/TutorCarousel";
import CallToAction from "@/components/Home/CallToAction";
import UpcomingWorkshopsSection from "@/components/Home/UpcomingWorkshopsSection";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function Home() {
  // const t = useTranslations("home");

  return (
    <div className="w-full flex flex-col items-center scroll-smooth">
      <HeroSection />

      {/* <FadeInWhenVisible delay={0.2}>
        <section className="w-full bg-[#0D356B] py-6 px-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-white text-lg font-semibold">
            <div className="flex items-center gap-3">
              <MdOutlineWifi size={28} />
              <span>{t("slogan1")}</span>
            </div>
            <div className="flex items-center gap-3">
              <RiSpeakLine size={28} />
              <span>{t("slogan2")}</span>
            </div>
          </div>
        </section>
      </FadeInWhenVisible> */}

      <FadeInWhenVisible delay={0.3}>
        <TutorCarousel />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <UpcomingWorkshopsSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.5}>
        <WhyChooseSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.6}>
        <TestimonialSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.7}>
        <CallToAction />
      </FadeInWhenVisible>
    </div>
  );
}