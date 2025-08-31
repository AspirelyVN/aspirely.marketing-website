"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TestSection() {
  const t = useTranslations("Test");

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
    <div className="relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[760px] overflow-hidden">
      <Image
        src="/assets/images/TestSection/MobileBanner.svg"
        alt="Main background"
        fill
        priority
        className="object-cover lg:hidden"
      />
      <Image
        src="/assets/images/TestSection/DesktopBanner.svg"
        alt="Main background"
        fill
        priority
        className="object-contain hidden lg:block"
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="w-full md:w-1/2 text-white">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="relative w-[240px] h-[96px] sm:w-[360px] sm:h-[108px] md:w-[420px] md:h-[120px] lg:w-[520px] lg:h-[140px] xl:w-[600px] xl:h-[160px]">
                <Image src="/brush.svg" alt="Brush Background" fill />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                    {t("subtitle")}
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t.rich("title", { br: () => <br /> })}
              </h1>

              <div className="grid grid-cols-1 gap-4 sm:gap-5">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/90 placeholder-white/80 focus:outline-none py-2 text-base sm:text-lg"
                  placeholder={t("email")}
                />
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent border-b border-white/90 placeholder-white/80 focus:outline-none py-2 text-base sm:text-lg"
                  placeholder={t("phone")}
                />
              </div>

              <div className="space-y-3 text-sm sm:text-base">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={agree1}
                    onChange={(e) => setAgree1(e.target.checked)}
                  />
                  {t("agreement1")}
                </label>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={agree2}
                    onChange={(e) => setAgree2(e.target.checked)}
                  />
                  {t("agreement2")}
                </label>
              </div>

              {error && <p className="text-red-300 text-sm">{error}</p>}

              <div className="flex">
                <button
                  type="submit"
                  className="bg-[#9F0A0B] rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-lg sm:text-xl font-semibold text-white"
                >
                  {t("button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}