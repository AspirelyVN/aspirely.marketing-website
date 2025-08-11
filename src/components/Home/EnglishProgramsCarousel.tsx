"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  {
    id: "01",
    title: "Luyện nói IELTS",
    image: "/images/ielts.jpg",
  },
  {
    id: "02",
    title: "Luyện nói PTE",
    image: "/images/pte.jpg",
  },
  {
    id: "03",
    title: "Luyện nói TOEFL",
    image: "/images/toefl.jpg",
  },
  {
    id: "04",
    title: "Luyện nói TOEIC",
    image: "/images/toeic.jpg",
  },
  {
    id: "05",
    title: "Tiếng Anh giao tiếp",
    image: "/images/toefl.jpg",
  },
  {
    id: "06",
    title: "Tiếng Anh thương mại",
    image: "/images/toefl.jpg",
  },
];

export default function EnglishProgramsCarousel() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-[90%] max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 text-[#9F0A0B]">Tự Tin Luyện Nói Cùng Aspirely</h2>
      <p className="text-center text-neutral-700 mb-6 md:text-2xl font-semibold">Nâng tầm tiếng nói, mở rộng tương lai</p>

      {isDesktop ? (
        <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
          <CarouselContent className="py-8 gap-2">
            {items.map((item, index) => (
              <CarouselItem key={item.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                <div className="flex justify-center">
                  <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition w-[300px] sm:w-[320px]">
                    <div className="relative w-[300px] sm:w-[320px] aspect-square">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute left-4 top-4">
                        <div className="text-white text-5xl font-extrabold leading-none">{item.id}</div>
                        <div className="h-[3px] w-20 bg-white/90 mt-2" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-2xl font-bold drop-shadow">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-1.5rem]" />
          <CarouselNext className="right-[-1.5rem]" />
        </Carousel>
      ) : (
        <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-1 pt-6 pb-10">
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[260px] sm:w-[270px]">
              <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-md w-[260px] sm:w-[270px]">
                <div className="relative w-[260px] sm:w-[270px] aspect-square">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <div className="text-white text-5xl font-extrabold leading-none">{item.id}</div>
                    <div className="h-[3px] w-20 bg-white/90 mt-2" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold drop-shadow">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}