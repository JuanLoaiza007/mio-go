"use client";
import { NavbarState } from "@/states/NavbarState";

export default function Navbar() {
  const navbarState = NavbarState();

  const handleToggleMenu = () => {
    navbarState.toggleMenu();
  };

  return (
    <nav className="flex flex-row navbar bg-blue-ribbon-800 text-white p-4 items-center">
      <button
        className={`p-2 mx-2 border-white border-2 rounded-xl hover:ease-in-out hover:duration-100 user-select-none md:hover:bg-blue-ribbon-900`}
        onClick={handleToggleMenu}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/icons/navbar/menu-burger-white.png"
          className="w-4"
          alt="menu"
        />
      </button>
      <h1 className="mx-2 font-bold text-2xl">MIO Go</h1>
    </nav>
  );
}
