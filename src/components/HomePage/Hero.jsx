"use client";
import Image from "next/image";
import shield from "/public/amico.png";
import Search from "../shared/SearchBox";

function Hero({ isIntersecting, setIsIntersecting }) {
  return (
    <section
      id="home"
      className="bg-main-blue rounded-tl-[100px] p-8 text-white rounded rounded-br-[100px] m-10">
      <div className="flex  px-24 mt-16 flex-wrap">
        <div className="min-w-[50%] flex justify-center items-start  flex-col">
          <h1 className="capitalize  text-4xl font-semibold  leading-relaxed max-w-xl flex ">
            Find Your Medicines <br /> Online with Ease at <br /> FINDMED!
          </h1>
          <p className="text-lg  mt-4 max-w-sm">
            The ultimate destination for all of your medical needs, any time &
            everywhere where!
          </p>
          {isIntersecting && (
            <Search
              isIntersecting={isIntersecting}
              setIsIntersecting={setIsIntersecting}
            />
          )}
        </div>
        <div className="mx-auto">
          <Image src={shield} alt="pharmacy illustration" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
