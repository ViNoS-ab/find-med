"use client";
import Hero from "@/components/medicaments/Hero";
import NavBar from "@/components/medicaments/NavBar";
import PopularSearch from "@/components/medicaments/popularSearch";
import AllProducts from "@/components/medicaments/AllProducts";
import { useState } from "react";

export default function MedicamentsPage() {
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
      <PopularSearch />
      <AllProducts />
    </>
  );
}
