import FancyButton from "../FancyButton";
import { useTranslations } from "next-intl";

export default function WorkshopPromoSection() {
  const t = useTranslations("WorkshopPromo");

  return (
    <div
      className="w-screen h-[600px] flex flex-col p-10 space-y-5"
      style={{
        backgroundImage:
          "url('/assets/images/WorkshopPromoSection/Banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="w-[65%] self-end text-5xl font-bold text-right text-[#9F0A0B]">
        {t.rich("title", {
            span: (chunks) => <span className="text-[#0D356B]">{chunks}</span>,
            br: () => <br />
        })}
      </h1>

      <div className="w-1/2 h-full flex flex-col self-end justify-center items-center space-y-4">
        <p className="text-3xl text-center font-semibold">{t("subtitle")}</p>
        <p className="text-2xl text-center font-semibold">{t("point1")}</p>
        <p>
            {t.rich("point2", {
                span: (chunks) => <span className="font-semibold">{chunks}</span>,
            })}
        </p>
        <FancyButton className="bg-[#9F0A0B] text-white mt-5 py-3 px-5 rounded-full">
          {t("button")}
        </FancyButton>
      </div>
    </div>
  );
}