"use client";

const PinShape = ({
  number,
  outerColor = "#EBCDD1",
  innerColor = "#FFFFFF",
  textColor = "#A76A46",
}: {
  number: string;
  outerColor?: string;
  innerColor?: string;
  textColor?: string;
}) => (
  <svg
    width="100"
    height="120"
    viewBox="0 0 100 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 0C77.6 0 100 22.4 100 50C100 77.6 50 120 50 120C50 120 0 77.6 0 50C0 22.4 22.4 0 50 0Z"
      fill={outerColor}
    />
    <circle cx="50" cy="50" r="40" fill={innerColor} />
    <text
      x="50"
      y="50"
      textAnchor="middle"
      dominantBaseline="middle"
      fill={textColor}
      fontSize="32"
      fontWeight="bold"
    >
      {number}
    </text>
  </svg>
);

const Arrow = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <svg
      width="120"
      height="80"
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d={"M0 20 C20 0, 60 0, 80 20"}
        stroke="#3B2B1B"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#3B2B1B" />
        </marker>
      </defs>
    </svg>
  );
};

export default function HowItWorks() {
  const steps = [
    { number: "01.", outerColor: "#E3C3C6", text: "Đăng nhập / Đăng ký" },
    { number: "02.", outerColor: "#EAB5B9", text: "Chọn giáo viên mà bạn yêu thích" },
    { number: "03.", outerColor: "#E3878F", text: "Chọn thời gian phù hợp và đặt lịch học" },
    { number: "04.", outerColor: "#A8444D", text: "Sau khi đặt lịch, vui lòng chờ xác nhận" },
    { number: "05.", outerColor: "#A92A35", text: "Tham gia lớp học vào thời gian đã hẹn" },
  ];

  return (
    <section className="w-full py-20 bg-[#FDF7EF] px-4">
      <h2 className="text-3xl font-bold text-center mb-16">
        ASPIRELY HOẠT ĐỘNG NHƯ THẾ NÀO?
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex justify-between px-45 mb-[-60px] z-10 relative">
          <div className="flex flex-col items-center w-1/2">
            <PinShape number={steps[1].number} outerColor={steps[1].outerColor} />
            <p className="text-center mt-2 w-32">{steps[1].text}</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <PinShape number={steps[3].number} outerColor={steps[3].outerColor} />
            <p className="text-center mt-2 w-32">{steps[3].text}</p>
          </div>
        </div>

        <div className="flex justify-between px-10">
          {[
            steps[0],
            steps[2],
            steps[4],
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center w-1/3">
              <PinShape number={step.number} outerColor={step.outerColor} />
              <p className="text-center mt-2 w-32">{step.text}</p>
            </div>
          ))}
        </div>

        <Arrow
          className="absolute left-[200px] top-[50px] rotate-[-45deg]"
        />
        <Arrow
          className="absolute left-[380px] top-[60px] rotate-[45deg]"
        />
        <Arrow
          className="absolute left-[500px] top-[50px] rotate-[-45deg]"
        />
        <Arrow
          className="absolute left-[700px] top-[60px] rotate-[45deg]"
        />
      </div>
    </section>
  );
}