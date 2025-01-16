"use client";

// NextJS
import Image from "next/image";
import Link from "next/link";

// React
import { useState } from "react";

// Utility to create links
const renderNavLinks = (links) => {
  return links.map((link) => (
    <li key={link}>
      <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
        {link}
      </Link>
    </li>
  ));
};

const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

const Nav = () => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    animation: "",
  });

  const handleOpenMenu = () => {
    setMenuState({
      isOpen: true,
      animation: "slide-in-right",
    });
  };

  const handleCloseMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      animation: "slide-out-right",
    }));
  };

  return (
    <nav>
      {/* Logo */}
      <Image
        src="/assets/images/logo.svg"
        width={45}
        height={28}
        alt="Wired Up logo"
        className="logo"
      />

      {/* Mobile Nav - Open Menu Button */}
      <button
        className="open-menu-btn"
        onClick={handleOpenMenu}
        aria-expanded={menuState.isOpen ? "true" : "false"} // Indicates menu state
        aria-controls="mobile-menu" // Refers to the sliding menu element
      >
        <span className="sr-only">Open Menu</span>
      </button>

      {/* Mobile Nav - Sliding Menu */}
      <div
        id="mobile-menu"
        className={`slider ${menuState.animation}`}
        aria-hidden={menuState.isOpen ? "false" : "true"} // Indicates whether the menu is open or closed
      >
        <div className="slider__filter" aria-hidden="true"></div>
        <div className="slider__content">
          <button
            className="close-menu-btn"
            onClick={handleCloseMenu}
            aria-label="Close Menu" // Adds clear label for screen readers
          >
            <span className="sr-only">Close Menu</span>
          </button>

          <ul className="slider__menu">{renderNavLinks(navLinks)}</ul>
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="desktop-nav">{renderNavLinks(navLinks)}</ul>
    </nav>
  );
};

export default Nav;
