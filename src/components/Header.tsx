"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();
  const isHome = /^\/(vi|en|zh)?\/?$/.test(pathname);

  const locales = [
    { label: "Tiếng Việt", code: "vi" },
    { label: "English", code: "en" },
    { label: "中文", code: "zh" },
  ];

  const currentLocale =
    locales.find((l) => pathname.startsWith(`/${l.code}`)) || locales[0];

  const handleLangChange = (code: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(vi|en|zh)/, "");
    router.push(`/${code}${pathWithoutLocale}`);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-screen fixed top-0 left-0 z-50 px-5 py-2 flex justify-between font-semibold transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-black/80 backdrop-blur-md text-white shadow-lg"
            : "bg-transparent text-white"
          : "bg-black text-white shadow-md"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src="/Logo-white.svg" alt="logo" width={120} height={36} priority />
        </Link>

        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <IoIosMenu />
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } lg:flex absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-5 px-10 py-3 z-50`}
      >
        <Link href="/tutors" className="p-2">
          {t("teachers")}
        </Link>
        <Link href="/workshops" className="p-2">
          {t("workshops")}
        </Link>
        <Link href="/recruitment" className="p-2">
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
            <ul className="absolute top-full left-0 w-40 bg-black/80 shadow-lg rounded-sm z-50">
              {locales.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleLangChange(lang.code)}
                  className="px-4 py-2 rounded-sm hover:bg-black cursor-pointer"
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