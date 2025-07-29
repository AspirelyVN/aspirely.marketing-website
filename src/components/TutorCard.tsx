"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import FancyButton from "@/components/FancyButton";
import { useRouter } from "next/navigation";
import { RiSpeakLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import * as Flags from "country-flag-icons/react/3x2";

import type { Tutor } from "@/types/tutor";

export default function TutorCard({
  id,
  name,
  countryCode,
  accent,
  experience,
  language,
  image = "/tutor.jpg",
}: Tutor) {
  const t = useTranslations("tutors");
  const router = useRouter();

  const Flag = Flags[countryCode as keyof typeof Flags];

  return (
    <div
      onClick={() => router.push(`/tutors/${id}`)}
      className="transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="bg-white border border-gray-300 rounded-xl overflow-hidden w-[300px] shadow-md hover:shadow-lg">
        <div className="relative w-[300px] aspect-[3/4]">
          <Image
            src={image}
            alt={`Tutor ${id}`}
            fill
            // priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            quality={80}
            className="object-cover"
          />
        </div>
        <div className="text-center border-t border-gray-200 px-4 py-3 text-xl text-black">
          <p className="font-semibold mb-2">{name}</p>
          <ul className="flex flex-col justify-start text-start space-y-1 mb-3 text-base">
            <li className="flex items-center space-x-2">
              {Flag && <Flag className="w-[18px] h-[12px]" />}
              <p>{accent}</p>
            </li>
            <li className="flex items-center space-x-2">
              <LuGraduationCap size={18} />
              <p>{experience}</p>
            </li>
            <li className="flex items-start space-x-2">
              <RiSpeakLine size={18} className="mt-0.5 flex-shrink-0" />
              <p className="line-clamp-2 min-h-[48px] leading-snug">{language}</p>
            </li>
          </ul>
          <FancyButton
            className="bg-[#9F0A0B] text-white px-4 py-1.5 text-sm rounded-full font-semibold hover:opacity-90 transition"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              window.location.href = "https://app.aspirely.edu.vn/register";
            }}
          >
            {t("cta")}
          </FancyButton>
        </div>
      </div>
    </div>
  );
}