"use client"
import { useState } from "react"
import { FiUser, FiPhone, FiMail, FiBookOpen } from "react-icons/fi"

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", form)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-[#9F0A0B]">
        Đăng ký tư vấn miễn phí
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiUser className="text-[#9F0A0B] mr-2" />
          <input
            name="name"
            placeholder="Họ và tên"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none text-black placeholder:italic"
          />
        </div>

        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiPhone className="text-[#9F0A0B] mr-2" />
          <input
            name="phone"
            placeholder="Số điện thoại"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none text-black placeholder:italic"
          />
        </div>

        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiMail className="text-[#9F0A0B] mr-2" />
          <input
            name="email"
            placeholder="Email (không bắt buộc)"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-black placeholder:italic"
          />
        </div>

        <div className="flex items-center bg-white rounded p-2 border border-gray-300">
          <FiBookOpen className="text-[#9F0A0B] mr-2" />
          <select
            name="program"
            value={form.program}
            onChange={handleChange}
            required
            className="w-full bg-transparent outline-none text-black placeholder:italic"
          >
            <option value="">Chương trình quan tâm</option>
            <option>Tiếng Anh giao tiếp</option>
            <option>Luyện thi IELTS</option>
            <option>Tiếng Anh doanh nghiệp</option>
            <option>Tiếng Trung</option>
          </select>
        </div>

        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Ghi chú thêm"
            rows={4}
            className="w-full bg-white border border-gray-300 rounded p-3 text-black placeholder:italic"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-[#9F0A0B] py-2 rounded-full font-bold hover:opacity-90 transition"
        >
          GỬI THÔNG TIN
        </button>
      </form>
    </div>
  )
}