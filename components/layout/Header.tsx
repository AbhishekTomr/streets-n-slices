import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-8 shadow-2xs pb-4">
      <nav className="flex gap-8 text-gray-600 font-semibold items-center">
        <Link href="/" className={`text-primary font-semibold text-2xl`}>
          Streets & Slices
        </Link>
        <Link href={"/home"} className="nav-link">
          Home
        </Link>
        <Link href={"/menu"} className="nav-link">
          Menu
        </Link>
        <Link href={"/about"} className="nav-link">
          About
        </Link>
        <Link href={"/contact"} className="nav-link">
          Contact
        </Link>
      </nav>
      <nav className="flex gap-4 text-gray-600 font-semibold items-center">
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="nav-link bg-primary text-white px-6 py-2 rounded-full"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
