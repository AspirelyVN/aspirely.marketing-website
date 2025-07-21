import type { Tutor } from "@/types/tutor"

export const tutorsEn: Tutor[] = [
  {
    id: 1,
    name: "Aimie C: Tutor",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    accent: "British Accent",
    experience: "Certified Tutor: 5+ years of experience",
    language: "Speaks English (Native)",
    image: "/tutors/Aimie.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    about:
      "I'm Aimie, an English teacher from the UK with over 5 years of experience teaching in the UK, Vietnam, and Thailand. I'm excited to meet you and support your English learning journey!",
    skills: ["Conversational", "IELTS 4 skills", "Business English"],
    reviews: [
      {
        name: "Minh T.",
        country: "Vietnam",
        content: "Ms. Aimie is very enthusiastic and easy to understand. Excellent British accent!",
      },
    ],
    availability: {
      "2025-07-01": ["12:00", "14:30", "16:00"],
      "2025-07-02": ["12:00", "14:30", "16:00"],
      "2025-07-03": ["14:30", "16:00"],
    },
    workshops: [
      {
        title: "Basic Conversation for Beginners",
        date: "2025-07-15",
        time: "19:00",
        description: "Workshop to improve basic listening and speaking reflexes.",
      },
      {
        title: "IELTS Writing Strategies",
        date: "2025-07-20",
        time: "20:00",
        description: "Focuses on structure and ideas for Task 1 & 2.",
      },
    ],
    levels: ["Intermediate", "Upper Intermediate"],
  },
  {
    id: 2,
    name: "My Quyen: Tutor",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/TW.svg",
    accent: "Taiwanese Accent",
    experience: "Certified Tutor: 3+ years of experience",
    language: "Speaks Taiwanese (Advanced), Vietnamese (Native)",
    image: "/tutors/Quyen.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    about:
      "I'm My Quyen, a tutor from Taiwan with 3+ years of experience teaching both Vietnamese and international students. I help learners speak English more naturally and confidently.",
    skills: ["Daily conversation", "Pronunciation", "Grammar"],
    reviews: [
      {
        name: "Thu N.",
        country: "Vietnam",
        content: "Clear explanations, gentle and attentive!",
      },
    ],
    availability: {
      "2025-07-01": ["09:00", "11:00", "15:00"],
    },
    workshops: [],
    levels: ["Beginner", "Intermediate"],
  },
]