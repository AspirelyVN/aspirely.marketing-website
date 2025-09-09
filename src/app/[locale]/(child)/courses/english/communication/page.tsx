import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { MessageSquare, Briefcase, BookOpen, Globe } from "lucide-react";
import { UserRoundPlus, Gauge, CalendarDays, Users, CheckCircle2 } from "lucide-react";

function EnglishCommunicationSection() {
  return (
    <section className="relative w-full h-[600px] xl:h-[720px] flex items-center justify-start text-white">
      <Image
        src="/assets/images/courses/english/communication/Banner.png"
        alt="English Communication Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 w-1/2 flex flex-col items-start space-y-10">
        <div className="px-10">
          <h1 className="font-extrabold uppercase relative inline-block">
            <span className="text-4xl">LUYỆN NÓI</span><br /><span className="text-8xl">GIAO TIẾP</span>
          </h1>
          <p className="mb-6 text-2xl">
            Luyện hội thoại thực tế với giáo viên bản ngữ, cho đời sống, công việc và cơ hội quốc tế
          </p>
          <div className="bg-white rounded-lg shadow-sm border border-[#1D748C] p-4 max-w-md text-2xl">
            <h4 className="font-bold text-[#1D748C] flex items-center gap-2">
                <span className="">•</span> Tính năng nổi bật
            </h4>
            <ul className="mt-3 space-y-2 text-[#1D748C]">
              <li className="flex items-center gap-2">
                <span className="text-[#1D748C]">✓</span> Nói tiếng Anh tự tin
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#1D748C]">✓</span> Từ vựng thực tế
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#1D748C]">✓</span> Giáo viên giỏi
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#1D748C]">✓</span> Học linh hoạt
              </li>
            </ul>
          </div>
        </div>
        <button className="text-white font-bold flex items-center gap-2 transition">
          <p className="bg-[#1D748C] text-4xl py-3 px-20 rounded-r-full">THAM GIA NGAY</p>
          <ChevronRight className="w-16 h-16 bg-[#1D748C] rounded-full" />
        </button>
      </div>
    </section>
  );
}

