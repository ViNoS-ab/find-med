import Image from "next/image";
import React from "react";

export default function Product({ product: { name, location, image } }) {
  return (
    <div className="px-3 m-4 cursor-pointer py-6 w-72 flex flex-col items-center justify-center bg-gray-200 rounded-md">
      <Image src={image} alt="dwa" className="rounded-md" />
      <h3 className="text-secondary-blue font-semibold text-base">{name}</h3>
      <h3 className="text-secondary-blue text-sm ">-{location}-</h3>
    </div>
  );
}
