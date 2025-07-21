import type { Tutor } from "@/types/tutor"

export const tutorsVi: Tutor[] = [
  {
    id: 1,
    name: "Aimie C: Giáo viên",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
    accent: "Giọng Anh - Anh",
    experience: "Giáo viên chứng nhận: Hơn 5 năm kinh nghiệm",
    language: "Nói tiếng Anh (bản ngữ)",
    image: "/tutors/Aimie.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    about:
      "Tôi là Aimie, giáo viên tiếng Anh đến từ Vương quốc Anh với hơn 5 năm kinh nghiệm giảng dạy tại Anh, Việt Nam và Thái Lan. Tôi rất mong được gặp bạn và đồng hành cùng bạn trên hành trình nâng cao trình độ tiếng Anh của mình!",
    skills: ["Giao tiếp", "IELTS 4 kỹ năng", "Tiếng Anh doanh nghiệp"],
    reviews: [
      {
        name: "Minh T.",
        country: "Việt Nam",
        content: "Cô Aimie dạy rất nhiệt tình và dễ hiểu. Giọng Anh chuẩn!",
      },
    ],
    availability: {
      "2025-07-01": ["12:00", "14:30", "16:00"],
      "2025-07-02": ["12:00", "14:30", "16:00"],
      "2025-07-03": ["14:30", "16:00"],
    },
    workshops: [
      {
        title: "Giao tiếp cơ bản cho người mới bắt đầu",
        date: "2025-07-15",
        time: "19:00",
        description: "Workshop giúp cải thiện phản xạ nghe nói cơ bản.",
      },
      {
        title: "Chiến lược làm bài IELTS Writing",
        date: "2025-07-20",
        time: "20:00",
        description: "Tập trung vào cấu trúc và ý tưởng cho Task 1 & 2.",
      },
    ],
    levels: ["Trung cấp", "Trên trung cấp"],
  },
  {
    id: 2,
    name: "My Quyên: Giáo viên",
    flag: "https://purecatamphetamine.github.io/country-flag-icons/3x2/TW.svg",
    accent: "Giọng Đài Loan",
    experience: "Giáo viên chứng nhận: Hơn 3 năm kinh nghiệm",
    language: "Nói tiếng Đài (thành thạo), tiếng Việt (bản ngữ)",
    image: "/tutors/Quyen.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    about:
      "Tôi là My Quyên, giáo viên đến từ Đài Loan, với kinh nghiệm 3+ năm giảng dạy người Việt và người nước ngoài. Tôi tập trung giúp học viên nói tiếng Anh một cách tự nhiên và tự tin.",
    skills: ["Giao tiếp hàng ngày", "Phát âm", "Ngữ pháp"],
    reviews: [
      {
        name: "Thu N.",
        country: "Việt Nam",
        content: "Giải thích rất dễ hiểu, nhẹ nhàng, có tâm!",
      },
    ],
    availability: {
      "2025-07-01": ["09:00", "11:00", "15:00"],
    },
    workshops: [],
    levels: ["Sơ cấp", "Trung cấp"],
  },
]