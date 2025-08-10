"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiGlobe
} from "react-icons/fi";
import Image from "next/image";
import FancyButton from "../FancyButton";

type Workshop = {
  title: string;
  date: string;
  time: string;
  language: string;
  speaker: string;
  bannerUrl: string;
};

export default function UpcomingWorkshopsSection() {
  const t = useTranslations();
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    const rawList = t.raw("workshops.list") as Workshop[];

    const parsedList: Workshop[] = rawList.map((item) => ({
      title: item.title,
      date: item.date,
      time: item.time,
      language: item.language,
      speaker: item.speaker,
      bannerUrl: "/workshop-banner.webp",
    }));

    setWorkshops(parsedList);
  }, [t]);

  return (
    <section className="w-full lg:flex bg-white py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          <span className="text-[#9F0A0B]">{t("workshops.title")}</span>
        </h2>

        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-6 snap-x snap-mandatory w-max">
            {workshops.map((ws, index) => (
              <div
                key={index}
                className="w-[300px] shrink-0 border rounded-lg shadow-lg overflow-hidden flex flex-col snap-start"
              >
                <div className="relative w-[300px] h-[200px] aspect-[3/2]">
                  <Image
                    src={ws.bannerUrl}
                    alt={ws.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{ws.title}</h3>
                    <div className="flex items-center text-sm gap-2 mb-2">
                      <FiCalendar /> <span>{ws.date}</span>
                    </div>
                    <div className="flex items-center text-sm gap-2 mb-2">
                      <FiClock /> <span>{ws.time}</span>
                    </div>
                    <div className="flex items-center text-sm gap-2 mb-2">
                      <FiGlobe /> <span>{ws.language}</span>
                    </div>
                    <div className="flex items-center text-sm gap-2 mb-2">
                      <FiUser /> <span>{ws.speaker}</span>
                    </div>
                  </div>

                  <FancyButton className="bg-[#9F0A0B] text-white py-2 px-4 mt-auto rounded hover:bg-[#9F0A0B]/80 transition">
                    {t("workshops.cta")}
                  </FancyButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}