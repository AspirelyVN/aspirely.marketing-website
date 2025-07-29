"use client";
import Image from "next/image";
import DoubleDotPattern from "@/components/DoubleDotPattern";

export default function TestSection() {
  return (
    <div className="relative w-full h-[650px] overflow-hidden">
        <Image
          src="/Test-bg.svg"
          alt="Description"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-[5%] left-[10%] -rotate-0 lg:w-[500px] lg:h-[150px] xl:w-[600px] xl:h-[200px] z-20">
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

        <div className="absolute top-[30%] left-[15%] z-20 text-white">
          <h1 className="lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Kiểm Tra Trình Độ <br /> Ngoại Ngữ Của Bạn
          </h1>

          <form className="space-y-4 max-w-xl w-1/2 lg:w-[80%] xl:w-full">
            <div>
              <input
                id="email"
                type="email"
                className="w-full bg-transparent border-b border-white focus:outline-none py-1"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                id="phone"
                type="tel"
                className="w-full bg-transparent border-b border-white focus:outline-none py-1"
                placeholder="Phone number"
              />
            </div>

            <div className="space-y-2 text-sm mt-4">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                Tôi đồng ý tham gia danh sách nhận thông tin khóa học tiếng Anh trực tuyến.
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                Tôi đồng ý để ASPIRELY liên hệ với tôi qua điện thoại, email hoặc tin nhắn SMS nhằm hỗ trợ giải đáp thắc mắc của tôi
              </label>
            </div>

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

        <div className="absolute top-8 -left-25 rotate-135 lg:w-40 lg:h-40 xl:w-52 xl:h-52 overflow-hidden z-10">
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

        <div className="absolute bottom-0 -right-[5%] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] z-20">
            <Image
                src="/person.svg"
                alt="Student"
                fill
                sizes="(max-width: 1280px) 100vw, 50vw"
            />
        </div>

        <div className="absolute top-1/2 -right-25 rotate-45 lg:w-40 lg:h-40 xl:w-52 xl:h-52 overflow-hidden -translate-y-1/2 z-10">
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