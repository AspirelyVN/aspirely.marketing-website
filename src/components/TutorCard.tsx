"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import FancyButton from "@/components/FancyButton";
import { useRouter } from "next/navigation";
import { RiSpeakLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";

import type { Tutor } from "@/types/tutor";

export default function TutorCard({
  id,
  name,
  flag,
  accent,
  experience,
  language,
  image = "/tutor.jpg",
}: Tutor) {
  const t = useTranslations("tutors")
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/tutors/${id}`)}
      className="transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="bg-white border border-gray-300 rounded-xl overflow-hidden w-[320px] shadow-md hover:shadow-lg">
        <div className="relative w-full h-[320px]">
          <Image
            src={image}
            alt={`Tutor ${id}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center border-t border-gray-200 px-4 py-3 text-black">
          <p className="font-semibold mb-2">{name}</p>
          <ul className="flex flex-col justify-start text-start space-y-1 mb-3 text-sm">
            <li className="flex items-center space-x-2">
              <Image alt="Flag" src={flag} width={16} height={12} />
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
              e.stopPropagation()
              window.location.href = "https://app.aspirely.edu.vn/register"
            }}
          >
            {t("cta")}
          </FancyButton>
        </div>
      </div>
    </div>
  )
}