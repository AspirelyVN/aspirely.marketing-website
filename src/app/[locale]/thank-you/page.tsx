"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error" | "invalid">("loading");

  useEffect(() => {
    const raw = sessionStorage.getItem("signupData");

    if (!raw) {
      setStatus("invalid");
      setTimeout(() => router.push("/"), 2000);
      return;
    }

    const { name, phone, email, course } = JSON.parse(raw);

    if (!name || !phone || !email || !course) {
      setStatus("invalid");
      setTimeout(() => router.push("/"), 2000);
      return;
    }

    const alreadySent = sessionStorage.getItem("signupSent");
    if (alreadySent === "true") {
      setStatus("success");
      setTimeout(() => router.push("/"), 5000);
      return;
    }

    sessionStorage.setItem("signupSent", "true");

    fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, course }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("fail");
        setStatus("success");
        setTimeout(() => router.push("/"), 5000);
      })
      .catch(() => {
        setStatus("error");
        sessionStorage.removeItem("signupSent");
      });
  }, [router]);

  if (status === "invalid") {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center text-center">
        <p className="text-sm text-gray-500">Trang không hợp lệ, đang quay về trang chủ...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center px-4">
      {status === "loading" && (
        <div>
          <p className="text-xl font-semibold mb-2">Đang xử lý đăng ký...</p>
          <p className="text-sm text-gray-500">Vui lòng đợi trong giây lát</p>
        </div>
      )}

      {status === "success" && (
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">Cảm ơn bạn đã đăng ký!</h2>
          <p className="text-sm text-gray-500">Bạn sẽ được chuyển về trang chủ sau vài giây...</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-2 bg-black text-white rounded"
          >
            Quay lại trang chủ ngay
          </button>
        </div>
      )}

      {status === "error" && (
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Đã xảy ra lỗi!</h2>
          <p className="text-sm text-gray-500">Vui lòng quay lại và thử lại sau.</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-2 bg-black text-white rounded"
          >
            Quay lại trang chủ
          </button>
        </div>
      )}
    </div>
  );
}