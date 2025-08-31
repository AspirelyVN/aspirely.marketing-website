import Image from "next/image";
import FancyButton from "../FancyButton";
import { useTranslations } from "next-intl";

export default function WorkshopPromoSection() {
  const t = useTranslations("WorkshopPromo");

  return (
    <div className="relative w-full min-h-[60svh] lg:h-[600px] flex flex-col items-center lg:items-end gap-5 px-4 sm:px-6 md:px-10 py-8 md:py-10">
      {/* Banner background */}
      <Image
        src="/assets/images/WorkshopPromoSection/MobileBanner.svg"
        alt="Workshop Banner"
        fill
        priority
        className="object-contain lg:hidden"
      />
      <Image
        src="/assets/images/WorkshopPromoSection/DesktopBanner.png"
        alt="Workshop Banner"
        fill
        priority
        className="object-contain hidden lg:block"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-end w-full h-full gap-5">
        <h1 className="w-full lg:w-[65%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-right text-[#9F0A0B]">
          {t.rich("title", {
            span: (chunks) => <span className="text-[#0D356B]">{chunks}</span>,
            br: () => <br />,
          })}
        </h1>

        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-3 md:gap-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold">{t("subtitle")}</p>
          <p className="text-lg sm:text-xl md:text-2xl text-center font-semibold">{t("point1")}</p>
          <p className="text-base sm:text-lg text-center">
            {t.rich("point2", {
              span: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
          </p>
          <FancyButton className="bg-[#9F0A0B] text-white mt-4 lg:mt-5 py-3 px-6 rounded-full">
            {t("button")}
          </FancyButton>
        </div>
      </div>
    </div>
  );
}