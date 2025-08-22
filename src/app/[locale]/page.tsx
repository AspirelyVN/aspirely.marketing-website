import HeroSection from "@/components/Home/HeroSection";
import DidYouKnowSection from "@/components/Home/DidYouKnowSection";
import HighlightsSection from "@/components/Home/HighlightsSection";
import WorkshopPromoSection from "@/components/Home/WorkshopPromoSection";
import CoursesSection from "@/components/Home/CoursesSection";
import TeacherSection from "@/components/Home/TeacherSection";
import CefrSection from "@/components/Home/CefrSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import TestSection from "@/components/Home/TestSection";


export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <HeroSection />

      <DidYouKnowSection />

      <HighlightsSection />

      <WorkshopPromoSection />

      <CoursesSection />

      <CefrSection />

      {/* <FadeInWhenVisible delay={0.3}>
        <section id="tutors" className="scroll-mt-[80px]">
          <TeacherSection />
        </section>
      </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible delay={0.4}>
        <TestSection />
      </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible delay={0.5}>
        <WorkshopsSection />
      </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible delay={0.6}>
        <EnglishProgramsCarousel />
      </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible delay={0.7}>
        <ChineseProgramsCarousel />
      </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible delay={0.8}>
        <HowItWorksSection />
      </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible delay={0.7}>
        <TestimonialSection />
      </FadeInWhenVisible> */}

      {/* <FadeInWhenVisible delay={1.0}>
        <CallToAction />
      </FadeInWhenVisible> */}
    </div>
  );
}