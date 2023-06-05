import Image from "next/image";
import React from "react";

export default function Review({ review: { name, review, image, position } }) {
  return (
    <div className=" py-8">
      <div className="relative opacity-100 rounded-tl-[40px] p-10 shadow-lg z-10 shadow-slate-600  rounded-br-[40px] w-3/4 mx-auto bg-gray-200 flex flex-row items-center">
        <Image
          src={image}
          width={100}
          height={100}
          className="rounded-sm shadow m-4"
        />
        <div className="ml-8">
          <p className="text-base leading-snug tracking-tight">{review}</p>
          <p className="text-sm font-semibold mt-5">
            {name} - <i className="font-light">{position}</i>
          </p>
        </div>
      </div>
      <div className="mx-auto -mt-28 mr-20 bg-slate-700 h-40 z-0 w-3/4"></div>
    </div>
  );
}
