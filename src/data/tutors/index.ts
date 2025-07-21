import { tutorsVi } from "./vi"
import { tutorsEn } from "./en"
import { tutorsZh } from "./zh"
import type { Tutor } from "@/types/tutor"

export function getTutorsByLocale(locale: string): Tutor[] {
  switch (locale) {
    case "vi":
      return tutorsVi
    case "en":
      return tutorsEn
    case "zh":
      return tutorsZh
    default:
      return tutorsEn
  }
}