import Image from "next/image";
import logo from "/public/logo.png";

export default function Logo({ textStlye }) {
  return (
    <a href="/#home" className={"flex flex-row items-center "}>
      <Image src={logo} width={40} height={40} alt="Find-Med logo" />
      <h1 className={"ml-2 font-bold text-2xl " + textStlye}>FINDMED</h1>
    </a>
  );
}
