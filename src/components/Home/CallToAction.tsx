"use client";

import Link from "next/link";
import FancyButton from "@/components/FancyButton";
import { useTranslations } from "next-intl";

export default function CallToAction() {
  const t = useTranslations("cta");

  return (
    <section className="w-full bg-[#FDF3F3] py-12 px-4 border-t border-b border-[#F1D6D6]">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold text-[#9F0A0B]">
          {t("title")}
        </h2>
        <p className="text-gray-700 text-xl">
          {t("desc")}
        </p>
        <Link href="/contact-us">
          <FancyButton className="mt-2 text-lg">
            {t("button")}
          </FancyButton>
        </Link>
      </div>
    </section>
  );
}