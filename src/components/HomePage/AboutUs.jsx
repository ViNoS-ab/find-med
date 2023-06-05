"use client";
import Image from "next/image";
import insurance from "/public/insurance.png";

function Hero() {
  return (
    <section id="about" className="bg-gray-200 p-8  rounded  m-10">
      <div className="flex  px-24 mt-16 flex-wrap">
        <div className="mx-auto">
          <Image src={insurance} alt="pharmacy illustration" />
        </div>
        <div className="min-w-[50%] flex justify-start items-center text-center flex-col relative right-5">
          <h1 className="capitalize text-secondary-blue text-4xl font-bold  leading-relaxed max-w-xl  ">
            About Us
          </h1>
          <h2 className="text-secondary-blue text-2xl my-6 font-semibold  leading-relaxed max-w-xl">
            Our WebSite is dedicated to searching for medicines.
          </h2>
          <p className="text-lg  mt-4 max-w-sm">
            Welcome to our WebSite! this platforme is built for people who are
            searching for their medicines,here you can find all your medicines
            all in one!
          </p>
          <div className="flex justify-center items-center mt-10 font-semibold">
            <button className="cursor-pointer mx-10 rounded-md py-2 px-4 text-white bg-main-blue">
              Join Us
            </button>
            <a
              href="#whyus"
              className="mx-3 p-2 cursor-pointer bg-gray-50 border rounded  border-main-blue ">
              Learn more!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
