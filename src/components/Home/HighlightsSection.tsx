import Image from "next/image";

export default function HighlightsSection() {
    return (
        <div className="w-screen min-h-125 grid grid-cols-3">
            <div 
                className="relative w-full h-full p-5 aspect-[4/5]"
                style={{
                    backgroundImage: "url('/assets/images/HighlightsSection/Picture1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-[#004d8f]/80" />
                <div className="relative h-full flex flex-col justify-between items-center space-y-10 text-white">
                    <div className="space-x-2 flex justify-center items-center">
                        <div className="relative h-15 aspect-square">
                            <Image 
                                src="/assets/images/HighlightsSection/AspirelyIcon.png" 
                                alt="Aspirely Icon" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-3xl xl:text-4xl font-semibold">Aspirely là gì?</p>
                    </div>
                    <p className="text-xl">Aspirely là một nền tảng học ngôn ngữ trực tuyến, tập trung 100% vào kỹ năng Nói. <br/> <br/>Chúng tôi dạy Tiếng Anh và Tiếng Trung thông qua các buổi trò chuyện thực tế, không giáo trình nhàm chán, chỉ có luyện nói hiệu quả.</p>
                    <button className="w-3/4 border border-white py-2 px-4 rounded-lg">Tìm hiểu thêm</button>
                </div>
            </div>
            <div 
                className="relative w-full h-full p-5 aspect-[4/5]"
                style={{
                    backgroundImage: "url('/assets/images/HighlightsSection/Picture2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-[#00356d]/80" />
                <div className="relative h-full flex flex-col justify-between items-center space-y-10 text-white">
                    <div className="space-x-2 flex justify-center items-center">
                        <div className="relative h-12 aspect-square">
                            <Image 
                                src="/assets/images/HighlightsSection/BookIcon.png" 
                                alt="Book Icon" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-3xl xl:text-4xl font-semibold">Khoá học</p>
                    </div>
                    <p className="text-xl">Giao tiếp hằng ngày<br/>Luyện Speaking: IELTS & HSKK<br/>Tiếng Anh/Trung cho công việc<br/><br/>Hình thức học<br/>Lớp nhóm: luyện tập, tự tin hơn<br/>1 kèm 1: lộ trình cá nhân<br/>Workshop miễn phí hàng tuần</p>
                    <button className="w-3/4 border border-white py-2 px-4 rounded-lg">Khoá học của chúng tôi</button>
                </div>
            </div>
            <div 
                className="relative w-full h-full p-5 aspect-[4/5]"
                style={{
                    backgroundImage: "url('/assets/images/HighlightsSection/Picture3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 bg-[#004d8f]/80" />
                <div className="relative h-full flex flex-col justify-between items-center space-y-10 text-white">
                    <div className="space-x-2 flex justify-center items-center">
                        <div className="relative h-15 aspect-square">
                            <Image 
                                src="/assets/images/HighlightsSection/PeopleIcon.png" 
                                alt="People Icon" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-3xl xl:text-4xl font-semibold">Giáo viên</p>
                    </div>
                    <p className="text-xl"> Trực tiếp học cùng giáo viên bản ngữ, giúp bạn nói tự nhiên, trôi chảy và đầy tự tin.<br/><br/>Với Aspirely, bạn không chỉ học ngôn ngữ - mà còn sử dụng thành thạo trong cuộc sống và sự nghiệp.</p>
                    <button className="w-3/4 border border-white py-2 px-4 rounded-lg">Giáo viên của chúng tôi</button>
                </div>
            </div>
        </div>
    )
}