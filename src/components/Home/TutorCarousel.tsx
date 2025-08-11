"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useMessages } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { FlagComponent, GB, TW } from "country-flag-icons/react/3x2";
import FancyButton from "@/components/FancyButton";
import { RiSpeakLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";

import TutorCard from "@/components/TutorCard";
import type { Tutor } from "@/types/tutor";

const flagMap: Record<string, FlagComponent> = {
  GB,
  TW,
};

export default function TutorCarousel() {
  const router = useRouter();
  const t = useTranslations("tutors");
  const messages = useMessages();
  const tutorsData = messages.tutors.list;

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loopedTutors =
    tutorsData.length < 6
      ? Array(Math.ceil(9 / tutorsData.length)).fill(tutorsData).flat()
      : tutorsData;

  return (
    <div id="tutors" className="scroll-mt-20 w-[90%] max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        {t("title.part1")} <span className="text-[#9F0A0B]">{t("title.part2")}</span> {t("title.part3")}
      </h2>

      {isDesktop ? (
        <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
          <CarouselContent className="py-8 gap-2">
            {loopedTutors.map((tutor: Tutor, index: number) => (
              <CarouselItem
                key={`${tutor.id}-${index}`}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="flex justify-center">
                  <TutorCard {...tutor} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-1.5rem]" />
          <CarouselNext className="right-[-1.5rem]" />
        </Carousel>
      ) : (
        <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-1 pt-6 pb-10">
          {tutorsData.map((tutor: Tutor) => {
            const countryCode = tutor.countryCode?.toUpperCase();
            const Flag = flagMap[countryCode || ""];

            return (
              <div
                key={tutor.id}
                onClick={() => router.push(`/tutors/${tutor.id}`)}
                className="flex-shrink-0 w-[250px] sm:w-[270px] transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="relative w-[250px] sm:w-[270px] aspect-square">
                    <Image
                      src={tutor.image}
                      alt={`Tutor ${tutor.id}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center border-t border-gray-200 px-4 py-3 text-xl text-black">
                    <p className="font-semibold mb-2">{tutor.name}</p>
                    <ul className="flex flex-col justify-start text-start space-y-1 mb-3 text-base">
                      <li className="flex items-center space-x-2">
                        {Flag && <Flag className="w-[18px] h-[12px]" />}
                        <p>{tutor.accent}</p>
                      </li>
                      <li className="flex items-center space-x-2">
                        <LuGraduationCap size={18} />
                        <p>{tutor.experience}</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <RiSpeakLine size={18} className="mt-0.5 flex-shrink-0" />
                        <p className="line-clamp-2 min-h-[48px] leading-snug">{tutor.language}</p>
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
          })}
        </div>
      )}
    </div>
  );
}