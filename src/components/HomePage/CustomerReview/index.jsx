import React from "react";
import userImg from "/public/user.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Review from "./Review";

export default function index() {
  return (
    <div
      id="feedback"
      className="bg-gray-100 p-8  rounded  text-secondary-blue  m-10">
      <h1 className="text-2xl font-bold text-center my-6 ">
        Customer Review’s & Feedback
      </h1>

      <Swiper pagination={true} modules={[Pagination]} className="w-3/4">
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const reviews = [
  {
    image: userImg,
    name: "default name",
    position: "pharmacist",
    review:
      "Beautiful website with elegant UI Design, I found it very useful! you can search for the medicines you’re looking for just in a few minutes at the nearest pharmacy , i really Recommend it!!",
  },
  {
    image: userImg,
    name: "default name",
    position: "pharmacist",
    review:
      "Beautiful website with elegant UI Design, I found it very useful! you can search for the medicines you’re looking for just in a few minutes at the nearest pharmacy , i really Recommend it!!",
  },
  {
    image: userImg,
    name: "default name",
    position: "pharmacist",
    review:
      "Beautiful website with elegant UI Design, I found it very useful! you can search for the medicines you’re looking for just in a few minutes at the nearest pharmacy , i really Recommend it!!",
  },
];
