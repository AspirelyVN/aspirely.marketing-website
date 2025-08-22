"use client";

import Image from "next/image";
import { useMessages } from "next-intl";
import { Carousel } from "antd";
import { Star } from "lucide-react";

type Testimonial = {
  image: string;
  name: string;
  age: string;
  location: string;
  content: string;
};

export default function TestimonialSection() {
  const messages = useMessages();
  const t = messages?.testimonial;

  return (
    <section className="relative w-full max-w-7xl h-[650px] py-10">
        <Image
          src="/TestimonialBanner.svg"
          alt="Testimonial Section"
          fill
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="object-contain"
        />

        <Carousel 
          className="absolute inset-0 lg:left-[8%] translate-y-[40%] w-[40%] h-[360px]" 
          autoplay
          dots={false}
        >
          {t.items.map((item: Testimonial, i: number) => (
              <div key={i} className="w-full h-full flex flex-col justify-between space-y-5 p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-10">
                    <div className="relative w-15 h-15 xl:w-20 xl:h-20 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-full aspect-square object-cover"
                      />
                    </div>
                    <div className="flex space-x-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-8 h-8 xl:w-10 xl:h-10 fill-current text-yellow-300" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg xl:text-xl">{i + 1}/{t.items.length}</p>
                </div>

                <div className="text-start whitespace-pre-line">
                  <p className="italic text-md text-gray-800">“{item.content}”</p>
                  <p className="mt-4 text-xl xl:text-2xl font-bold text-[#9F0A0B]">
                    {item.name}, {item.age}, {item.location} <br />
                    <span className="text-base text-gray-600">Tham gia lớp 1 - 1</span>
                  </p>
                </div>
              </div>
            ))}
        </Carousel>
    </section>
  );
}