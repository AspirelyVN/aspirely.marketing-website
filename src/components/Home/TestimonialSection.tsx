"use client";

import Image from "next/image";
import { useMessages } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="w-full bg-[#F7F9FC] py-20 px-4 border-t">
      <div className="w-full mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9F0A0B]">
          {t.title}
        </h2>

        <Carousel className="w-[80%] mx-auto" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {t.items.map((item: Testimonial, idx: number) => (
              <CarouselItem key={idx} className="flex justify-center">
                <div className="flex items-center gap-6 bg-white rounded-xl shadow-md border p-6 w-full">
                  <div className="relative w-[150px] aspect-[3/4] rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={150}
                      height={200}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="text-center whitespace-pre-line">
                    <p className="italic text-gray-800">“{item.content}”</p>
                    <p className="mt-4 font-bold text-[#9F0A0B]">
                      {item.name}, {item.age}, {item.location}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}