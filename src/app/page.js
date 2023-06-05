"use client";
import Hero from "@/components/HomePage/Hero";
import AboutUs from "@/components/HomePage/AboutUs";
import NavBar from "@/components/shared/NavBar";
import WhyUs from "@/components/HomePage/WhyUs";
import CustomerReview from "@/components/HomePage/CustomerReview";
import { useState } from "react";

export default function Home() {
  const [isIntersecting, setIsIntersecting] = useState(true);

  return (
    <>
      <NavBar
        isIntersecting={isIntersecting}
        setIsIntersecting={setIsIntersecting}
      />
      <Hero
        isIntersecting={isIntersecting}
        setIsIntersecting={setIsIntersecting}
      />
      <AboutUs />
      <WhyUs />
      <CustomerReview />
    </>
  );
}
