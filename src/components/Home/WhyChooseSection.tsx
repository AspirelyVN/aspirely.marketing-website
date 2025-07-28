"use client";

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { useTranslations } from "next-intl";

export default function WhyChooseSection() {
  const t = useTranslations("whyChooseUs");

  return (
    <section className="w-full bg-white py-16 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#9F0A0B]">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-black text-base md:text-lg items-stretch">
          {Array.from({ length: 4 }).map((_, idx) => (
            <FadeInWhenVisible key={idx} delay={idx * 0.2}>
              <div className="h-full flex flex-col border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <p className="font-semibold flex items-center text-[#9F0A0B]">
                  ✔ <span className="ml-2">{t(`items.${idx}.title`)}</span>
                </p>
                <p className="mt-2">{t(`items.${idx}.desc`)}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}