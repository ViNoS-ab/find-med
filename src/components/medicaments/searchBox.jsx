import { useCallback, useEffect, useRef, useState } from "react";
import style from "./searchBox.module.css";

export default function searchBox({ isIntersecting, setIsIntersecting }) {
  const searchRef = useRef(null);

  const cb = entries => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting);
      isIntersecting && !entry.isIntersecting && setIsIntersecting(false);
    });
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY < 300) setIsIntersecting(true);
  }, []);
  useEffect(() => {
    const listener = window.addEventListener("scroll", handleScroll);
    return removeEventListener("scroll", listener);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(cb, { rootMargin: "-140px" });
    observer.observe(searchRef.current);
    return () => searchRef.current && observer.unobserve(searchRef.current);
  });
  useEffect(() => {
    searchRef.current?.classList.add(
      isIntersecting ? style.animateReverseContain : style.animateContain
    );
  }, [isIntersecting]);
  return (
    <span
      className={`relative  ${
        isIntersecting && "ml-5 mt-14 "
      } flex items-cente w-4/6 max-w-xl justify-center  rounded-lg p-3`}
      ref={searchRef}>
      <input
        type="text"
        className="w-3/4 p-3 pl-6 outline-main-blue rounded-l-lg bg-gray-200 placeholder:text-secondary-blue"
        placeholder="Search for Medicines"
      />
      <button className="p-3 w-1/4 rounded-r-lg bg-main-blue text-white">
        Search
      </button>
    </span>
  );
}
