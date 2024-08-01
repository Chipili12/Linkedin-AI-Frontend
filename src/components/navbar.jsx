"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logo, menu_icon } from "/public/assets/index";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isOpen);
  };

  const MenuItem = ({ href, children }) => (
    <Link
      className={`link ${pathname === href ? "text-red-300" : "text-gray-200"}`}
      href={href}
    >
      <li className="py-2 bg-white bg-opacity-0 hover:bg-opacity-10 text-center px-3">
        {children}
      </li>
    </Link>
  );

  const links = [
    { href: "/", label: "INICIO" },
    { href: "/features", label: "CARACTERÍSTICAS" },
    { href: "/presentation", label: "PRESENTACIÓN" },
    { href: "/contact", label: "CONTACTO" },
  ];

  const LinkItem = ({ href, label }) => (
    <Link
      className={`${pathname === href ? "text-red-300" : "text-gray-200"} `}
      href={href}
    >
      {label}
    </Link>
  );

  return (
    <header className="border-b border-slate-500 pb-4 pt-5 flex items-center px-3 justify-between top-0 z-10 right-0 left-0 text-lg">
      <Link href="/" className="">
        <Image src={logo} alt="logo" className="ms-10" width={200}></Image>
      </Link>

      <nav className="pe-6">
        <div className="gap-10 hidden lg:flex">
          {links.map((link) => (
            <LinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
        <div className="relative block lg:hidden">
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
            <ul
              className="absolute mt-1 shadow-lg right-0 transform text-gray-200   z-10 bg-slate-500 bg-opacity-50 rounded-lg"
              onClick={toggleMenu}
            >
              <MenuItem href="/">INICIO</MenuItem>
              <MenuItem href="/features">CARACTERÍSTICAS</MenuItem>
              <MenuItem href="/about">PRESENTACIÓN</MenuItem>
              <MenuItem href="/contact">CONTACTO</MenuItem>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
