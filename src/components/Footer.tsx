"use client"
import Image from "next/image";
import Script from "next/script";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="font-poppins bg-white text-black py-10 px-4 w-full border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div className="w-full flex flex-col items-center md:items-start">
          <Image src="/Logo.svg" alt="Aspirely Logo" width={150} height={80} className="mb-4" />
          <div className="w-full px-3 py-2 flex items-center text-lg"><FaPhone className="w-4 h-4 mr-2" />028 62763622</div>
          <div className="w-full px-3 py-2 flex items-center text-lg"><IoMdMail className="w-4 h-4 mr-2" />aspirely.online@gmail.com</div>
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=dd6406b8-f284-4f90-85da-f9bf008a3ea9"
            title="DMCA.com Protection Status"
            className="dmca-badge"
          >
            <img
              src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-04.png?ID=dd6406b8-f284-4f90-85da-f9bf008a3ea9"
              alt="DMCA.com Protection Status"
            />
          </a>
          <Script
            src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
            strategy="afterInteractive"
          />
        </div>
        <div>
          <p className="font-bold mb-3">TIẾNG ANH</p>
          <ul className="space-y-2">
            <li>Tiếng Anh Giao Tiếp</li>
            <li>Luyện thi IELTS</li>
            <li>Tiếng Anh Doanh Nghiệp</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">TIẾNG TRUNG</p>
          <ul className="space-y-2">
            <li>Tiếng Trung Cơ Bản</li>
            <li>Tiếng Trung Giao Tiếp</li>
            <li>Tiếng Trung Doanh Nghiệp</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">TÌM HIỂU THÊM</p>
          <ul className="space-y-2">
            <li>Giới thiệu về Aspirely</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản dịch vụ</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} Aspirely. All rights reserved.
      </div>
    </footer>
  )
}