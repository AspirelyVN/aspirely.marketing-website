"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

import FancyButton from "@/components/FancyButton";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[-1]" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 whitespace-pre-line leading-tight">
          Speak to the world!
        </h1>

        <Link href="/contact-us">
          <FancyButton className="text-base px-8 py-2">{t("contact")}</FancyButton>
        </Link>
      </div>
    </div>
  );
}