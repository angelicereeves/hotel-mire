"use client";

import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function changeLanguage(nextLocale: "en" | "sq") {
    if (nextLocale === locale) return;

    const query = searchParams.toString();
    const hash = window.location.hash;
    const href = `${pathname}${query ? `?${query}` : ""}${hash}`;

    startTransition(() => {
      router.replace(href, {
        locale: nextLocale,
        scroll: false,
      });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      aria-busy={isPending}
      className="inline-flex shrink-0 items-center rounded-full border border-ivory/35 p-1"
    >
      {routing.locales.map((language) => (
        <button
          key={language}
          type="button"
          lang={language}
          aria-label={language === "en" ? "English" : "Shqip"}
          aria-pressed={locale === language}
          disabled={isPending}
          onClick={() => changeLanguage(language)}
          className={`rounded-full px-3 py-2 text-[10px] font-medium tracking-wider transition-colors disabled:cursor-wait ${
            locale === language
              ? "bg-ivory text-ocean-dark"
              : "text-ivory/75 hover:bg-white/10 hover:text-ivory"
          }`}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}