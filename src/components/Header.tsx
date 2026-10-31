"use client";

import { Suspense, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Header");

  const navigation = [
    { label: t("story"), href: "#our-story" },
    { label: t("rooms"), href: "#rooms" },
    { label: t("experience"), href: "#experience" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-ivory">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between gap-3 px-6 md:px-12 lg:px-20">
        <Link
          href="/"
          aria-label={t("home")}
          className="flex shrink-0 flex-col items-center"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-[9px] uppercase tracking-[0.45em]">
            Hotel
          </span>

          <span className="font-serif text-5xl leading-none tracking-tight">
            mirë<span className="text-sand">.</span>
          </span>
        </Link>

        <nav
          aria-label={t("open")}
          className="hidden items-center gap-7 xl:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs tracking-wide transition-opacity hover:opacity-65"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <Suspense fallback={<span className="h-10 w-24" />}>
            <LanguageSwitcher />
          </Suspense>

          <Link
            href="#booking"
            className="hidden items-center gap-5 border border-white/45 px-5 py-3 text-xs transition-colors hover:bg-ivory hover:text-ocean md:inline-flex"
          >
            {t("booking")}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? t("close") : t("open")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-11 items-center justify-center xl:hidden"
          >
            {menuOpen ? (
              <X size={25} aria-hidden="true" />
            ) : (
              <Menu size={25} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={t("open")}
          className="border-t border-white/15 bg-ocean-dark px-6 py-8 shadow-xl xl:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false);
          }}
        >
          <div className="flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center gap-3 text-sm"
            >
              {t("booking")}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}