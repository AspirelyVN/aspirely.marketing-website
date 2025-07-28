"use client";

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useMessages, useTranslations } from "next-intl";
import TutorScheduleCalendar from "@/components/TutorScheduleCalendar";
import type { Tutor, Workshop, Review } from "@/types/tutor";

export default function TutorDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const t = useTranslations("tutors");
  const messages = useMessages();
  const tutorsData = messages.tutors.list;
  const tutor = tutorsData.find((t: Tutor) => String(t.id) === id);

  if (!tutor) return notFound();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 text-black">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-2/5 relative aspect-video flex items-center">
          {tutor.video ? (
            <video controls className="w-full h-full object-cover">
              <source src={tutor.video} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-sm text-gray-500">
              {t("noVideo")}
            </div>
          )}
        </div>

        <div className="w-full lg:w-3/5 flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-[#9F0A0B]">{tutor.name}</h1>
              <div className="flex text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
            </div>

            {tutor.about && (
              <p className="text-sm text-gray-700 whitespace-pre-line">
                <strong>{t("greeting")}</strong>
                <br />
                {tutor.about}
              </p>
            )}

            {Array.isArray(tutor.skills) && tutor.skills.length > 0 && (
              <div>
                <p className="font-semibold text-[#9F0A0B]">{t("specialties")}:</p>
                <div className="flex flex-wrap gap-3 mt-1">
                  {tutor.skills.map((s: string, i: number) => (
                    <span
                      key={i}
                      className="bg-[#B3B3B3] text-[#9F0A0B] font-semibold text-sm px-4 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {Array.isArray(tutor.workshops) && tutor.workshops.length > 0 && (
              <p className="text-sm text-[#9F0A0B] italic underline cursor-pointer">
                {t("seeWorkshops", { name: tutor.name })}
              </p>
            )}
          </div>

          <div className="w-full lg:w-1/3 p-4 flex flex-col items-center">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border mb-4">
              <Image
                src={tutor.image}
                alt={tutor.name}
                fill
                className="object-cover"
              />
            </div>
            <button className="bg-[#9F0A0B] text-white text-sm font-semibold px-6 py-2 rounded-full">
              {t("freeTrialButton")}
            </button>
          </div>
        </div>
      </div>

      {Array.isArray(tutor.workshops) && tutor.workshops.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            {t("upcomingWorkshopsTitle", { name: tutor.name })}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {tutor.workshops.map((w: Workshop, idx: number) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <h3 className="text-[#9F0A0B] font-semibold text-base mb-1">
                  {w.title}
                </h3>
                <p className="text-sm text-gray-700">
                  🗓 {w.date} - 🕒 {w.time}
                </p>
                <p className="text-sm text-gray-600 mt-1">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tutor.availability && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">{t("chooseSchedule")}</h2>
          <TutorScheduleCalendar availability={tutor.availability} />
        </div>
      )}

      {Array.isArray(tutor.reviews) && tutor.reviews.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">{t("studentReviews")}</h2>
          {tutor.reviews.map((r: Review, i: number) => (
            <div
              key={i}
              className="border border-gray-200 rounded-md p-4 mb-2 bg-white"
            >
              <p className="font-semibold">
                {r.name} ({r.country})
              </p>
              <p className="text-gray-700 italic mt-1">&quot;{r.content}&quot;</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}