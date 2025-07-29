"use client";

import HeroSection from "@/components/Home/HeroSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import TutorCarousel from "@/components/Home/TutorCarousel";
import CallToAction from "@/components/Home/CallToAction";
import UpcomingWorkshopsSection from "@/components/Home/UpcomingWorkshopsSection";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import TestSection from "@/components/Home/TestSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center scroll-smooth">
      <HeroSection />
      <FadeInWhenVisible delay={0.3}>
        <TutorCarousel />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <TestSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.5}>
        <UpcomingWorkshopsSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.6}>
        <WhyChooseSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.7}>
        <TestimonialSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.8}>
        <CallToAction />
      </FadeInWhenVisible>
    </div>
  );
}