import FancyButton from "../FancyButton"

export default function WorkshopPromoSection() {
    return (
        <div
            className="w-screen h-[600px] flex flex-col p-10 space-y-5"
            style={{
                backgroundImage: "url('/assets/images/WorkshopPromoSection/Banner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1 className="w-[65%] self-end text-5xl font-bold text-right"><span className="text-[#0D356B]">Workshop</span> <span className="text-[#9F0A0B]">Luyện nói Tiếng Anh thật sự cùng người bản ngữ</span></h1>
            <div className="w-1/2 h-full flex flex-col self-end justify-center items-center space-y-2">
                <p className="text-3xl text-center font-semibold">Nghe tự tin - Nói chủ động</p>
                <p className="text-2xl text-center">Bắt đầu ngay hôm nay cùng Aspirely!</p>
                <p className="w-2/3 text-xl text-justify"><br/><span className="font-semibold">14 ngày</span> workshop hoàn toàn <span className="font-semibold">MIỄN PHÍ</span> trải nghiệm học trực tuyến với giáo viên bản xứ, sửa phát âm, luyện phản xạ giao tiếp.</p>
                <FancyButton className="bg-[#9F0A0B] text-white mt-5 py-3 px-5 rounded-full">Miễn phí cho học viên mới</FancyButton>
            </div>
        </div>
    )
}