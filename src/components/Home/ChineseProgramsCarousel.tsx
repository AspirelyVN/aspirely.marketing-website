"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
  { id: "01", title: "Luyện nói HSKK", image: "/images/hskspeaking.jpg" },
  { id: "02", title: "Luyện nói TOCFL", image: "/images/tocflspeaking.jpg" },
  { id: "03", title: "Tiếng Trung cơ bản", image: "/images/chinesecommunication.jpg" },
  { id: "04", title: "Tiếng Trung giao tiếp", image: "/images/chinesecommunication.jpg" },
  { id: "05", title: "Tiếng Trung thương mại", image: "/images/chinesecommunication.jpg" },
];

export default function ChineseProgramsCarousel() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = "/ChineseCourseBanner.png";
  const totalItems = items.length;

  return (
    <section className="w-[90%] max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-2 text-[#9F0A0B]">
        Tự Tin Luyện Nói Cùng Aspirely
      </h2>
      <p className="text-center text-neutral-700 mb-6 md:text-2xl font-semibold">
        Nâng tầm tiếng nói, mở rộng tương lai
      </p>

      {isDesktop ? (
        <Carousel opts={{ align: "start", loop: true }} className="relative w-full">
          <CarouselContent className="py-8 gap-2">
            {items.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="flex justify-center">
                  <div
                    className="relative w-[300px] sm:w-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-300"
                    style={{
                      height: "500px",
                      backgroundImage: `url(${backgroundImage})`,
                      backgroundSize: `${3 * 100}% 100%`,
                      backgroundPosition: `${(index / (3 - 1)) * 100}% center`,
                      backgroundRepeat: "repeat",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <div className="text-white text-5xl font-extrabold leading-none">
                        {item.id}
                      </div>
                      <div className="h-[3px] w-20 bg-white/90 mt-2" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold drop-shadow">
                        {item.title}
                      </h3>
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
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[260px] sm:w-[270px] rounded-2xl overflow-hidden shadow-md border border-gray-300"
              style={{
                height: "650px",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: `${totalItems * 100}% 100%`,
                backgroundPosition: `${(index / (totalItems - 1)) * 100}% center`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4">
                  <div className="text-white text-5xl font-extrabold leading-none">
                    {item.id}
                  </div>
                  <div className="h-[3px] w-20 bg-white/90 mt-2" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}