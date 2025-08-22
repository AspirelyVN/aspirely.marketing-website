"use client";

import { useEffect, useState } from "react";
import { Carousel } from "antd";
import { EnglishItems, ChineseItems, type Course } from "@/constants/courses-data";

export default function CoursesSection() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handle = () => setIsDesktop(window.innerWidth >= 1280);
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const data: Course[] = EnglishItems.concat(ChineseItems);

  const Card = ({ item }: { item: Course }) => (
    <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg relative">
      <div
        className="relative w-full h-[600px] group"
        style={{
          height: "600px",
          backgroundImage: `linear-gradient(${item.filterCode}80, ${item.filterCode}80), url(${item.backgroundImage})`,
          backgroundSize: `${3 * 100}% 100%`,
          backgroundPosition: `${((parseInt(item.id) - 1) / (3 - 1)) * 100}% center`,
          backgroundRepeat: "repeat",
        }}
      >

        <div className="absolute left-6 right-6 bottom-20 z-10">
          <div className="text-white text-7xl font-extrabold leading-none transform-gpu translate-y-0 transition-transform group-hover:-translate-y-16 [will-change:transform]">
            {item.id}
          </div>
          <div className="overflow-hidden max-h-0 opacity-0 transition-[max-height,opacity,transform] duration-300 group-hover:duration-1000 ease-out group-hover:h-50 group-hover:max-h-100 group-hover:opacity-100 group-hover:translate-y-0 [will-change:max-height,opacity,transform]">
            <p className="text-white/95 text-lg">
              {item.desc}
            </p>
          </div>
        </div>

        <div className="absolute left-6 right-6 bottom-6 z-10">
          <div className="h-[4px] w-28 bg-white/95 mb-4" />
          <h3 className="text-white text-2xl font-bold drop-shadow">{item.title}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <section 
        className="w-full mx-auto px-4 py-8"
        style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(/assets/images/CoursesSection/Banner.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
        }}
    >
        <div className="w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-center py-2 text-[#9F0A0B]">Tự Tin Luyện Nói Cùng Aspirely</h2>
            <p className="text-center text-neutral-700 md:text-2xl font-semibold">
                Nâng tầm tiếng nói, mở rộng tương lai
            </p>

            {isDesktop ? (
                <Carousel slidesToShow={3} infinite autoplay autoplaySpeed={3000} speed={1000} centerMode centerPadding="0px">
                    {data.map((item, i) => (
                        <div key={`${item.title}`} className="p-4">
                          <Card item={item} />
                        </div>
                    ))}
                </Carousel>
            ) : (
                <div className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar px-1 pt-6 pb-10">
                    {data.map((item) => (
                        <div key={item.title} className="flex-shrink-0 w-[400px]">
                          <Card item={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    </section>
  );
}