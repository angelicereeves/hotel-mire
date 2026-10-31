import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Maximize2, Users } from "lucide-react";

import { Link } from "@/i18n/navigation";

const rooms = [
  {
    key: "garden",
    number: "01",
    image: "/images/garden-double.png",
    size: "24 m²",
    price: 75,
  },
  {
    key: "sea",
    number: "02",
    image: "/images/sea-view-double.png",
    size: "28 m²",
    price: 110,
  },
  {
    key: "suite",
    number: "03",
    image: "/images/riviera-suite.png",
    size: "42 m²",
    price: 165,
  },
] as const;

export default function RoomsPreview() {
  const t = useTranslations("Rooms");

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="bg-ocean px-6 py-20 text-ivory md:px-12 md:py-28 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-sand/70">
              {t("eyebrow")}
            </p>

            <h2
              id="rooms-heading"
              className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              {t("title")}
              <br />
              <span className="italic text-sand">
                {t("titleAccent")}
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-ivory/70">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.key} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-ocean-dark">
                <Image
                  src={room.image}
                  alt={t(`${room.key}.alt`)}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
                />

                <span className="absolute top-5 left-5 flex size-10 items-center justify-center rounded-full border border-white/40 bg-ocean-dark/20 text-[10px] backdrop-blur-sm">
                  {room.number}
                </span>

                <p className="absolute right-6 bottom-6 left-6 font-serif text-2xl italic text-white">
                  {t(`${room.key}.feature`)}
                </p>
              </div>

              <div className="flex flex-1 flex-col pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-serif text-3xl">
                    {t(`${room.key}.name`)}
                  </h3>

                  <p className="text-xs text-ivory/65">
                    {t("from")}{" "}
                    <span className="text-base text-ivory">
                      €{room.price}
                    </span>{" "}
                    {t("night")}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-5 text-[11px] text-sand/75">
                  <span className="inline-flex items-center gap-2">
                    <Users size={14} aria-hidden="true" />
                    {t(`${room.key}.guests`)}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Maximize2 size={14} aria-hidden="true" />
                    {room.size}
                  </span>
                </div>

                <p className="mt-5 flex-1 text-sm leading-7 text-ivory/70">
                  {t(`${room.key}.description`)}
                </p>

                <Link
                  href="#booking"
                  aria-label={t("enquireLabel", {
                    room: t(`${room.key}.name`),
                  })}
                  className="mt-6 flex w-full items-center justify-between gap-4 border border-sand bg-sand px-6 py-4 text-sm font-medium text-ocean-dark transition-colors hover:border-ivory hover:bg-ivory"
                >
                  {t("button")}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}