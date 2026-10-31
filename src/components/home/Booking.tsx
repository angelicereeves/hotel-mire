"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Check, CalendarDays } from "lucide-react";

type Inquiry = {
  name: string;
  email: string;
  arrival: string;
  departure: string;
  guests: string;
  room: string;
  message: string;
};

function localDate() {
  const date = new Date();

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

export default function Booking() {
  const t = useTranslations("Booking");
  const [arrival, setArrival] = useState("");
  const [summary, setSummary] = useState<Inquiry | null>(null);

  const fieldClass =
    "w-full rounded-none border border-ivory/25 bg-ocean-dark px-4 py-3.5 text-sm text-ivory outline-none transition-colors placeholder:text-ivory/35 focus:border-sand";

  const labelClass =
    "mb-2 block text-[10px] uppercase tracking-[0.15em] text-sand/80";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const read = (key: string) => String(data.get(key) ?? "").trim();

    const departureInput = form.elements.namedItem(
      "departure"
    ) as HTMLInputElement;

    departureInput.setCustomValidity("");

    if (read("arrival") < localDate()) {
      const arrivalInput = form.elements.namedItem(
        "arrival"
      ) as HTMLInputElement;

      arrivalInput.setCustomValidity(t("pastDate"));
      arrivalInput.reportValidity();
      return;
    }

    if (read("departure") <= read("arrival")) {
      departureInput.setCustomValidity(t("dateError"));
      departureInput.reportValidity();
      return;
    }

    if (!form.reportValidity()) return;

    setSummary({
      name: read("name"),
      email: read("email"),
      arrival: read("arrival"),
      departure: read("departure"),
      guests: read("guests"),
      room: read("room"),
      message: read("message"),
    });
  }

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="bg-ocean px-6 py-20 text-ivory md:px-12 md:py-28 lg:px-20 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-sand/70">
            {t("eyebrow")}
          </p>

          <h2
            id="booking-heading"
            className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            {t("title")}
            <br />
            <span className="italic text-sand">
              {t("titleAccent")}
            </span>
          </h2>

          <p className="mt-8 max-w-sm text-sm leading-8 text-ivory/75">
            {t("intro")}
          </p>

          <div className="mt-10 flex max-w-sm items-start gap-4 border-t border-ivory/20 pt-6">
            <CalendarDays
              size={24}
              strokeWidth={1.25}
              aria-hidden="true"
              className="shrink-0 text-sand"
            />

            <p className="text-sm leading-7 text-ivory/70">
              {t("notice")}
            </p>
          </div>
        </div>

        <div className="border border-ivory/20 bg-ocean-dark p-6 md:p-10">
          {summary ? (
            <div>
              <div
                role="status"
                className="flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-sand/40">
                  <Check size={21} aria-hidden="true" />
                </span>

                <div>
                  <h3 className="font-serif text-3xl">
                    {t("summaryTitle")}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-ivory/70">
                    {t("summaryNotice")}
                  </p>
                </div>
              </div>

              <dl className="mt-8 space-y-5 border-t border-ivory/15 pt-6 text-sm">
                {[
                  [t("name"), summary.name],
                  [t("email"), summary.email],
                  [t("arrival"), summary.arrival],
                  [t("departure"), summary.departure],
                  [t("guests"), summary.guests],
                  [t("room"), t(`roomOptions.${summary.room}`)],
                  [t("message"), summary.message || t("none")],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4"
                  >
                    <dt className="text-sand/65">{label}</dt>
                    <dd className="min-w-0 whitespace-pre-wrap break-words">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <button
                type="button"
                onClick={() => setSummary(null)}
                className="mt-8 border-b border-sand/50 pb-2 text-sm transition-colors hover:text-sand"
              >
                {t("edit")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="font-serif text-3xl">
                {t("formTitle")}
              </h3>

              <p className="mt-3 text-xs leading-6 text-ivory/60">
                {t("required")}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-name" className={labelClass}>
                    {t("name")} *
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    pattern=".*\S.*"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="booking-email" className={labelClass}>
                    {t("email")} *
                  </label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="booking-arrival" className={labelClass}>
                    {t("arrival")} *
                  </label>
                  <input
                    id="booking-arrival"
                    name="arrival"
                    type="date"
                    required
                    min={localDate()}
                    value={arrival}
                    onChange={(event) => {
                      event.target.setCustomValidity("");
                      setArrival(event.target.value);
                    }}
                    className={`${fieldClass} scheme-dark`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-departure"
                    className={labelClass}
                  >
                    {t("departure")} *
                  </label>
                  <input
                    id="booking-departure"
                    name="departure"
                    type="date"
                    required
                    min={arrival || localDate()}
                    onChange={(event) =>
                      event.target.setCustomValidity("")
                    }
                    className={`${fieldClass} scheme-dark`}
                  />
                </div>

                <div>
                  <label htmlFor="booking-guests" className={labelClass}>
                    {t("guests")} *
                  </label>
                  <select
                    id="booking-guests"
                    name="guests"
                    defaultValue="2"
                    className={fieldClass}
                  >
                    {[1, 2, 3].map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="booking-room" className={labelClass}>
                    {t("room")} *
                  </label>
                  <select
                    id="booking-room"
                    name="room"
                    defaultValue="any"
                    className={fieldClass}
                  >
                    {["any", "garden", "sea", "suite"].map((room) => (
                      <option key={room} value={room}>
                        {t(`roomOptions.${room}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="booking-message" className={labelClass}>
                    {t("message")}
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={4}
                    maxLength={2000}
                    placeholder={t("messagePlaceholder")}
                    className={`${fieldClass} resize-y`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-between gap-4 border border-sand bg-sand px-6 py-4 text-sm font-medium text-ocean-dark transition-colors hover:border-ivory hover:bg-ivory"
              >
                {t("button")}
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}