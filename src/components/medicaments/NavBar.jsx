import logo from "/public/logo.png";
import Search from "./searchBox";
import Image from "next/image";
import Logo from "../shared/Logo";

export default function NavBar({ isIntersecting, setIsIntersecting }) {
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
