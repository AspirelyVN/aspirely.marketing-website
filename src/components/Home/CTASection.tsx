import { useTranslations } from "next-intl"

export default function CTASection() {
    const t = useTranslations("CTA");

    return (
        <div 
            className="w-screen h-[400px] flex items-center"
            style={{
                backgroundImage: 'linear-gradient(#05386D80, #05386D80) ,url(/assets/images/CTASection/Banner.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 space-y-2 text-white">
                    <p className="text-4xl text-center font-semibold">{t("title")}</p>
                    <div className="w-full h-1 bg-white" />
                    <p className="mt-10 px-10 text-start text-xl">
                        {t.rich("subtitle", {
                            br: () => <br/>
                        })}
                    </p>
                </div>
                <div className="w-1/2 flex justify-center">
                    <button className="text-white text-2xl font-semibold px-10 py-3 border-3 rounded-xl">{t("button")}</button>
                </div>
            </div>
        </div>
    )
}