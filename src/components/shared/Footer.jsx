import Link from "next/link";
import Logo from "./Logo";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full justify-between  items-start flex flex-wrap text-white  bg-[#132742] pb-8 pt-16 pl-24 pr-14">
      <div className="-mt-4">
        <Logo />
        <div className=" pl-12 p-5 tracking-wider">
          <p className="font-light my-4">
            The ultimate destination for <br /> all of your medical needs
          </p>

          <p className="p-3 pl-0 font-semibold">Follow us</p>
          <div className="flex space-x-5">
            <FaFacebookF className="h-5 cursor-pointer" />
            <FaInstagram className="h-5 cursor-pointer" />
            <FaTwitter className="h-5 cursor-pointer" />
            <FaLinkedin className="h-5 cursor-pointer" />
          </div>
        </div>
      </div>
      {footerLinks.map((link, index) => (
        <Links key={index} links={link.links} title={link.title} />
      ))}
    </footer>
  );
}

const Links = ({ links, title }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg ">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li className="p-2 font-light text-base" key={index}>
            {Array.isArray(link) ? (
              <Link href={link[1]}>{link[0]}</Link>
            ) : (
              <p>{link}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const footerLinks = [
  {
    title: "Explore",
    links: [
      ["Home", "/#"],
      ["about", "/#about"],
      ["Feedbacks", "/#feedbacks"],
      ["Pharmacy", "/medicaments"],
    ],
  },
  {
    title: "About Us",
    links: ["Who Are We", "Our Vision", "Terms And Conditions", "FAQ"],
  },
  {
    title: "Contact Us",
    links: [
      "02, Rue Didouche Mourad, Alger, Algérie",
      ["contact@findmed.dz", "mailto:contact@findmed.dz"],
      "+213 70 52 54 47",
    ],
  },
];
