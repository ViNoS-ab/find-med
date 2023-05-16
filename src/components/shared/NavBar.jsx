"use client";

import Image from "next/image";
import logo from "/public/logo.png";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const links = ["home", "about", "service", "feedback"];

export default function NavBar() {
  const [text, setText] = useState("");
  const [section, setSection] = useState("#home");

  return (
    <nav className="fixed top-0 flex flex-row justify-between items-center text-slate-300 bg-slate-950 w-full px-16 py-4  flex-wrap min-h-max">
      <a
        href="/#home"
        onClick={() => setSection("#home")}
        className="flex flex-row items-center ">
        <Image src={logo} width={40} height={40} alt="Find-Med logo" />
        <h1 className="ml-2 font-bold text-2xl text-white">FIND-MED</h1>
      </a>
      <div className="flex flex-row items-centers flex-wrap ">
        <span className="text-white flex flex-row items-center mr-7 bg-slate-700 rounded-lg p-1 border border-slate-400 my-2">
          <BsSearch className="m-1 cursor-pointer" />

          <input
            className="outline-none bg-transparent placeholder:text-white placeholder:font-extralight ml-2 "
            type="text"
            placeholder="Search"
            onChange={e => setText(e.target.value)}
          />
        </span>

        <ul className="flex flex-row text-base uppercase items-center whitespace-nowrap ">
          {links.map(link => (
            <li
              className={` ${
                section === `#${link}` ? "bg-slate-800 " : ""
              } transition duration-[300ms]  mx-3 hover:bg-slate-800 hover:border-slate-400 border border-transparent rounded-lg p-2 `}>
              <a
                onClick={() => setSection(`#${link}`)}
                key={link}
                href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
          <li className="mx-3 bg-blue-700 rounded-lg p-2 border hover:bg-blue-400 hover:border-blue-400 border-blue-700 cursor-pointer">
            Sign Up
          </li>
          <li className="cursor-pointer transition duration-[300ms]  mx-3 hover:bg-slate-800 hover:border-slate-400 border border-transparent rounded-lg p-2">
            Log In
          </li>
        </ul>
      </div>
    </nav>
  );
}
