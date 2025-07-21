"use client"
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible"

const WHY_CHOOSE_US = [
  {
    title: "Đội ngũ Giáo viên Uy tín - Cam kết Chất lượng",
    desc: "Giảng viên bản xứ đầy kinh nghiệm và chứng chỉ, truyền cảm hứng, giúp bạn tiến bộ hơn sau mỗi buổi học.",
  },
  {
    title: "Học Vui & Hiệu Quả",
    desc: "Từ hội thoại hằng ngày đến luyện thi, bài học thiết thực, tương tác cao, bám sát mục tiêu cá nhân.",
  },
  {
    title: "Học Linh Hoạt, Dễ Dàng Cho Người Bận Rộn",
    desc: "Sinh viên hay nhân viên văn phòng đều dễ dàng học theo lịch cá nhân.",
  },
  {
    title: "Học 1-1 Theo Cách Bạn Muốn, Với Giáo Viên Bạn Chọn",
    desc: "Tham gia buổi học thử trực tuyến để tìm giáo viên phù hợp nhất với bạn.",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white py-16 px-4 border-t">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#9F0A0B]">Tại sao bạn nên chọn chúng tôi?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-black text-base md:text-lg">
          {WHY_CHOOSE_US.map(({ title, desc }, idx) => (
            <FadeInWhenVisible key={idx} delay={idx * 0.2}>
              <div className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <p className="font-semibold flex items-center text-[#9F0A0B]">✔ <span className="ml-2">{title}</span></p>
                <p className="mt-2">{desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}