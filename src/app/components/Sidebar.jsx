"use client";
import "./Sidebar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavbarState } from "@/states/NavbarState";
import { capitalizeFirstLetter } from "@/utils/capitalization";

export default function Sidebar() {
  const pages = [["saldo", "/saldo"]];
  const navbarState = NavbarState();
  const pathname = usePathname();

  return (
    <>
      {navbarState.isMenuOpen && (
        <div className="sidebar">
          {pages.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              className={pathname === href ? "link-active" : "link-unactive"}
            >
              {capitalizeFirstLetter(name)}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
