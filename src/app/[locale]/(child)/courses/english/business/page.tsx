import Image from "next/image";
import { ChevronLeft, Globe2, BriefcaseBusiness, Rocket } from "lucide-react";

function EnglishBusinessSection() {
  return (
    <section className="relative w-full h-[600px] xl:h-[720px] flex items-center justify-end">
      <Image
        src="/assets/images/courses/english/business/Banner.png"
        alt="English Business Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 w-1/2 flex flex-col items-start space-y-10">
        <div className="px-10 space-y-5">
          <h1 className="font-extrabold uppercase relative inline-block">
            <span className="text-4xl">LUYỆN NÓI</span><br /><span className="text-8xl text-[#4B0082]">THƯƠNG MẠI</span>
          </h1>
          <p className="mb-6 text-4xl">
            Tiếng Anh của bạn<br />Sự nghiệp của bạn<br />Vươn cao
          </p>
        </div>
        <button className="w-full text-white font-bold flex items-center justify-end gap-2 transition">
          <ChevronLeft className="w-16 h-16 bg-[#4B0082] rounded-full" />
          <p className="bg-[#4B0082] text-4xl py-3 px-20 rounded-l-full">THAM GIA NGAY</p>
        </button>
      </div>
    </section>
  );
}

function Section2({ personSrc = "/assets/images/courses/english/business/Section2/Person.png" }) {
  const features = [
    {
      icon: <Globe2 className="h-8 w-8 text-black" />,
      title: "Mở Ra Cơ Hội Toàn Cầu",
      desc:
        "Hãy đưa tiếng Anh của bạn từ lớp học đến phòng họp. Khóa học Business English trang bị cho bạn kỹ năng giao tiếp tự tin trong các cuộc họp, thuyết trình, đàm phán và email công việc.",
    },
    {
      icon: <BriefcaseBusiness className="h-8 w-8 text-black" />,
      title: "Tiếng Anh Lưu Loát – Sự Nghiệp Vững Vàng",
      desc:
        "Học cùng giáo viên bản ngữ giàu kinh nghiệm, am hiểu thách thức của môi trường kinh doanh quốc tế. Nâng cao vốn từ vựng, cách diễn đạt và chiến lược giao tiếp để bạn thành công trong công việc toàn cầu.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-black" />,
      title: "Tiếng Anh Chuyên Nghiệp Dành Cho Người Chuyên Nghiệp",
      desc:
        "Dù bạn đang hướng đến một sự thăng tiến, chuẩn bị cho dự án quốc tế hay xây dựng mối quan hệ khách hàng bền vững, khóa học Business English sẽ giúp bạn đạt mục tiêu nhanh hơn.",
    },
  ];

  return (
    <section className="relative w-full bg-[#efeff2]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-6xl text-center text-[#4B0082] font-bold">Khóa Học Tiếng Anh Kinh Doanh</h2>
        <div className="mt-10 grid grid-cols-1 items-center lg:mt-14 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-8 lg:col-span-2">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0">{f.icon}</div>
                <div>
                  <p className="text-xl font-extrabold text-gray-900">{f.title}</p>
                  <p className="mt-2 text-[17px] leading-7 text-gray-800">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={personSrc}
              alt="Business English student"
              width={520}
              height={640}
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TargetAudienceSection({ imageSrc = "/assets/images/courses/english/business/Section3/audience.jpg" }) {
  const items = [
    "Các chuyên gia mong muốn thăng tiến và phát triển sự nghiệp",
    "Doanh nhân đang mở rộng ra thị trường quốc tế",
    "Sinh viên chuẩn bị cho những cơ hội toàn cầu",
    "Các đội ngũ doanh nghiệp muốn nâng cao kỹ năng giao tiếp nơi làm việc",
  ];

  return (
    <section className="w-full bg-[#efeff2] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900">Đối tượng khóa học</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow">
            <Image src={imageSrc} alt="Target audience" fill className="object-cover" />
          </div>
          <div className="rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
            <ul className="space-y-10 text-gray-900">
              {items.map((t, i) => (
                <li key={i} className="text-2xl leading-9 sm:text-2xl">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection({ imageSrc = "/assets/images/courses/english/business/Section4/team.png" }) {
  const points = [
    {
      title: "Từ vựng thực tiễn",
      desc: "Làm chủ ngôn ngữ kinh doanh quốc tế",
      position: "bottom-0 left-[15%]",
    },
    {
      title: "Hiểu biết văn hóa",
      desc: "Xây dựng mối quan hệ bền vững xuyên văn hóa",
      position: "top-[30%] left-[35%]",
    },
    {
      title: "Giao tiếp tự tin",
      desc: "Nói rõ ràng và tự nhiên trong mọi tình huống kinh doanh",
      position: "bottom-8 left-[55%]",
    },
    {
      title: "Phát triển sự nghiệp",
      desc: "Nổi bật trong phỏng vấn, cuộc họp và các dự án toàn cầu",
      position: "top-[20%] right-0",
    },
  ];

  return (
    <section className="w-full bg-[#efeff2] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-700">
          Những gì bạn sẽ đạt được
        </h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left image */}
          <div className="flex justify-center">
            <Image
              src={imageSrc}
              alt="Team working"
              width={480}
              height={380}
              className="object-contain"
            />
          </div>

          {/* Right chart */}
          <div className="relative w-full h-[400px] lg:h-[480px]">
            {/* Arrow line */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 200"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <polyline
                points="0,200 150,100 300,150 450,80 600,120"
                fill="none"
                stroke="#2563eb"
                strokeWidth="14"
              />
              <polygon
                points="600,110 600,130 630,120"
                fill="#2563eb"
              />
            </svg>

            {points.map((p, i) => (
              <div
                key={i}
                className={`absolute ${p.position} bg-white px-4 py-2 border border-dashed border-blue-900 text-center max-w-[220px]`}
              >
                <p className="font-bold text-blue-900">{p.title}</p>
                <p className="text-sm text-gray-700 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function HowYouWillLearnSection({
  leftPerson = "/assets/images/courses/english/business/Section5/left.png",
  rightPerson = "/assets/images/courses/english/business/Section5/right.png",
}) {
  const items = [
    "Các buổi học trực tuyến cùng giáo viên bản ngữ giàu kinh nghiệm",
    "Đóng vai tương tác dựa trên các tình huống kinh doanh thực tế",
    "Học trực tuyến linh hoạt, phù hợp với lịch trình của bạn",
  ];

  return (
    <section className="w-full bg-[#efeff2] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-blue-900">Cách bạn sẽ học</h2>
        <p className="mt-3 text-center text-lg sm:text-xl text-blue-900/80">Chúng tôi kết hợp giảng dạy chuyên môn với thực hành thực tế để đảm bảo tiến bộ của bạn:</p>
        <div className="mt-10 grid grid-cols-1 items-end gap-6 lg:mt-14 lg:grid-cols-4">
          <div className="flex justify-center lg:justify-start lg:col-span-1">
            <div className="relative h-[280px] w-[220px] sm:h-[320px] sm:w-[260px] lg:h-[360px] lg:w-full">
              <Image src={leftPerson} alt="left person" fill className="object-contain" />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((t, i) => (
                <div key={i} className="rounded-2xl border border-gray-300 bg-white/70 px-6 py-6 text-center text-xl sm:text-2xl text-gray-900 shadow-sm">
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:col-span-1">
            <div className="relative h-[280px] w-[220px] sm:h-[320px] sm:w-[260px] lg:h-[360px] lg:w-full">
              <Image src={rightPerson} alt="right person" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessCorporateContactSection({
  imageSrc = "/assets/images/courses/english/business/SectionContact/team.png",
}) {
  return (
    <section className="w-full bg-[#efeff2] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-blue-900">
            Tiếng Anh Kinh Doanh
            <br />
            Cho Doanh Nghiệp
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-blue-900/90">
            Tiếng Anh vững vàng, kinh doanh vững mạnh. Chương trình Tiếng Anh Kinh Doanh cho Doanh Nghiệp giúp đội ngũ của bạn tự tin giao tiếp trong các cuộc họp, thuyết trình và đàm phán. Khóa học được thiết kế riêng theo ngành nghề và mục tiêu, để nhân viên học đúng ngôn ngữ mang lại hiệu quả cho doanh nghiệp.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-start">
          <div className="relative w-full">
            <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image src={imageSrc} alt="Team meeting" width={860} height={620} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 left-10 h-6 w-[88%] bg-black/10 rounded"></div>
            <div className="absolute -bottom-10 left-16 h-6 w-[80%] bg-black/20 rounded"></div>
          </div>
          <div className="rounded-[28px] bg-[#0E2A5F] p-8 sm:p-10 text-white shadow-xl">
            <h3 className="text-3xl font-extrabold">Liên hệ ngay</h3>
            <form className="mt-6 space-y-5">
              <div>
                <input type="text" placeholder="Họ và tên" className="w-full rounded-xl bg-white/95 px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" />
              </div>
              <div>
                <input type="text" placeholder="Công ty" className="w-full rounded-xl bg-white/95 px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/95 px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" />
              </div>
              <div>
                <input type="tel" placeholder="Số điện thoại" className="w-full rounded-xl bg-white/95 px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" />
              </div>
              <div>
                <textarea rows={4} placeholder="Nội dung tin nhắn" className="w-full rounded-xl bg-white/95 px-5 py-3 text-gray-900 placeholder-gray-500 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-white" />
              </div>
              <div className="pt-2">
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#2AA8C7] px-8 py-3 text-lg font-bold text-white hover:opacity-95 active:opacity-90">
                  Submit
                </button>
              </div>
            </form>
          </div>
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
    img: "/assets/images/courses/tiles/ielts.jpg",
    cta: "Phổ biến và tự nhiên",
  },
  {
    title: "LUYỆN NÓI TIẾNG ANH GIAO TIẾP",
    desc: "Từ Tiếng Anh Trong Lớp Học Đến Giao Tiếp Thực Tế",
    img: "/assets/images/courses/tiles/communication.jpg",
    cta: "Phổ biến và tự nhiên",
  },
  {
    title: "LUYỆN NÓI TIẾNG TRUNG GIAO TIẾP",
    desc: "Học Tiếng Trung Trong Lớp, Tự Tin Nói Ngoài Đời",
    img: "/assets/images/courses/tiles/chinese.jpg",
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

export default function EnglishBusinessCoursePage() {
  return (
    <main className="w-full">
      <EnglishBusinessSection />
      <Section2 />
      <TargetAudienceSection />
      <AchievementsSection />
      <HowYouWillLearnSection />
      <BusinessCorporateContactSection />
      <CoursesSection />
    </main>
  );
}