function WhyPracticeSpeakingSection({
  imageSrc = "/assets/images/courses/english/communication/WhyPracticeSpeakingSection/image.png",
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        <h2 className="text-3xl text-center leading-tight font-extrabold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
          Tại sao chỉ luyện nói?
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8 text-gray-900">
            <div>
              <h3 className="text-lg font-extrabold">Khó Tự Luyện Nhất</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Người mới cần hướng dẫn để bắt đầu, người nâng cao cần chỉnh sửa để tự nhiên hơn. Sách và ứng dụng không thể thay thế giao tiếp thực tế.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">Xây Dựng Sự Tự Tin Thực Sự</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Từ chào hỏi đến họp hành, luyện nói giúp bạn dùng tiếng Anh một cách tự nhiên trong đời sống hằng ngày.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">Tiến Bộ Nhanh Hơn Với Giáo Viên Bản Ngữ</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Ở mọi trình độ, giáo viên bản ngữ giúp bạn cải thiện phát âm, từ vựng và độ trôi chảy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">Tiếng Anh Thực Tiễn Cho Cuộc Sống Và Công Việc</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Aspirely giúp bạn giao tiếp tự tin trong những tình huống thực tế — từ du lịch, trò chuyện hằng ngày đến phỏng vấn, họp và thuyết trình.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -right-10 h-72 w-72 rounded-lg bg-cyan-700 opacity-30 blur-[1px] hidden sm:block"></div>
            <div className="absolute -bottom-2 -right-4 h-72 w-72 rounded-lg bg-cyan-600 opacity-40 hidden sm:block"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <div className="relative w-full aspect-[5/6]">
                <Image src={imageSrc} alt="online speaking practice" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouWillGetSection() {
  const items = [
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Luyện nói trong đời sống, du lịch, trò chuyện",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Giao tiếp trong họp, thuyết trình, phỏng vấn",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: "Học từ và cụm từ hữu ích",
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Giao tiếp thoải mái ở mọi nơi",
    },
  ];

  return (
    <section className="relative w-full h-[720px]">
      {/* Banner background */}
      <Image
        src="/assets/images/courses/english/communication/WhatYouWillGetSection/Banner.png"
        alt="What you will get background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="relative max-w-7xl h-full mx-auto flex flex-col lg:flex-row items-center px-6">
        <div className="w-full lg:w-1/3 h-full flex items-end justify-center">
          <Image
            src="/assets/images/courses/english/communication/WhatYouWillGetSection/Person.png"
            alt="Person pointing"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-extrabold text-center lg:text-left text-gray-900 sm:text-4xl lg:text-5xl">
            Bạn sẽ nhận được gì?
          </h2>
          <div className="mt-10 rounded-2xl bg-white/90 shadow-md ring-1 ring-gray-200 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-900 shadow-md">
                    {item.icon}
                  </div>
                  <div className="mt-2 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-6 text-blue-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line
                        x1="12"
                        y1="0"
                        x2="12"
                        y2="18"
                        strokeDasharray="4,4"
                        stroke="currentColor"
                      />
                      <polyline
                        points="6,18 12,24 18,18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-base font-medium text-gray-700 leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnywhereSection() {
  return (
    <section className="w-full bg-[#F7F7F5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0A2E73] leading-tight">
          Tự tin nói tiếng Anh
          <br className="hidden md:block" /> bất cứ lúc nào, bất cứ ở đâu
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src="/assets/images/courses/english/communication/AnywhereSection/image1.png"
              alt="Học trực tuyến 1"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          <div className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src="/assets/images/courses/english/communication/AnywhereSection/image2.png"
              alt="Học trực tuyến 2"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          <div className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src="/assets/images/courses/english/communication/AnywhereSection/image3.png"
              alt="Học trực tuyến 3"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ color, bg, title, text, icon, number }: { color: string; bg: string; title: string; text: string; icon: React.ReactNode; number: string }) {
  return (
    <div className={`relative rounded-xl p-6 md:p-7 ${bg} shadow-md border border-gray-200`}>      
      <div className={`absolute -top-4 -right-4 h-14 w-14 rounded-full flex items-center justify-center ${color} shadow-lg`}>{icon}</div>
      <p className="text-xl font-extrabold text-gray-900">{title}</p>
      <p className="mt-2 text-[16px] leading-6 text-gray-700">{text}</p>
      <div className="mt-4 inline-block bg-white rounded px-3 py-1 shadow ring-1 ring-gray-200 font-bold text-sm text-gray-900">{number}</div>
    </div>
  );
}

function HowItWorks1Section() {
  const steps = [
    { title: "Bước 1", text: "Đăng ký", color: "bg-teal-600", bg: "bg-cyan-100", icon: <UserRoundPlus className="h-9 w-9 text-white"/>, number: "01" },
    { title: "Bước 2", text: "Kiểm tra trình độ", color: "bg-purple-600", bg: "bg-violet-100", icon: <Gauge className="h-9 w-9 text-white"/>, number: "02" },
    { title: "Bước 3", text: "Tham gia lớp luyện nói", color: "bg-amber-500", bg: "bg-amber-100", icon: <CalendarDays className="h-9 w-9 text-white"/>, number: "03" },
    { title: "Bước 4", text: "Luyện trong tình huống thực tế", color: "bg-green-600", bg: "bg-green-100", icon: <Users className="h-9 w-9 text-white"/>, number: "04" },
    { title: "Bước 5", text: "Xây dựng sự tự tin và trôi chảy", color: "bg-orange-600", bg: "bg-rose-100", icon: <CheckCircle2 className="h-9 w-9 text-white"/>, number: "06" },
  ];

  return (
    <section className="w-full bg-[#f5f6f4] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:pr-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-blue-900">Aspirely hoạt động như thế nào?</h2>
          </div>
          <div className="lg:col-span-2 grid gap-10 md:grid-cols-2">
            <StepCard {...steps[0]} />
            <StepCard {...steps[1]} />
          </div>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <StepCard {...steps[2]} />
          <StepCard {...steps[3]} />
          <StepCard {...steps[4]} />
        </div>
      </div>
    </section>
  );
}

function HowItWorks2Section() {
  return (
    <section className="w-full bg-[#F7F7F5] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2E73] leading-tight mb-8">
            Aspirely Hoạt Động <br /> Như Thế Nào?
          </h2>
          <ul className="space-y-4 text-lg text-[#0A2E73]">
            <li>Đăng ký dễ dàng</li>
            <li>Tham gia workshop luyện nói miễn phí</li>
            <li>Học cùng giáo viên bản ngữ</li>
            <li>Thấy rõ tiến bộ</li>
          </ul>
          <button className="mt-8 px-8 py-4 rounded-xl bg-[#0A2E73] text-white font-bold text-lg shadow-md hover:bg-[#09306d] transition">
            Đăng ký
          </button>
        </div>

        {/* Right image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assets/images/courses/english/communication/HowItWorks2Section/image.png"
            alt="Học viên Aspirely"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

type Course = {
  title: string;
  desc: string;
  img: string;
  cta: string;
};

const items: Course[] = [
  {
    title: "LUYỆN NÓI TIẾNG ANH IELTS",
    desc: "Cách nhanh nhất để chinh phục kỳ thi IELTS",
    img: "/assets/images/courses/english/communication/CoursesSection/image1.png",
    cta: "Phổ biến và tự nhiên",
  },
  {
    title: "LUYỆN NÓI TIẾNG ANH GIAO TIẾP",
    desc: "Từ Tiếng Anh Trong Lớp Học Đến Giao Tiếp Thực Tế",
    img: "/assets/images/courses/english/communication/CoursesSection/image2.png",
    cta: "Phổ biến và tự nhiên",
  },
  {
    title: "LUYỆN NÓI TIẾNG TRUNG GIAO TIẾP",
    desc: "Học Tiếng Trung Trong Lớp, Tự Tin Nói Ngoài Đời",
    img: "/assets/images/courses/english/communication/CoursesSection/image3.png",
    cta: "Phổ biến và tự nhiên",
  },
];

function CoursesSection() {
  return (
    <section className="w-full bg-[#0A2E73] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-12">
          CÁC KHÓA HỌC CỦA ASPIRELY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((c, i) => (
            <div
              key={i}
              className="relative bg-[#F7F7F5] rounded-[28px] shadow-lg overflow-hidden flex flex-col h-[500px]"
            >
              <h3 className="text-[#0A2E73] text-2xl font-extrabold text-center px-4 pt-6 leading-tight line-clamp-2 min-h-[64px]">
                {c.title}
              </h3>

              <div className="relative w-full h-60 mt-4">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover rounded-xl mx-auto"
                  priority
                />
              </div>

              <p className="mt-4 text-center text-[#0A2E73] text-lg leading-relaxed px-6 flex-1">
                {c.desc}
              </p>

              <div className="mt-4 mb-6 flex justify-center">
                <button className="px-6 py-3 rounded-xl bg-[#0A2E73] text-white font-semibold shadow-md hover:bg-[#09306d] transition">
                  {c.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EnglishCommunicationCoursePage() {
  return (
    <main className="w-full">
      <EnglishCommunicationSection />
      <WhyPracticeSpeakingSection />
      <WhatYouWillGetSection />
      <AnywhereSection />
      <HowItWorks1Section />
      <HowItWorks2Section />
      <CoursesSection />
    </main>
  );
}
