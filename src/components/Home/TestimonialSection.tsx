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
    <section className="relative w-full h-[650px] py-10">
        <Image
          src="/TestimonialBanner.svg"
          alt="Testimonial Section"
          fill
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="object-cover"
        />

        <Carousel 
          className="absolute inset-0 left-[8%] translate-y-[36%] w-[580px] h-[360px]" 
          autoplay
          dots={false}
        >
          {t.items.map((item: Testimonial, i: number) => (
              <div className="w-full h-full flex flex-col justify-between space-y-10 p-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-full aspect-square object-cover"
                    />
                    <div className="flex space-x-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-10 h-10 fill-current text-yellow-300" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-xl">{i + 1}/{t.items.length}</p>
                </div>

                <div className="text-start whitespace-pre-line">
                  <p className="italic text-md text-gray-800">“{item.content}”</p>
                  <p className="mt-4 text-2xl font-bold text-[#9F0A0B]">
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