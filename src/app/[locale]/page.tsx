import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import TutorCarousel from "@/components/Home/TutorCarousel";
import CallToAction from "@/components/Home/CallToAction";
import WorkshopsSection from "@/components/Home/WorkshopsSection";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import TestSection from "@/components/Home/TestSection";
import EnglishProgramsCarousel from "@/components/Home/EnglishProgramsCarousel";
import ChineseProgramsCarousel from "@/components/Home/ChineseProgramsCarousel";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center scroll-smooth">
      <HeroSection />
      <FadeInWhenVisible delay={0.3}>
        <TutorCarousel />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <TestSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.5}>
        <WorkshopsSection />
      </FadeInWhenVisible>

      <EnglishProgramsCarousel />

      <ChineseProgramsCarousel />

      <FadeInWhenVisible delay={0.6}>
        <HowItWorksSection />
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