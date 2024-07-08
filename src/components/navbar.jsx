"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logo, menu_icon } from "@/../public/assets/index";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isOpen);
  };

  return (
    <header className=" border-b border-slate-500 pb-3 mt-6 flex items-center px-3 justify-between absolute top-0 z-10 right-0 left-0 text-lg">
      <Link href="/" className="">
        <Image src={logo} alt="logo" className="ms-10" width={200}></Image>
      </Link>

      <nav className="flex gap-10 items-center pe-10">
        <Link
          className={`link ${
            pathname === "/" ? "text-red-300" : "text-gray-200"
          }`}
          href="/"
        >
          <p>HOME</p>
        </Link>

        <Link
          className={`link ${
            pathname === "/features" ? "text-red-300" : "text-gray-200"
          }`}
          href="/features"
        >
          <p>FEATURES</p>
        </Link>

        <Link
          className={`link ${
            pathname === "/contact" ? "text-red-300" : "text-gray-200"
          }`}
          href="/contact"
        >
          <p>ABOUT US</p>
        </Link>

        <Link
          className={`link ${
            pathname === "/contact" ? "text-red-300" : "text-gray-200"
          }`}
          href="/contact"
        >
          <p>CONTACT US</p>
        </Link>

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="bg-white bg-opacity-0 hover:bg-opacity-10 text-white rounded"
          >
            <Image
              src={menu_icon}
              alt="menu_icon"
              className="object-contain m-2"
              height={25}
            ></Image>
          </button>

          {isOpen && (
            <ul className="absolute mt-1 rounded shadow-lg w-40 right-0 left-0 transform -translate-x-1/2 text-gray-200 text-right">
              <li className="py-2 px-4 bg-white bg-opacity-0 hover:bg-opacity-10 cursor-pointer">
                Option 1
              </li>
              <li className="py-2 px-4 bg-white bg-opacity-0 hover:bg-opacity-10 cursor-pointer">
                Option 2
              </li>
              <li className="py-2 px-4 bg-white bg-opacity-0 hover:bg-opacity-10 cursor-pointer">
                Contactanos
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
