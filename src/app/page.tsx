"use client";
// import CreativeProcess from "@/components/CreativeProcess";
// import { Testimonials } from "@/components/Testimonials";
import HeroSection from "@/components/HeroSection";
import Guarantees from "@/components/Guarantees";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
// import { testimonials } from "@/utils/data";
import Stats from "@/components/Stats";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <div className="background-gradient" />

      <div className="px-4 lg:px-8 space-y-14 pb-10">
        <HeroSection />
        <AboutUs />
        <Stats />
        {/* <CreativeProcess /> */}
        <Guarantees />
        {/* <Testimonials speed="slow" items={testimonials} direction="right" /> */}
        <Blog />
        <ContactUs />
      </div>
    </>
  );
}
