"use client";
import { usePathname } from "next/navigation";
import Search from "./SearchBox";
import Logo from "./Logo";

export default function NavBar({ isIntersecting, setIsIntersecting }) {
  const path = usePathname();
  return (
    <nav
      className={`sticky top-0 justify-between z-10 bg-white shadow-md transition-all duration-300 flex flex-row  items-center flex-wrap min-h-max w-full px-24 ${
        isIntersecting ? "py-6" : ""
      }`}>
      <Logo />
      {!isIntersecting && (
        <Search
          isIntersecting={isIntersecting}
          setIsIntersecting={setIsIntersecting}
        />
      )}

      <ul className="flex  flex-row font-semibold relative right-0 text-base uppercase items-center whitespace-nowrap ">
        {links.map((link, index) => (
          <li key={index} className="mx-3 p-2 cursor-pointer ">
            <a href={link[1]}> {link[0]}</a>
          </li>
        ))}
        <div className="w-0 h-5 border rounded border-main-blue "></div>
        <li className="mx-3 p-2 cursor-pointer underline underline-offset-2 ">
          Log In
        </li>
        <li className="cursor-pointer mx-2 rounded-3xl py-2 px-4 text-white bg-main-blue">
          Sign Up
        </li>
      </ul>
    </nav>
  );
}

const links = [
  ["Home", "/#home"],
  ["about", "/#about"],
  ["Feedbacks", "/#feedbacks"],
  ["Pharmacy", "/medicaments"],
];
