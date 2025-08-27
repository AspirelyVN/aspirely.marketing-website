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
    <div className="relative w-full md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
        <Image
          src="/TestBackground.svg"
          alt="Description"
          fill
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="relative w-full h-full flex items-center left-[10%]">
          <div className="w-1/2 z-20 text-white flex flex-col items-center text-center">
            <form onSubmit={handleSubmit} className="space-y-4 w-[90%] flex flex-col items-start">
              <div className="relative w-[200px] h-[100px] md:w-[400px] md:h-[80px] lg:w-[450px] lg:h-[100px] xl:w-[550px] xl:h-[150px] z-20">
                <Image
                  src="/brush.svg"
                  alt="Brush Background"
                  fill
                  className=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
                    {t("subtitle")}
                  </span>
                </div>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-start font-bold leading-tight ">
                {t.rich("title", {
                  br: () => <br/>
                })}
              </h1>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white focus:outline-none py-1"
                placeholder={t("email")}
              />
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b border-white focus:outline-none py-1"
                placeholder={t("phone")}
              />

              <div className="w-[90%] text-start space-y-2 text-sm mt-4">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" checked={agree1} onChange={(e) => setAgree1(e.target.checked)} />
                  {t("agreement1")}
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" checked={agree2} onChange={(e) => setAgree2(e.target.checked)} />
                  {t("agreement2")}
                </label>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="w-full flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-[#9F0A0B] rounded-full px-6 py-2 text-xl font-semibold text-white"
                >
                  {t("button")}
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>  
  );
}