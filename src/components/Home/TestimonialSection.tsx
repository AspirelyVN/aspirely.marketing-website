"use client";
import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

const TESTIMONIALS = [
  {
    name: "Phương Nghi",
    age: 20,
    location: "TP. HCM",
    image: "/students/PhuongNghi.jpg",
    content: `Trang web dễ dùng, load nhanh, giao diện xịn và học online rất tiện lợi mà không cần rời khỏi nhà. Giáo trình được cá nhân hóa nên học đúng trình độ, không áp lực hay gò bó. Mình thích nhất là lịch học linh hoạt, phù hợp cả sinh viên bận rộn như mình.`,
  },
  {
    name: "Nhi Nguyễn",
    age: 21,
    location: "TP. HCM",
    image: "/students/NhiNguyen.jpg",
    content: `Giảng viên người Anh phát âm cực chuẩn, sửa lỗi kỹ và luôn tập trung vào chất lượng chứ không chạy theo chỉ tiêu. Cô Aimie thân thiện, giảng giải rõ ràng, đặc biệt rất kiên nhẫn với học viên học chậm như mình. Sau một thời gian học, mình tự tin nói tiếng Anh hơn hẳn.`,
  },
  {
    name: "Mỹ Mỹ",
    age: 22,
    location: "TP. HCM",
    image: "/students/MyMy.jpg",
    content: `Ban đầu mình khá lo lắng về khả năng nói tiếng Anh, nhưng nhờ chương trình học thực tế và giáo viên tận tâm, mình đã tiến bộ rõ rệt. Các chủ đề đa dạng, dễ áp dụng vào đời sống. Cô sửa phát âm chi tiết từng từ, tạo cảm giác thoải mái khi luyện nói. Cảm ơn trung tâm đã giúp mình tự tin giao tiếp hơn mỗi ngày.`,
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#F7F9FC] py-20 px-4 border-t">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#9F0A0B]">
          Câu chuyện thành công
        </h2>

        {TESTIMONIALS.map((item, idx) => (
          <FadeInWhenVisible key={idx} delay={idx * 0.2}>
            <div
              className={`flex flex-col md:flex-row items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } gap-6 bg-white rounded-xl shadow-md border p-6`}
            >
              <div className="relative w-24 md:w-32 lg:w-36 aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left md:flex-1 whitespace-pre-line">
                <p className="italic text-gray-800">“{item.content}”</p>
                <p className="mt-4 font-bold text-[#9F0A0B]">
                  {item.name}, {item.age}, {item.location}
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}