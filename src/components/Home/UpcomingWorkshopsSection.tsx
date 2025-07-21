"use client";
import { useEffect, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiGlobe,
  FiDollarSign,
} from "react-icons/fi";
import Image from "next/image";

type Workshop = {
  title: string;
  date: string;
  time: string;
  language: string;
  speaker: string;
  price: string;
  bannerUrl: string;
};

const mockWorkshops: Workshop[] = [
  {
    title: "Nâng cao điểm Listening IELTS (5.5 lên 8) - Tháng 7/2025",
    date: "14/07/2025",
    time: "20:00 (giờ Việt Nam)",
    language: "Tiếng Anh",
    speaker: "Aimie Cook",
    price: "Miễn phí",
    bannerUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
  },
  {
    title: "Ý tưởng cho Writing Task 2 - Tháng 7/2025",
    date: "21/07/2025",
    time: "20:00 (giờ Việt Nam)",
    language: "Tiếng Anh",
    speaker: "Aimie Cook",
    price: "Miễn phí",
    bannerUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
  },
  {
    title: "Chinh phục IELTS Reading trong 7 ngày – Tháng 7/2025",
    date: "28/07/2025",
    time: "20:00 (giờ Việt Nam)",
    language: "Tiếng Anh",
    speaker: "Aimie Cook",
    price: "Miễn phí",
    bannerUrl: "https://placehold.co/600x400/000000/FFFFFF.png",
  },
];

export default function UpcomingWorkshopsSection() {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    setWorkshops(mockWorkshops);
  }, []);

  return (
    <section className="w-full bg-white py-12 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Workshop Sắp Diễn Ra
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((ws, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-40">
                <Image
                  src={ws.bannerUrl}
                  alt={ws.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                  <div className="flex items-center text-sm gap-2 mb-4">
                    <FiDollarSign /> <span>{ws.price}</span>
                  </div>
                </div>

                <button className="bg-[#EF4444] text-white py-2 px-4 mt-auto rounded hover:bg-red-600 transition">
                  Đăng ký miễn phí
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}