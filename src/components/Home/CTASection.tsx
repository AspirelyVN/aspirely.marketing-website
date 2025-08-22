export default function CTASection() {
    return (
        <div 
            className="w-screen h-[400px] flex items-center p-10"
            style={{
                backgroundImage: 'linear-gradient(#05386D80, #05386D80) ,url(/assets/images/CTASection/Banner.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                <div className="w-1/2 space-y-2 text-white">
                    <p className="text-4xl text-end font-semibold">Sẵn sàng tìm hiểu thêm chưa?</p>
                    <div className="w-full h-1 bg-white" />
                    <p className="mt-20 text-center text-xl">Hãy để Aspirely giúp bạn xoá bỏ lo lắng khi giao tiếp trong môi trường nước ngoài, tự tin kết nối và hòa nhập quốc tế.</p>
                </div>
                <div className="w-1/2 flex justify-center">
                    <button className="text-white text-2xl font-semibold px-10 py-3 border-3 rounded-xl">Đăng ký</button>
                </div>
            </div>
        </div>
    )
}