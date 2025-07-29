"use client";

import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { useTranslations } from "next-intl";

const IMAGE_MAP = ["/students/PhuongNghi.webp", "/students/NhiNguyen.webp", "/students/MyMy.webp"];

export default function TestimonialSection() {
  const t = useTranslations("testimonial");

  return (
    <section className="w-full bg-[#F7F9FC] py-20 px-4 border-t">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#9F0A0B]">
          {t("title")}
        </h2>

        {[0, 1, 2].map((idx) => (
          <FadeInWhenVisible key={idx} delay={idx * 0.2}>
            <div
              className={`flex flex-col md:flex-row items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } gap-6 bg-white rounded-xl shadow-md border p-6`}
            >
              <div className="relative w-24 md:w-32 lg:w-36 aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={IMAGE_MAP[idx]}
                  alt={t(`items.${idx}.name`)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left md:flex-1 whitespace-pre-line">
                <p className="italic text-gray-800">“{t(`items.${idx}.content`)}”</p>
                <p className="mt-4 font-bold text-[#9F0A0B]">
                  {t(`items.${idx}.name`)}, {t(`items.${idx}.age`)}, {t(`items.${idx}.location`)}
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}