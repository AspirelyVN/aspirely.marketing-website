"use client";
import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

const TESTIMONIALS = [
  {
    name: "Phương Nghi",
    age: 20,
    location: "TP. HCM",
    image: "/students/PhuongNghi.jpg",
    content: `Trang web dễ dùng, load nhanh, giao diện hiện đại, có cả video và tương tác trực tiếp. Học online nhưng vẫn có cảm giác như được kèm riêng 1-1. 

Lịch học linh hoạt theo từng khung giờ nên mình dễ xếp lịch học đại học.`,
  },
  {
    name: "Nhi Nguyễn",
    age: 21,
    location: "TP. HCM",
    image: "/students/NhiNguyen.jpg",
    content: `Giáo viên bản ngữ, phát âm chuẩn. Cô Aimie dạy rất dễ hiểu, kiên nhẫn và thân thiện. Giảng giải rõ ràng, phù hợp cả với người học chậm như mình.

Sau vài buổi học, mình thấy tự tin nói hơn hẳn.`,
  },
  {
    name: "ABC",
    age: 24,
    location: "TP. HCM",
    image: "/students/ABC.jpg",
    content: `Giáo trình được cá nhân hóa đúng trình độ nên không bị áp lực. Giáo viên tập trung vào chất lượng thực sự, không gò bó hay chạy theo chỉ tiêu.

Cô Mỹ Quyên thì cực tận tâm, phát âm chuẩn Đài nhờ sống lâu năm tại đó, dạy cả từ lóng cực thú vị.`,
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
