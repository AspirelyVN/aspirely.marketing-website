import Image from "next/image";

export default function CefrSection() {
    return (
        <section className="w-screen max-w-7xl p-10 space-y-10">
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-8">
                <div className="relative aspect-square rounded-4xl">
                    <Image
                        src="/assets/images/CefrSection/Picture1.png"
                        alt="Picture 1"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
                <div className="relative aspect-square rounded-4xl">
                    <Image
                        src="/assets/images/CefrSection/Picture2.png"
                        alt="Picture 2"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
                <div className="relative aspect-square rounded-4xl">
                    <Image
                        src="/assets/images/CefrSection/Picture3.png"
                        alt="Picture 3"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
                <div className="relative aspect-square rounded-4xl">
                    <Image
                        src="/assets/images/CefrSection/Picture4.png"
                        alt="Picture 4"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
                <div className="relative aspect-square rounded-4xl">
                    <Image
                        src="/assets/images/CefrSection/Picture5.png"
                        alt="Picture 5"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
                <div className="relative aspect-square rounded-4xl">
                    <Image
                        src="/assets/images/CefrSection/Picture6.png"
                        alt="Picture 6"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
                <div className="relative aspect-square rounded-4xl">
                    <Image
                        src="/assets/images/CefrSection/Picture7.png"
                        alt="Picture 7"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
                <div className="relative aspect-square rounded-4xl">
                    <Image
                        src="/assets/images/CefrSection/Picture8.png"
                        alt="Picture 8"
                        fill
                        className="object-cover rounded-4xl"
                    />
                </div>
            </div>
            <div className="w-full space-y-2">
                <h1 className="text-5xl text-center text-[#0D356B] font-semibold">CEFR là gì?</h1>
                <h2 className="text-3xl text-center">Từ Sơ Cấp đến Thành Thạo - Hành Trình Ngôn Ngữ CEFR</h2>
                <div className="relative w-full aspect-[16/9]">
                    <Image
                        src="/assets/images/CefrSection/CefrLevel.png"
                        alt="Picture 8"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
}
