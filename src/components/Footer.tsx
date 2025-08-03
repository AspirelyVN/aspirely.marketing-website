"use client";

import Image from "next/image";
import Script from "next/script";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useMessages } from "next-intl";

export default function Footer() {
  const messages = useMessages();

  const courseData = (messages?.courseGroups || []) as {
    key: string;
    label: string;
    courses: { key: string; label: string }[];
  }[];

  const infoSections = (messages?.footer?.sections || []) as {
    title: string;
    items: { label: string; key: string }[];
  }[];

  return (
    <footer className="font-poppins bg-white text-black py-10 px-4 w-full border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div className="w-full flex flex-col items-center md:items-start">
          <Image
            src="/Logo.svg"
            alt="Aspirely Logo"
            width={150}
            height={80}
            className="mb-4"
          />
          <div className="w-full px-3 py-2 flex items-center font-roboto">
            <FaPhone className="w-4 h-4 mr-2" />
            028 62763622
          </div>
          <div className="w-full px-3 py-2 flex items-center font-roboto">
            <IoMdMail className="w-4 h-4 mr-2" />
            aspirely.online@gmail.com
          </div>
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=dd6406b8-f284-4f90-85da-f9bf008a3ea9"
            title="DMCA.com Protection Status"
            className="dmca-badge"
          >
            <Image
              src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-04.png?ID=dd6406b8-f284-4f90-85da-f9bf008a3ea9"
              alt="DMCA.com Protection Status"
              width={150}
              height={30}
            />
          </a>
          <Script
            src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
            strategy="afterInteractive"
          />
        </div>

        {courseData.map((course, index) => (
          <div key={index}>
            <p className="font-bold mb-3 text-lg">{course.label}</p>
            <ul className="space-y-2">
              {course.courses.map((program, idx) => (
                <li key={idx}>{program.label}</li>
              ))}
            </ul>
          </div>
        ))}

        {infoSections.map((section, index) => (
          <div key={index}>
            <p className="font-bold mb-3 text-lg">{section.title}</p>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>{item.label}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-xs text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} Aspirely. All rights reserved.
      </div>
    </footer>
  );
}