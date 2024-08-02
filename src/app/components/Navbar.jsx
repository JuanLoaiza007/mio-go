"use client";
import "./Navbar.css";
import { NavbarState } from "@/states/NavbarState";

export default function Navbar() {
  const navbarState = NavbarState();

  const handleToggleMenu = () => {
    navbarState.toggleMenu();
  };

  return (
    <nav>
      <button className="btn btn-menu-ligth" onClick={handleToggleMenu}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/icons/navbar/menu-burger-white.png" alt="menu" />
      </button>
      <h1 className="navbar-brand">MIO Go</h1>
    </nav>
  );
}
