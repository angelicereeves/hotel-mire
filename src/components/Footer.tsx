import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-ocean-dark px-6 pt-16 pb-8 text-ivory md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-10 pb-12 md:flex-row md:items-end">
          <div>
            <Link
              href="/"
              aria-label={t("home")}
              className="inline-flex flex-col items-center"
            >
              <span className="text-[9px] uppercase tracking-[0.45em]">
                Hotel
              </span>
              <span className="font-serif text-6xl leading-none">
                mirë<span className="text-sand">.</span>
              </span>
            </Link>

            <p className="mt-5 font-serif text-xl italic text-sand">
              {t("tagline")}
            </p>

            <p className="mt-3 text-xs text-ivory/60">
              {t("location")}
            </p>
          </div>

          <nav
            aria-label={t("navigation")}
            className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-ivory/75"
          >
            <Link href="#our-story" className="hover:text-sand">
              {t("story")}
            </Link>
            <Link href="#rooms" className="hover:text-sand">
              {t("rooms")}
            </Link>
            <Link href="#experience" className="hover:text-sand">
              {t("experience")}
            </Link>
            <Link href="#booking" className="hover:text-sand">
              {t("booking")}
            </Link>
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-ivory/15 pt-6 text-[11px] text-ivory/50 sm:flex-row">
          <p>© Hotel Mirë. {t("rights")}</p>
          <p>{t("credit")}</p>
        </div>
      </div>
    </footer>
  );
}