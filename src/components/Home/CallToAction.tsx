import Link from "next/link";
import FancyButton from "@/components/FancyButton";

export default function CallToAction() {
  return (
    <section className="w-full bg-[#FDF3F3] py-12 px-4 border-t border-b border-[#F1D6D6]">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#9F0A0B]">
          Sẵn sàng để nâng cấp tiếng Anh?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          Nhận tư vấn miễn phí từ đội ngũ giáo viên chuyên nghiệp của chúng tôi.
        </p>
        <Link href="/contact-us">
          <FancyButton className="mt-2">
            Đăng ký tư vấn miễn phí
          </FancyButton>
        </Link>
      </div>
    </section>
  )
}
