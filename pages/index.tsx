"use client";
import About from "@/components/about";
import Parallax from "@/components/parallax";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Parallax page={"home"} />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
