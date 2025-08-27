import Image from "next/image";
import { useMessages } from "next-intl";

export default function HighlightsSection() {
  const messages = useMessages();
  const items = messages.Highlights as {
    bg: string;
    overlay: string;
    icon: string;
    title: string;
    content: string;
    button: string;
  }[];

  return (
    <section className="w-screen grid grid-cols-1 md:grid-cols-3 items-stretch">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative w-full min-h-[320px] md:min-h-[400px] xl:min-h-[500px]"
          style={{
            backgroundImage: `url(${item.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`absolute inset-0 ${item.overlay}`} />
          <div className="relative h-full grid grid-rows-6 items-start text-white p-6 gap-6">
            <div className="flex items-center justify-center gap-2 justify-self-center">
              <div className="relative h-12 xl:h-15 aspect-square">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <p className="text-2xl xl:text-4xl font-semibold text-center">{item.title}</p>
            </div>

            <div className="h-full row-span-4 flex items-center justify-center">
              <div
                className="text-base lg:text-lg xl:text-xl leading-relaxed text-start"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>

            <button className="justify-self-center inline-flex items-center h-11 px-6 rounded-lg border border-white">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}