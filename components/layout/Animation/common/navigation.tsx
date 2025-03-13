"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "@/components/layout/Animation/common/button";
// (Optional) import your custom animation helper
// import { animateNavLink } from "@/animations/navAnimations";

interface NavLink {
  label: string;
  href: string;
}

const desktopLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Responsibility", href: "/responsibility" },
];

const mobileLinks: NavLink[] = [
  { label: "Home", href: "/" },
  ...desktopLinks,
  { label: "Contact", href: "/contact" },
];

const Navigation: React.FC = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Example: animate the desktop nav links on mount.
  useEffect(() => {
    if (navRef.current) {
      // Animate each nav link for a smooth entrance
      gsap.from(navRef.current.querySelectorAll(".nav-link"), {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, []);

  // Toggle mobile menu on hamburger click
  const toggleMobileMenu = () => setMobileActive((prev) => !prev);

  return (
    <nav
      ref={navRef}
      className="theme__nav__transitioning nav__mobile__not__active theme-nav-dark fixed top-0 left-0 w-full z-50"
    >
      <div className="nav-links">
        <div className="nav-links-wrapper flex items-center justify-between p-4">
          {/* Logo */}
          <a href="/" className="logo" data-hover="logo">
            {/* Insert your SVG logos (one or more) here */}
            <svg
              width="62"
              height="49"
              viewBox="0 0 62 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M61.17 13.95C...Z" fill="black" />
            </svg>
          </a>

          {/* Desktop Navigation – hidden on mobile */}
          <ul className="ul-desktop hidden md:flex space-x-4">
            {desktopLinks.map((link, index) => (
              <li key={index} className="btn btn-link nav-link">
 <a href={link.href} className="btn-click relative flex items-center">   <AnimatedButton text={link.label} variant="primary"  /></a>
             
               
              </li>
            ))}
          </ul>

          {/* Right corner – Contact button and Hamburger */}
          <div className="wrap-right-corner flex items-center space-x-4">
            <div className="hidden md:block">
               <AnimatedButton text="Contact" variant="primary"  />
            </div>
            {/* Hamburger visible on mobile */}
            <div className="hamburger-wrap md:hidden">
              <div className="hamburger cursor-pointer" onClick={toggleMobileMenu}>
                <div className="hamburger-bar w-6 h-0.5 bg-current my-1"></div>
                <div className="hamburger-bar w-6 h-0.5 bg-current my-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {mobileActive && (
        <div className="modal-nav-mobile fixed inset-0 z-50 ">
          <div className="modal-block bg-white rounded-lg p-4 m-4">
            <ul className="ul-mobile flex flex-col space-y-4">
              {mobileLinks.map((link, index) => (
                <li key={index} className="nav-link">
                  <a href={link.href} onClick={() => setMobileActive(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
