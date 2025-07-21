"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import { FiUser, FiPhone, FiMail, FiBookOpen } from "react-icons/fi";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Background from "../../../public/Background.webp";
import FormBackground from "../../../public/FormBackground.svg";
import FancyButton from "@/components/FancyButton";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin", "vietnamese"],
});

export default function HeroSection() {
  const t = useTranslations("hero");
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = () => {
    const { name, phone, email, course } = formData;
    if (!name || !phone || !email || !course) {
      setError(t("error"));
      return;
    }

    sessionStorage.setItem(
      "signupData",
      JSON.stringify({ name, phone, email, course })
    );

    router.push("/thank-you");
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)]">
      <Image
        src={Background}
        alt="Hero background"
        fill
        priority
        className="object-contain object-right-top opacity-80"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <div
            className="relative p-8 w-full max-w-2/5 h-full shadow-2xl transition-transform hover:scale-[1.02] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${FormBackground.src})`,
              clipPath: "polygon(100% 0%, 75% 33%, 100% 100%, 0 100%, 0% 50%, 0 0)",
              filter: "brightness(1.15)",
            }}
          >
            <div className="w-2/3 h-full flex flex-col justify-center items-center space-y-4 text-white">
              <h3 className="text-base lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-center whitespace-pre-line">
                {t("title")}
              </h3>

              <div className="w-full flex items-center bg-white rounded p-2">
                <FiUser className="text-[#9F0A0B] mr-2" />
                <label htmlFor="name" className="sr-only">
                  {t("placeholder.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t("placeholder.name")}
                  className="w-full bg-transparent outline-none text-black placeholder:italic"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>

              <div className="w-full flex items-center bg-white rounded p-2">
                <FiPhone className="text-[#9F0A0B] mr-2" />
                <label htmlFor="phone" className="sr-only">
                  {t("placeholder.phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder={t("placeholder.phone")}
                  className="w-full bg-transparent outline-none text-black placeholder:italic"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              <div className="w-full flex items-center bg-white rounded p-2">
                <FiMail className="text-[#9F0A0B] mr-2" />
                <label htmlFor="email" className="sr-only">
                  {t("placeholder.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t("placeholder.email")}
                  className="w-full bg-transparent outline-none text-black placeholder:italic"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div className="w-full flex items-center bg-white rounded p-2">
                <FiBookOpen className="text-[#9F0A0B] mr-2" />
                <label htmlFor="course" className="sr-only">{t("placeholder.course")}</label>
                <select
                  id="course"
                  className="w-full bg-transparent outline-none text-black placeholder:italic"
                  value={formData.course}
                  onChange={(e) => handleChange("course", e.target.value)}
                >
                  <option value="">{t("placeholder.course")}</option>
                  <optgroup label={t("courses.group1")}>
                    <option value={t("courses.en1")}>{t("courses.en1")}</option>
                    <option value={t("courses.en2")}>{t("courses.en2")}</option>
                    <option value={t("courses.en3")}>{t("courses.en3")}</option>
                  </optgroup>
                  <optgroup label={t("courses.group2")}>
                    <option value={t("courses.zh1")}>{t("courses.zh1")}</option>
                    <option value={t("courses.zh2")}>{t("courses.zh2")}</option>
                    <option value={t("courses.zh3")}>{t("courses.zh3")}</option>
                  </optgroup>
                </select>
              </div>

              <FancyButton
                color="white"
                textColor="black"
                onClick={handleSubmit}
                className="w-full text-sm"
              >
                {t("button")}
              </FancyButton>

              {error && (
                <p className="text-sm text-yellow-300 text-center">{error}</p>
              )}
            </div>
          </div>

          <div className="text-black text-7xl font-black text-center space-y-6 px-6">
            <p className={`font-bold ${playfair.className} whitespace-pre-line`}>
              {t("cta")}
            </p>
            <Link href="/contact-us">
              <FancyButton className="text-base px-8 py-2">{t("contact")}</FancyButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}