import React from "react";
import Product from "./Product";
import dwa from "/public/dwa.jpg";

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
export default function index() {
  return (
    <section className="bg-gray-100 md:p-12 p-2 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-secondary-blue text-cente my-6 ">
        Browse medicines & health products
      </h1>
      <div className="flex flex-wrap justify-center items-center p-5">
        {data.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </section>
  );
}
