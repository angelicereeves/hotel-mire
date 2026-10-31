import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[780px] items-center overflow-hidden bg-ocean-dark text-ivory lg:min-h-svh"
    >
      <Image
        src="/images/hotel-hero.png"
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-ocean-dark/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-ocean-dark/75 via-ocean-dark/30 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-linear-to-b from-black/35 to-transparent"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1600px] px-6 pt-44 pb-40 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 shrink-0 bg-sand/70" />

            <p className="text-[10px] uppercase tracking-[0.3em] md:text-xs">
              {t("location")}
            </p>
          </div>

          <h1
            id="hero-heading"
            className="font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.95] font-normal tracking-[-0.045em]"
          >
            {t("title")}
            <br />
            <span className="italic text-sand">
              {t("titleAccent")}
            </span>
          </h1>

          <p className="mt-8 max-w-sm text-sm leading-7 text-ivory/85 md:max-w-md md:text-base">
            {t("description")}
          </p>

          <Link
            href="#rooms"
            className="mt-10 inline-flex items-center gap-8 bg-ivory px-7 py-4 text-xs font-medium text-ocean transition-colors hover:bg-sand"
          >
            {t("button")}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/25">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-7 md:px-12 lg:px-20">
          <p className="max-w-48 text-[10px] leading-5 uppercase tracking-[0.2em] text-ivory/80 sm:max-w-none">
            {t("caption")}
          </p>

          <Link
            href="#our-story"
            className="group inline-flex shrink-0 items-center gap-4 text-xs"
          >
            {t("discover")}

            <span className="flex size-10 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:bg-white/15">
              <ArrowDown size={16} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}