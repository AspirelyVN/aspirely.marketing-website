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
  class: string;
};

export default function TestimonialSection() {
  const messages = useMessages();
  const items = messages.Testimonial.items;

  return (
    <section className="relative w-full h-[650px] flex items-center">
      <div className="absolute h-[200px] aspect-[3/2] top-10 right-0 max-xl:hidden">
        <Image
          src="/assets/images/TestimonialSection/Logo.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:h-[550px] 2xl:h-[600px] aspect-[16/9]">
        <div className="relative w-full h-full">
          <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-full aspect-[9/16]">
            <Image
              src="/assets/images/TestimonialSection/Phone.svg"
              alt="Phone"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute left-[26%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] aspect-[16/9] flex flex-col">
            <p className="text-center mr-[5%] mb-4 text-6xl font-semibold text-[#9F0A0B]">
              Cảm nhận học viên
            </p>
            <div className="relative w-full h-full">
              <Image
                src="/assets/images/TestimonialSection/Chatbox.svg"
                alt="Chatbox"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
        {/* <Carousel 
          className="absolute inset-0 lg:left-[8%] translate-y-[40%] w-[40%] h-[360px]" 
          autoplay
          dots={false}
        >
          {items.map((item: Testimonial, i: number) => (
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
                </div>

                <div className="text-start whitespace-pre-line">
                  <p className="italic text-md text-gray-800">“{item.content}”</p>
                  <p className="mt-4 text-xl xl:text-2xl font-bold text-[#9F0A0B]">
                    {item.name}, {item.age}, {item.location} <br />
                    <span className="text-base text-gray-600">{item.class}</span>
                  </p>
                </div>
              </div>
            ))}
        </Carousel> */}
    </section>
  );
}