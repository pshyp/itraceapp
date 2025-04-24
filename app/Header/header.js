'use client'
import React, { useState } from "react";
import Link from "next/link";
import "./header.css";
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="site-header">
      {/* Top Bar */}
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
            <a href="tel:0751100506" className="whitespace-nowrap hidden md:inline">
              0751 100 506
            </a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:info@itraceservice.com" className="email-link">
              <FaEnvelope />
              <span>info@itraceservice.com</span>
            </a>
          </div>

          <div className="social-icons">
            <Link href="https://facebook.com/" passHref legacyBehavior >
              <a aria-label="Facebook">
                <FaFacebookF />
              </a>           
            </Link>
            <Link href="https://instagram.com/" passHref legacyBehavior>
              <a aria-label="Instagram">
                <FaInstagram />
              </a>
            </Link>
            <Link href="https://twitter.com/" passHref legacyBehavior>
              <a aria-label="Twitter">
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://linkedin.com/" passHref legacyBehavior>
              <a aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </Link>
            <Link href="https://pinterest.com/" passHref legacyBehavior>
              <a aria-label="Pinterest">
                <FaPinterest />
              </a>
            </Link>
            <Link href="https://tiktok.com/" passHref legacyBehavior>
              <a aria-label="TikTok">
                <FaTiktok />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav bg-white py-3 ">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center shrink-0 site-logo">
                <img
                  src="/Logo.png"
                  alt="iTraceAfrica Logo - Home"
                  className="h-10 md:h-12"
                />
              </a>
            </Link>        
          {/* Navigation */}
          <nav
            className={`main-menu md:flex space-x-6 lg:space-x-8 items-center ${
              isMobileMenuOpen
                ? "flex flex-col absolute top-full left-0 w-full bg-white z-10 p-4"
                : "hidden"
            } md:static md:w-auto md:flex-row`}
          >
            <Link href="/fuel-monitoring" passHref legacyBehavior>
              <a className="nav-link hover:text-red-600 font-medium">
                Fuel Monitoring
              </a>
            </Link>


            <div className="nav-item-with-dropdown ">
              <a className="nav-link hover:text-red-600 flex items-center font-medium">
                Remote Access Systems
                <svg
                  className="nav-arrow w-4 h-4 ml-1 fill-current "
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </a>
              <div className="dropdown-menu">
                <h6 className="dropdown-section-header ">
                  iTrace Networks - Remote Access
                </h6>
                <Link
                  href="/remote-access-systems#genset"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link">Genset Solutions</a>
                </Link>
                <Link
                  href="/remote-access-systems#solar"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link">
                    Solar Installations Remote Monitoring
                  </a>
                </Link>
                <Link
                  href="/remote-access-systems#smart-farm"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link">Smart Farm Solutions</a>
                </Link>
                <Link
                  href="/remote-access-systems#cold-storage"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link">
                    Cold Storage Remote Monitoring (IOT)
                  </a>
                </Link>
              </div>
            </div>

            <Link href="/alarm-systems" passHref legacyBehavior>
              <a className="nav-link hover:text-red-600 font-medium">
                Alarm Systems
              </a>
            </Link>           

            <div className="nav-item-with-dropdown ">
              <a className="nav-link hover:text-red-600 flex items-center font-medium">
                Other Services                
                <svg
                  className="nav-arrow w-4 h-4 ml-1 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </a>
              <div className="dropdown-menu services-dropdown">
                <Link
                  href="/other-services#gps-tracking"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link">
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
                  <a className="dropdown-link">
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
                  <a className="dropdown-link">
                    Vehicle Audio & Multimedia Systems
                  </a>
                </Link>
                <Link
                  href="/other-services#autolocksmith"
                  passHref
                  legacyBehavior
                >
                  <a className="dropdown-link">
                    Autolocksmith Services{" "}
                    <span className="dropdown-annotation">(autotronix)</span>
                  </a>
                </Link>
              </div>
            </div>

            <Link href="/about" passHref legacyBehavior>
              <a className="nav-link hover:text-red-600 font-medium">
                About Us
              </a>
            </Link>

            <Link href="/reviews" passHref legacyBehavior>
              <a className="nav-link hover:text-red-600 font-medium">Reviews</a>
            </Link>
            <Link href="/blog" passHref legacyBehavior>
              <a className="nav-link hover:text-red-600 font-medium ">Blog</a>
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              className="mobile-menu-button"
              aria-label="Open Menu"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
       </div>
      </div>
    </header>
  );
};

export default Header;
