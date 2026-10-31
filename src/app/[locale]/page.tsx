import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import OurStory from "@/components/home/OurStory";
import RoomsPreview from "@/components/home/RoomsPreview";
import Experience from "@/components/home/Experience";
import Booking from "@/components/home/Booking";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <OurStory />
        <RoomsPreview />
        <Experience />
        <Booking />
      </main>

      <Footer />
    </>
  );
}