"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { useMessages } from "next-intl";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const messages = useMessages();
  const t = (key: string) => messages?.header?.[key] ?? key;
  const courseGroups = ( messages?.courseGroups || [] ) as {
    key: string;
    label: string;
    courses: { key: string; label: string }[];
  }[];

  const router = useRouter();
  const pathname = usePathname();
  const isHome = /^\/(vi|en|zh-CN|zh-TW)?\/?$/.test(pathname);

  const locales = [
    { label: "Tiếng Việt", code: "vi" },
    { label: "English", code: "en" },
    { label: "简体中文", code: "zh-CN" },
    { label: "繁體中文", code: "zh-TW" },
  ];

  const currentLocale = locales.find((l) => pathname.startsWith(`/${l.code}`)) || locales[0];

  const handleLangChange = (code: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(vi|en|zh-CN|zh-TW)/, "");
    router.push(`/${code}${pathWithoutLocale}`);
    setLangOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
      <div className="w-full lg:w-auto flex justify-between items-center">
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
        } lg:flex absolute lg:static top-full left-0 w-full bg-black/80 lg:bg-transparent flex-col lg:flex-row justify-end items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-5 px-10 py-3 z-50`}
      >
        <Link href="/tutors" className="p-2" onClick={() => setMenuOpen(false)}>
          {t("teachers")}
        </Link>

        <Link href="/workshops" className="p-2" onClick={() => setMenuOpen(false)}>
          {t("workshops")}
        </Link>

        <div className="relative w-full lg:w-auto">
          <button
            onClick={() => setCourseOpen(!courseOpen)}
            className="flex items-center justify-between w-full lg:w-auto px-3 py-1"
          >
            {t("courses")} <MdArrowDropDown size={20} />
          </button>
          {courseOpen && (
            <div className="w-full lg:w-64 bg-black text-white lg:absolute top-full left-0 z-50 shadow-lg p-3 space-y-3">
              {courseGroups.map((group) => (
                <div key={group.key}>
                  <div className="font-bold px-2 py-1">{group.label}</div>
                  <ul className="space-y-1">
                    {group.courses.map((course) => (
                      <li key={course.key}>
                        <Link
                          href={`/courses/${course.key}`}
                          className="block px-4 py-1 hover:bg-black/50 rounded"
                          onClick={() => {
                            setCourseOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          {course.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Link href="/recruitment" className="p-2" onClick={() => setMenuOpen(false)}>
          {t("recruit")}
        </Link>

        <div className="relative w-full lg:w-auto">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center justify-between w-full lg:w-auto px-3 py-1"
          >
            {currentLocale.label} <MdArrowDropDown size={20} />
          </button>
          {langOpen && (
            <ul className="w-full lg:w-40 bg-black text-white lg:absolute top-full left-0 z-50 shadow-lg rounded-sm">
              {locales.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleLangChange(lang.code)}
                  className="px-4 py-2 hover:bg-black/50 cursor-pointer"
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
          onClick={() => setMenuOpen(false)}
        >
          {t("login")}
        </Link>
      </nav>
    </header>
  );
}