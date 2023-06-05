import Image from "next/image";
import time from "/public/time.png";
import effort from "/public/effort.png";
import easy from "/public/easy.png";

export default function WhyUs() {
  return (
    <div id="whyus" className="bg-gray-100 p-8  rounded   m-10">
      <h1 className="text-2xl font-bold text-secondary-blue text-center my-6 ">
        Why Us?
      </h1>
      <div className="flex justify-center flex-row w-full flex-wrap">
        <Image width={250} height={250} src={time} alt="saves you time" />
        <Image
          width={250}
          height={250}
          src={effort}
          alt="saves you Effort"
          className="mx-14 translate-y-8"
        />
        <Image width={250} height={250} src={easy} alt="easy to use" />
      </div>
    </div>
  );
}
