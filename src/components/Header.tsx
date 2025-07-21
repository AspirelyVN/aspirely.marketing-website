"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();

  const locales = [
    { label: t("languages.vi"), code: "vi" },
    { label: t("languages.en"), code: "en" },
    { label: t("languages.zh"), code: "zh" },
  ];

  const currentLocale =
    locales.find((l) => pathname.startsWith(`/${l.code}`)) || locales[0];

  const handleLangChange = (code: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(vi|en|zh)/, "");
    router.push(`/${code}${pathWithoutLocale}`);
    setLangOpen(false);
  };

  return (
    <header className="w-full bg-white text-[#9F0A0B] sticky top-0 z-50 flex justify-between items-center px-5 py-2 font-semibold shadow-md">
      <Link href="/">
        <Image src="/Logo.svg" alt="logo" width={120} height={80} priority />
      </Link>

      <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        <IoIosMenu />
      </button>

      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-5 px-10 py-3 z-50`}
      >
        <Link
          href="/tutors"
          className="p-2"
        >
          {t("teachers")}
        </Link>
        <Link
          href="/workshops"
          className="p-2"
        >
          {t("workshop")}
        </Link>
        <Link
          href="/recruitment"
          className="p-2"
        >
          {t("recruit")}
        </Link>

        <div className="relative group">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 px-3 py-1 rounded-sm"
          >
            {currentLocale.label} <MdArrowDropDown size={20} />
          </button>
          {langOpen && (
            <ul className="absolute top-full left-0 w-40 bg-white shadow-lg rounded-sm z-50">
              {locales.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleLangChange(lang.code)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          href="https://app.aspirely.edu.vn/login"
          className="border-2 px-4 py-1.5 rounded-full"
        >
          {t("login")}
        </Link>
      </nav>
    </header>
  );
}