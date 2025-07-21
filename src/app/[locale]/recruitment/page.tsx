"use client"
import { useState } from "react"

export default function RecruitmentPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email) return
    // submit logic here
    setSubmitted(true)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Ứng tuyển giảng viên</h1>

      {submitted ? (
        <p className="text-green-600 text-center">Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm.</p>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full p-3 border rounded"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full p-3 border rounded"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <textarea
            placeholder="Giới thiệu hoặc nhắn nhủ"
            className="w-full p-3 border rounded"
            rows={4}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Gửi thông tin
          </button>
        </div>
      )}
    </div>
  )
}
