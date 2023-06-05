"use client";
import Image from "next/image";
import pharmacyPic from "/public/bro.png";
import Search from "./searchBox";

function Hero({ isIntersecting, setIsIntersecting }) {
  return (
    <section>
      <div className="flex  px-24 mt-16 flex-wrap">
        <div className="min-w-[60%] flex justify-center items-center flex-col">
          <h1 className="capitalize text-secondary-blue  text-3xl font-semibold text-center leading-relaxed max-w-2xl flex ">
            ‘’Discover and Order Your Medicines with Ease: Effortless Medication
            Search at FINDMED’’
          </h1>
          <p className="text-base  mt-4 max-w-xl">
            Finding the right medicines is now easier than ever with our
            user-friendly pharmacy search feature. We understand the importance
            of convenient access to medications, and our platform is designed to
            provide a seamless experience for finding the medicines you need.
          </p>
          {isIntersecting && (
            <Search
              isIntersecting={isIntersecting}
              setIsIntersecting={setIsIntersecting}
            />
          )}
        </div>
        <div className="mx-auto">
          <Image src={pharmacyPic} alt="pharmacy illustration" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
