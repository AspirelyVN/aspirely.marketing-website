"use client"

import { useState } from "react";
import { FiUser, FiPhone, FiMail, FiBookOpen } from "react-icons/fi";
import { useTranslations, useMessages } from "next-intl";

import FancyButton from "@/components/FancyButton";

type Program = {
  key: string;
  label: string;
};

type ProgramGroup = {
  key: string;
  label: string;
  programs: Program[];
};

export default function ContactUsPage() {
  const t = useTranslations("contact");
  const messages = useMessages();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  // Lấy programGroups từ messages
  const programGroups = messages.contact.programGroups;

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-[#9F0A0B]">
        {t("title")}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiUser className="text-[#9F0A0B] mr-2" />
          <input
            name="name"
            placeholder={t("name")}
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none text-black placeholder:italic"
          />
        </div>

        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiPhone className="text-[#9F0A0B] mr-2" />
          <input
            name="phone"
            placeholder={t("phone")}
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none text-black placeholder:italic"
          />
        </div>

        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiMail className="text-[#9F0A0B] mr-2" />
          <input
            name="email"
            placeholder={t("email")}
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-black placeholder:italic"
          />
        </div>

        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiBookOpen className="text-[#9F0A0B] mr-2" />
          <select
            name="program"
            value={form.program}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none text-black"
          >
            <option value="">{t("selectProgram")}</option>
            {programGroups.map((group: ProgramGroup) => (
              <optgroup key={group.key} label={group.label}>
                {group.programs.map((program: Program) => (
                  <option key={program.key} value={program.key}>
                    {program.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t("note")}
            rows={4}
            className="w-full bg-white border border-gray-300 rounded p-3 text-black placeholder:italic"
          />
        </div>

        <FancyButton
          type="submit"
          className="w-full bg-white text-[#9F0A0B] py-2 rounded-full font-bold hover:opacity-90 transition"
        >
          {t("submit")}
        </FancyButton>
      </form>
    </div>
  );
}