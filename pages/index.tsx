"use client";
import { useEffect, useState } from "react";
import About from "@/components/about";
import Parallax from "@/components/parallax";
import ContactUs from "@/components/contactUs";
const logo = "./logo.png";

export default function Home() {
  return (
    <>
      <Parallax />
      <About />
      <ContactUs />
    </>
  );
}
