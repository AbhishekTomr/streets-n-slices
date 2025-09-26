import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-5">
      <Link href="/" className={`text-primary font-semibold text-4xl`}>
        Street n Spices
      </Link>
      <nav className="flex gap-8 text-gray-600 font-semibold items-center">
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
        <Link
          href={"/login"}
          className="nav-link bg-primary text-white px-6 py-2 rounded-full"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
