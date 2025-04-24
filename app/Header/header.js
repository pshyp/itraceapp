"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./header.css"; // Make sure to import the CSS
import {
  FaInstagram,
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRemoteDropdownOpen, setIsRemoteDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const navRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsRemoteDropdownOpen(false); // Close dropdowns when menu closes
    setIsServicesDropdownOpen(false);
  };

  const toggleRemoteDropdown = (e) => {
    e.preventDefault(); // Prevent navigation if it were a real link
    setIsRemoteDropdownOpen(!isRemoteDropdownOpen);
    setIsServicesDropdownOpen(false); // Close other dropdown
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault(); // Prevent navigation if it were a real link
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsRemoteDropdownOpen(false); // Close other dropdown
  };

  // Effect for handling clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and click is outside the nav and outside the button
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    // Add listener if menu is open
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup: remove listener when component unmounts or menu closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Re-run effect when isMobileMenuOpen changes

  // Helper function for link clicks
  const handleLinkClick = () => {
    closeMobileMenu();
    // Add any other logic needed on link click
  };

  return (
    <header className="site-header">
      {/* Top Bar (no changes needed here) */}
      <div className="top-bar">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="contact-info flex-wrap md:flex-nowrap md:w-auto flex md:space-x-4">
            <FaPhone />
            <a href="tel:+254704777100" className="whitespace-nowrap">
              (+254) 704 777 100
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="tel:0722100506"
              className="whitespace-nowrap hidden md:inline"
            >
              0722 100 506
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="tel:0751100506"
              className="whitespace-nowrap hidden md:inline"
            >
              0751 100 506
            </a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:info@itraceservice.com" className="email-link">
              <FaEnvelope />
              <span>info@itraceservice.com</span>
            </a>
          </div>

          <div className="social-icons">
            {/* Social Icons Links (no changes needed) */}
            <Link href="https://facebook.com/" passHref legacyBehavior>
              <a
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </Link>
            <Link href="https://instagram.com/" passHref legacyBehavior>
              <a
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </Link>
            <Link href="https://twitter.com/" passHref legacyBehavior>
              <a aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://linkedin.com/" passHref legacyBehavior>
              <a
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </Link>
            <Link href="https://pinterest.com/" passHref legacyBehavior>
              <a
                aria-label="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest />
              </a>
            </Link>
            <Link href="https://tiktok.com/" passHref legacyBehavior>
              <a aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav bg-white py-3">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo (no changes needed) */}
          <Link href="/" passHref legacyBehavior>
            <a
              className="flex items-center shrink-0 site-logo"
              onClick={handleLinkClick}
            >
              <img
                src="/Logo.png"
                alt="iTraceAfrica Logo - Home"
                className="h-10 md:h-12"
              />
            </a>
          </Link>

          {/* Main Menu Nav */}
          <nav
            ref={navRef} // Add ref for outside click detection
            className={`main-menu md:flex space-x-6 lg:space-x-8 items-center ${
              isMobileMenuOpen
                ? "mobile-menu-active flex flex-col absolute top-full left-0 w-full bg-white z-50 p-4 shadow-lg" // Added z-50, shadow, mobile-menu-active class
                : "hidden"
            } md:static md:w-auto md:flex-row md:bg-transparent md:shadow-none md:p-0 md:top-auto md:left-auto md:z-auto`} // Ensure desktop overrides mobile styles
          >
            {/* Fuel Monitoring Link */}
            <Link href="/fuel-monitoring" passHref legacyBehavior>
              <a
                className="nav-link hover:text-red-600 font-medium"
                onClick={handleLinkClick}
              >
                Fuel Monitoring
              </a>
            </Link>

            {/* Remote Access Dropdown */}
            <div className="nav-item-with-dropdown">
              <a
                className="nav-link hover:text-red-600 flex items-center font-medium cursor-pointer"
                onClick={toggleRemoteDropdown} // Click handler for dropdown toggle
                aria-haspopup="true" // Accessibility
                aria-expanded={isRemoteDropdownOpen} // Accessibility
              >
                Remote Access Systems
                <svg
                  className={`nav-arrow w-4 h-4 ml-1 fill-current transition-transform duration-200 ${
                    isRemoteDropdownOpen ? "rotate-180" : ""
                  }`} // Rotate arrow when open
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </a>
              <div
                className={`dropdown-menu ${
                  isRemoteDropdownOpen ? "show" : ""
                }`}
              >
                {" "}
                {/* Conditionally add 'show' class */}
                <h6 className="dropdown-section-header">
                  iTrace Networks - Remote Access
                </h6>
                <Link
                  href="/remote-access-systems#genset"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link" onClick={handleLinkClick}>
                    Genset Solutions
                  </a>
                </Link>
                <Link
                  href="/remote-access-systems#solar"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link" onClick={handleLinkClick}>
                    Solar Installations Remote Monitoring
                  </a>
                </Link>
                <Link
                  href="/remote-access-systems#smart-farm"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link" onClick={handleLinkClick}>
                    Smart Farm Solutions
                  </a>
                </Link>
                <Link
                  href="/remote-access-systems#cold-storage"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link" onClick={handleLinkClick}>
                    Cold Storage Remote Monitoring (IOT)
                  </a>
                </Link>
              </div>
            </div>

            {/* Alarm Systems Link */}
            <Link href="/alarm-systems" passHref legacyBehavior>
              <a
                className="nav-link hover:text-red-600 font-medium"
                onClick={handleLinkClick}
              >
                Alarm Systems
              </a>
            </Link>

            {/* Other Services Dropdown */}
            <div className="nav-item-with-dropdown">
              <a
                className="nav-link hover:text-red-600 flex items-center font-medium cursor-pointer"
                onClick={toggleServicesDropdown} // Click handler for dropdown toggle
                aria-haspopup="true" // Accessibility
                aria-expanded={isServicesDropdownOpen} // Accessibility
              >
                Other Services
                <svg
                  className={`nav-arrow w-4 h-4 ml-1 fill-current transition-transform duration-200 ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`} // Rotate arrow when open
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </a>
              <div
                className={`dropdown-menu services-dropdown ${
                  isServicesDropdownOpen ? "show" : ""
                }`}
              >
                {" "}
                {/* Conditionally add 'show' class */}
                <Link
                  href="/other-services#gps-tracking"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link" onClick={handleLinkClick}>
                    GPS Tracking and Fleet Management{" "}
                    <span className="dropdown-annotation">
                      (techbarn & autotronix)
                    </span>
                  </a>
                </Link>
                <Link
                  href="/other-services#ai-dashcams"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link" onClick={handleLinkClick}>
                    AI Dashcams and MDVR{" "}
                    <span className="dropdown-annotation">
                      (techbarn & autotronix)
                    </span>
                  </a>
                </Link>
                <Link
                  href="/other-services#vehicle-audio"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link" onClick={handleLinkClick}>
                    Vehicle Audio & Multimedia Systems
                  </a>
                </Link>
                <Link
                  href="/other-services#autolocksmith"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link" onClick={handleLinkClick}>
                    Autolocksmith Services{" "}
                    <span className="dropdown-annotation">(autotronix)</span>
                  </a>
                </Link>
              </div>
            </div>

            {/* About Us Link */}
            <Link href="/about" passHref legacyBehavior>
              <a
                className="nav-link hover:text-red-600 font-medium"
                onClick={handleLinkClick}
              >
                About Us
              </a>
            </Link>

            {/* Reviews Link */}
            <Link href="/reviews" passHref legacyBehavior>
              <a
                className="nav-link hover:text-red-600 font-medium"
                onClick={handleLinkClick}
              >
                Reviews
              </a>
            </Link>

            {/* Blog Link */}
            <Link href="/blog" passHref legacyBehavior>
              <a
                className="nav-link hover:text-red-600 font-medium"
                onClick={handleLinkClick}
              >
                Blog
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={menuButtonRef} // Add ref for outside click detection
              className="mobile-menu-button"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"} // Dynamic label
              aria-expanded={isMobileMenuOpen} // Accessibility state
              aria-controls="main-menu-nav" // Points to the element it controls (add id="main-menu-nav" to the nav element if needed, though ref is used here)
              onClick={toggleMobileMenu}
            >
              {/* Animated Hamburger/Close Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  /> // Close (X) icon
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  /> // Hamburger icon
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
