import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Solution from "@/components/home/Solution";
import Pricing from "@/components/home/Pricing";
import Flow from "@/components/home/Flow";
import Voice from "@/components/home/Voice";
import Profile from "@/components/home/Profile";
import News from "@/components/home/News";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <Flow />
      <Voice />
      <ContactCta />
      <Profile />
      <News />
    </>
  );
}
