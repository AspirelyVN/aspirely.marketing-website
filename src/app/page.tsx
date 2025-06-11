"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full bg-[#9F0A0B] sticky top-0 z-50 flex justify-between items-center px-5 py-2 font-semibold border-b shadow-md">
        <div className="h-full">
          <Image src="/Logo.svg" alt="logo" width={60} height={60} />
        </div>

        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-[#9F0A0B] md:bg-transparent flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-5 px-5 py-3 z-50`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-x-5 space-y-2 md:space-y-0">
            <span className="text-white p-2">FIND TUTORS</span>
            <span className="text-white p-2">COURSES</span>
            <span className="text-white p-2">JOIN US</span>
            <div className="p-2">
              <span className="bg-white text-[#9F0A0B] p-2">ENGLISH</span>
              <span className="bg-white text-[#9F0A0B] p-2 border-l">VNĐ</span>
            </div>
            <button className="border-2 px-4 py-1.5 rounded-full text-white">
              LOG IN
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center py-10 px-4 gap-y-8 md:gap-y-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4 scale-100 text-center md:text-left">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug">
            SPEAK <br /> TO THE <br /> WORLD
          </p>
          <button className="border-2 rounded-full text-[#9F0A0B] px-6 py-2 text-base md:text-xl">
            LET&apos;S GET STARTED!
          </button>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full pt-[65%]">
            <div className="absolute w-[35%] left-[5%] top-0 z-10 aspect-[3/4]">
              <Image
                src="/Tablet.svg"
                alt="Tablet"
                fill
                priority
                sizes="(max-width: 768px) 35vw, 200px"
                className="object-contain"
              />
            </div>
            <div className="absolute w-[70%] left-[25%] top-[30%] z-20 aspect-[16/10]">
              <Image
                src="/Laptop.svg"
                alt="Laptop"
                fill
                priority
                sizes="(max-width: 768px) 70vw, 400px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#9F0A0B] py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            ["STEP 1", "Choose what you<br />want to learn"],
            ["STEP 2", "Select a plan that fits<br />your budget"],
            ["STEP 3", "Find the right tutor<br />for you"],
            ["STEP 4", "Start learning with<br />confidence"],
          ].map(([step, text], i) => (
            <div key={i}>
              <h3 className="font-bold text-xl mb-2">{step}</h3>
              <p
                className="text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>
      </div>

      {[
        {
          title: "English",
          bg: "bg-gradient-to-tr from-[#5CDFE5] to-[#004AAD]",
        },
        { title: "Chinese", bg: "bg-[#9F0A0B]" },
      ].map(({ title, bg }, i) => (
        <div key={i} className={`w-full py-16 px-4 ${bg}`}>
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-12">
            Meet our <span className="text-white font-bold">{title} tutors</span>
          </h2>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto px-2">
              {[1, 2, 3, 4].map((j) => (
                <div
                  key={j}
                  className="min-w-[240px] max-w-[300px] flex-shrink-0 bg-white border border-black rounded-md shadow-md"
                >
                  <div className="w-full aspect-[4/3]">
                    <Image
                      src="/tutor.jpg"
                      alt={`Tutor ${j}`}
                      width={300}
                      height={225}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 border-t border-black text-center text-black">
                    <p className="text-sm leading-6">
                      -------------------------<br />
                      -------------------------<br />
                      ----------
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <span className="text-2xl font-bold">{"<"}</span>
            </button>
            <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
              <span className="text-2xl font-bold">{">"}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}