"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper";
import "swiper/css/navigation";

import MedCard from "./MedCard";
import dwa from "/public/dwa.jpg";
import useWindowDimensions from "@/hooks/useWindowDimension";
import { useEffect, useState } from "react";

const data = [
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
  { image: dwa, location: "Alger", name: "Rapidus" },
];

export default function PopularSearch() {
  const [slidesPerView, setSlidesPerView] = useState("auto");

  const { width } = useWindowDimensions();
  useEffect(() => {
    console.log(width);
    if (width > 900) setSlidesPerView(6);
    else if (width > 700) setSlidesPerView(3);
    else setSlidesPerView(1);
  }, [width]);
  return (
    <section className="bg-gray-100 md:p-12 p-2 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-secondary-blue text-cente my-6 ">
        Most Popular Searchs
      </h1>

      <Swiper
        observer={true}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        centeredSlidesBounds={true}
        modules={[Navigation]}
        className="w-5/6">
        {data.map((med, index) => (
          <SwiperSlide key={index}>
            <MedCard med={med} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
