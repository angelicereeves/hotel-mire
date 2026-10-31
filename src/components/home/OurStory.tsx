import { useTranslations } from "next-intl";
import { ArrowUpRight, Coffee, Sun, Waves } from "lucide-react";

import { Link } from "@/i18n/navigation";

export default function OurStory() {
  const t = useTranslations("OurStory");

  const highlights = [
    {
      icon: Waves,
      title: t("seaTitle"),
      description: t("seaDescription"),
    },
    {
      icon: Coffee,
      title: t("coffeeTitle"),
      description: t("coffeeDescription"),
    },
    {
      icon: Sun,
      title: t("sunTitle"),
      description: t("sunDescription"),
    },
  ];

  return (
    <section
      id="our-story"
      aria-labelledby="story-heading"
      className="bg-ocean-dark px-6 py-20 text-ivory md:px-12 md:py-28 lg:px-20 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-sand/70">
              {t("eyebrow")}
            </p>

            <h2
              id="story-heading"
              className="mt-6 max-w-lg font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              {t("title")}
              <br />
              <span className="italic text-sand">
                {t("titleAccent")}
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:pt-10">
            <p className="font-serif text-2xl leading-relaxed md:text-3xl">
              {t("intro")}
            </p>

            <p className="mt-6 text-sm leading-8 text-ivory/70 md:text-base">
              {t("paragraphOne")}
            </p>

            <p className="mt-4 text-sm leading-8 text-ivory/70 md:text-base">
              {t("paragraphTwo")}
            </p>

            <Link
              href="#rooms"
              className="group mt-8 inline-flex items-center gap-6 border-b border-ivory/35 pb-2 text-xs font-medium transition-colors hover:border-ivory"
            >
              {t("button")}
              <ArrowUpRight
                size={17}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ivory/15 pt-10 md:mt-20 md:grid-cols-3 md:gap-8 md:pt-12">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-5">
              <Icon
                size={24}
                strokeWidth={1.25}
                aria-hidden="true"
                className="mt-1 shrink-0 text-sand/70"
              />

              <div>
                <h3 className="font-serif text-2xl">{title}</h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-ivory/70">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}