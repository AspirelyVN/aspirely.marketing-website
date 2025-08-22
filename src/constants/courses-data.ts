export interface Course {
    id: string;
    title: string;
    desc: string;
    backgroundImage: string;
    filterCode: string;
}

export const EnglishItems: Course[] = [
    {
        id: "01",
        title: "Luyện nói IELTS",
        desc: "Chinh phục IELTS với sự đồng hành của giáo viên chuyên nghiệp. Chúng tôi giúp bạn phát âm chuẩn xác, luyện kỹ năng nói tự nhiên và loại bỏ nỗi lo khi giao tiếp với người nước ngoài.",
        backgroundImage: "/assets/images/CoursesSection/EnglishCourseBanner.webp",
        filterCode: "#05386D"
    },
    { 
        id: "02", 
        title: "Tiếng Anh Giao Tiếp", 
        desc: "Phát triển toàn diện kỹ năng Tiếng Anh Giao Tiếp: phát âm, từ vựng, phản xạ và sự tự tin. Khóa học mang đến trải nghiệm học tập hiệu quả, đồng hành cùng bạn trên con đường hội nhập toàn cầu.",
        backgroundImage: "/assets/images/CoursesSection/EnglishCourseBanner.webp",
        filterCode: "#05386D"
    },
    { 
        id: "03", 
        title: "Tiếng Anh Thương Mại", 
        desc: "Nâng tầm sự nghiệp với Tiếng Anh Thương Mại. Khóa học trang bị cho bạn kỹ năng ngôn ngữ chuyên ngành, khả năng giao tiếp thuyết phục và lợi thế cạnh tranh bền vững trong môi trường quốc tế.",
        backgroundImage: "/assets/images/CoursesSection/EnglishCourseBanner.webp",
        filterCode: "#05386D"
    },
];

export const ChineseItems: Course[] = [
    {
        id: "01",
        title: "Luyện Nói HSKK ",
        desc: "Không chỉ phục vụ mục tiêu thi cử, khóa học Luyện nói HSKK còn mang lại cho bạn khả năng giao tiếp thực tế, từ trò chuyện hàng ngày đến môi trường học tập và công việc.",
        backgroundImage: "/assets/images/CoursesSection/ChineseCourseBanner.webp",
        filterCode: "#B2B2B2"
    },
    { 
        id: "02", 
        title: "Tiếng Trung Giao Tiếp", 
        desc: "Tiếng Trung Giao Tiếp dành cho người bắt đầu từ con số 0, giúp bạn luyện nói trôi chảy với người bản xứ. Đồng thời nâng cao kỹ năng nghe, phản xạ và từ vựng. Khóa học linh hoạt, phù hợp cho mục tiêu học tập, công việc và phát triển sự nghiệp.",
        backgroundImage: "/assets/images/CoursesSection/ChineseCourseBanner.webp",
        filterCode: "#B2B2B2"
    },
    {
        id: "03",
        title: "Tiếng Trung Thương Mại",
        desc: "Tiếng Trung Thương Mại giúp bạn nói trôi chảy với người bản xứ, đồng thời nâng cao kỹ năng nghe, phản xạ và từ vựng. Khóa học linh hoạt, phù hợp cho mục tiêu học tập, công việc và phát triển sự nghiệp.",
        backgroundImage: "/assets/images/CoursesSection/ChineseCourseBanner.webp",
        filterCode: "#B2B2B2"
    },
]