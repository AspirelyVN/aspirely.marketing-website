"use client";

import { useState } from "react";
import Image from "next/image";
import DoubleDotPattern from "@/components/DoubleDotPattern";

export default function TestSection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !agree1 || !agree2) {
      setError("Vui lòng điền đầy đủ thông tin và đồng ý với các điều khoản.");
      return;
    }
    setError("");
    await fetch("/api/set-test-cookie");
    window.location.href = "/test";
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/Test-bg.webp"
          alt="Description"
          fill
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="absolute top-[5%] left-[10%] -rotate-0 w-[200px] h-[50px] lg:w-[500px] lg:h-[150px] xl:w-[600px] xl:h-[200px] z-20">
          <Image
            src="/brush.svg"
            alt="Brush Background"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white lg:text-5xl xl:text-6xl font-extrabold">
              Trong Vài Phút
            </span>
          </div>
        </div>

        <div className="w-full absolute top-[15%] lg:top-[30%] left-1/2 md:left-[15%] -translate-x-1/2 md:translate-x-0 z-20 text-white flex flex-col items-center text-center md:items-start lg:text-left">
          <h1 className="text-2xl lg:text-4xl xl:text-6xl text-start font-bold leading-tight mb-6">
            Kiểm Tra Trình Độ <br /> Ngoại Ngữ Của Bạn
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl w-2/3 md:w-1/2 xl:w-[80%]">
            <div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white focus:outline-none py-1"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b border-white focus:outline-none py-1"
                placeholder="Phone number"
              />
            </div>

            <div className="text-start space-y-2 text-sm mt-4">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" checked={agree1} onChange={(e) => setAgree1(e.target.checked)} />
                Tôi đồng ý tham gia danh sách nhận thông tin khóa học tiếng Anh trực tuyến.
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" checked={agree2} onChange={(e) => setAgree2(e.target.checked)} />
                Tôi đồng ý để ASPIRELY liên hệ với tôi qua điện thoại, email hoặc tin nhắn SMS nhằm hỗ trợ giải đáp thắc mắc của tôi
              </label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[#9F0A0B] rounded-full px-6 py-2 text-xl font-semibold text-white"
              >
                Kiểm Tra Miễn Phí
              </button>
            </div>
          </form>
        </div>

        <div className="absolute top-8 -left-20 lg:-left-25 rotate-135 w-30 h-30 lg:w-40 lg:h-40 xl:w-52 xl:h-52 overflow-hidden z-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="stripes" patternUnits="userSpaceOnUse" width="8" height="8">
                <rect width="4" height="100" fill="white" />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#stripes)" />
          </svg>
        </div>

        <DoubleDotPattern />

        <div className="absolute bottom-0 -right-[5%] lg:-right-[0%]
          md:w-[400px] md:h-[400px]
          lg:w-[480px] lg:h-[480px]
          xl:w-[500px] xl:h-[500px]
          z-20"
        >
          <Image
              src="/person.webp"
              alt="Student"
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
          />
        </div>

        <div className="absolute top-1/2 -right-20 lg:-right-25 rotate-45 w-30 h-30 lg:w-40 lg:h-40 xl:w-52 xl:h-52 overflow-hidden -translate-y-1/2 z-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="stripesRight" patternUnits="userSpaceOnUse" width="8" height="8">
                <rect width="4" height="100" fill="white" />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#stripesRight)" />
          </svg>
        </div>
    </div>  
  );
}