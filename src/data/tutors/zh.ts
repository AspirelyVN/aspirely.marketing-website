import type { Tutor } from "@/types/tutor"

export const tutorsZh: Tutor[] = [
  {
    id: 1,
    name: "Aimie C: 老師",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    accent: "英式口音",
    experience: "認證老師：5年以上教學經驗",
    language: "英語（母語）",
    image: "/tutors/Aimie.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    about:
      "我是Aimie，來自英國的英語老師，擁有超過5年的教學經驗，在英國、越南和泰國任教。我期待與您見面，一起提升您的英語能力！",
    skills: ["日常會話", "IELTS四項技能", "商務英語"],
    reviews: [
      {
        name: "Minh T.",
        country: "越南",
        content: "Aimie老師非常熱情，講解清晰，英式口音很標準！",
      },
    ],
    availability: {
      "2025-07-01": ["12:00", "14:30", "16:00"],
      "2025-07-02": ["12:00", "14:30", "16:00"],
      "2025-07-03": ["14:30", "16:00"],
    },
    workshops: [
      {
        title: "初學者基礎會話",
        date: "2025-07-15",
        time: "19:00",
        description: "提升聽說反應能力的工作坊。",
      },
      {
        title: "IELTS寫作策略",
        date: "2025-07-20",
        time: "20:00",
        description: "著重任務1和2的結構與想法發展。",
      },
    ],
    levels: ["中級", "中高級"],
  },
  {
    id: 2,
    name: "My Quyen: 老師",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/TW.svg",
    accent: "台灣口音",
    experience: "認證老師：3年以上教學經驗",
    language: "台語（高級）、越南語（母語）",
    image: "/tutors/Quyen.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    about:
      "我是My Quyen，來自台灣的老師，有3年以上教學經驗。我致力於幫助學生更自然、自信地使用英語。",
    skills: ["日常會話", "發音", "語法"],
    reviews: [
      {
        name: "Thu N.",
        country: "越南",
        content: "講解清楚、親切、有耐心！",
      },
    ],
    availability: {
      "2025-07-01": ["09:00", "11:00", "15:00"],
    },
    workshops: [],
    levels: ["初級", "中級"],
  },
]