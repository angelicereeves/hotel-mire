import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Coffee, Sun, Waves } from "lucide-react";

import { Link } from "@/i18n/navigation";

export default function Experience() {
  const t = useTranslations("Experience");

  const moments = [
    {
      number: "01",
      icon: Coffee,
      title: t("breakfastTitle"),
      description: t("breakfastDescription"),
    },
    {
      number: "02",
      icon: Waves,
      title: t("coastTitle"),
      description: t("coastDescription"),
    },
    {
      number: "03",
      icon: Sun,
      title: t("eveningTitle"),
      description: t("eveningDescription"),
    },
  ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="overflow-hidden bg-ocean-dark py-20 text-ivory md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Terrace photograph */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-ocean md:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/experience-breakfast.png"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-ocean-dark/65 via-transparent to-transparent"
              />

              <div className="absolute right-7 bottom-7 left-7 border-t border-white/40 pt-5 md:right-10 md:bottom-10 md:left-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">
                  {t("imageEyebrow")}
                </p>

                <p className="mt-3 max-w-sm font-serif text-3xl leading-tight text-white md:text-4xl">
                  {t("imageCaption")}
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="max-w-xl lg:py-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-sand/50" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-sand/70">
                {t("eyebrow")}
              </p>
            </div>

            <h2
              id="experience-heading"
              className="mt-7 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              {t("title")}
              <br />
              <span className="italic text-sand">
                {t("titleAccent")}
              </span>
            </h2>

            <p className="mt-8 font-serif text-2xl leading-relaxed text-ivory/90 md:text-3xl">
              {t("intro")}
            </p>

            <p className="mt-6 text-sm leading-8 text-ivory/70 md:text-base">
              {t("description")}
            </p>

            <Link
              href="#booking"
              className="mt-9 inline-flex items-center justify-between gap-8 border border-sand bg-sand px-7 py-4 text-sm font-medium text-ocean-dark transition-colors hover:border-ivory hover:bg-ivory"
            >
              {t("button")}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Daily moments */}
        <div className="mt-16 grid gap-10 border-t border-ivory/15 pt-10 md:mt-24 md:grid-cols-3 md:gap-8 md:pt-12">
          {moments.map(({ number, icon: Icon, title, description }) => (
            <article key={number}>
              <div className="flex items-center justify-between">
                <Icon
                  size={26}
                  strokeWidth={1.25}
                  aria-hidden="true"
                  className="text-sand/80"
                />

                <span className="font-serif text-3xl italic text-sand/40">
                  {number}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-3xl">{title}</h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}