"use client";
// import { useTranslations } from "next-intl";
// import { MdOutlineWifi } from "react-icons/md";
// import { RiSpeakLine } from "react-icons/ri";
import Image from "next/image";

import HeroSection from "@/components/Home/HeroSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import TutorCarousel from "@/components/Home/TutorCarousel";
import CallToAction from "@/components/Home/CallToAction";
import UpcomingWorkshopsSection from "@/components/Home/UpcomingWorkshopsSection";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import DoubleDotPattern from "@/components/DoubleDotPattern";

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

      <div className="relative w-full h-[650px]">
        <Image
          src="/Test-bg.svg"
          alt="Description"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-0 left-50 -rotate-0 w-[600px] h-[200px] z-20">
          <Image
            src="/brush.svg"
            alt="Brush Background"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-6xl font-extrabold">
              Trong Vài Phút
            </span>
          </div>
        </div>

        <div className="absolute top-[180px] left-[280px] z-20 text-white">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Kiểm Tra Trình Độ <br /> Ngoại Ngữ Của Bạn
          </h1>

          <form className="space-y-4 max-w-xl">
            <div>
              <input
                id="email"
                type="email"
                className="w-full bg-transparent border-b border-white focus:outline-none py-1"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                id="phone"
                type="tel"
                className="w-full bg-transparent border-b border-white focus:outline-none py-1"
                placeholder="Phone number"
              />
            </div>

            <div className="space-y-2 text-sm mt-4">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                Tôi đồng ý tham gia danh sách nhận thông tin khóa học tiếng Anh trực tuyến.
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                Tôi đồng ý để ASPIRELY liên hệ với tôi qua điện thoại, email hoặc tin nhắn SMS nhằm hỗ trợ giải đáp thắc mắc của tôi
              </label>
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[#9F0A0B] rounded-full px-6 py-2 text-xl font-semibold text-white"
              >
                Kiểm Tra Miễn Phí
              </button>
            </div>
          </form>
        </div>

        <div className="absolute top-8 -left-25 rotate-135 w-52 h-52 overflow-hidden z-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="stripes" patternUnits="userSpaceOnUse" width="8" height="8">
                <rect width="4" height="100" fill="white" />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#stripes)" />
          </svg>
        </div>

        <DoubleDotPattern />

        <Image
          src="/person.svg"
          alt="Student"
          width={550}
          height={500}
          className="absolute bottom-0 right-0 z-20 object-contain"
        />

        <div className="absolute top-1/2 -right-25 rotate-45 w-56 h-56 overflow-hidden -translate-y-1/2 z-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="stripesRight" patternUnits="userSpaceOnUse" width="8" height="8">
                <rect width="4" height="100" fill="white" />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#stripesRight)" />
          </svg>
        </div>
      </div>

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