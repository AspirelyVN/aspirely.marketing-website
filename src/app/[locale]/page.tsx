import HeroSection from "@/components/Home/HeroSection";
import DidYouKnowSection from "@/components/Home/DidYouKnowSection";
import HighlightsSection from "@/components/Home/HighlightsSection";
import WorkshopPromoSection from "@/components/Home/WorkshopPromoSection";
import CoursesSection from "@/components/Home/CoursesSection";
import TeacherSection from "@/components/Home/TeacherSection";
import CefrSection from "@/components/Home/CefrSection";
import TestSection from "@/components/Home/TestSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import CTASection from "@/components/Home/CTASection";

// import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";


export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <HeroSection />

      <DidYouKnowSection />

      <HighlightsSection />

      <WorkshopPromoSection />

      <CoursesSection />

      <CefrSection />

      <TeacherSection />

      <TestSection />

      <TestimonialSection />

      <CTASection />
    </div>
  );
}