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
      <div className="top-bar ">
        <div className="container flex items-center justify-between">
          <div className="contact-info flex items-center justify-center ">
            <FaPhone />
            <a href="tel:+254704777100" className="whitespace-nowrap">
              (+254) 704 777 100
            </a>
            <span className="hidden px-2">|</span>
            <a href="tel:0722100506" className="whitespace-nowrap hidden ">
              0722 100 506
            </a>
            <span className="hidden px-2">|</span>
            
            
           
            
            <a href="mailto:info@itraceservice.com" className="email-link px-2">
              <FaEnvelope />
              <span>info@itraceafrica.com</span>
            </a>
          </div>

          <div className="social-icons">
            <Link href="https://www.facebook.com/itrace.africa"  target="_blank" rel="noopener noreferrer">
              <a
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </Link>
            <Link href="http://tiktok.com/@itraceafricatelematics"  target="_blank" rel="noopener noreferrer">
              <a aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="container">
        {/* Logo (no changes needed) */}
          <Link href="/" passHref legacyBehavior>
            <a
              className="flex items-center site-logo"
              onClick={handleLinkClick}
            >
              <img
                src="/LogoMobi.jpeg"
                alt="iTraceAfrica Logo - Home"
                className="h-10"
              />
            </a>
          </Link>

          {/* Main Menu Nav */}
          <nav
            ref={navRef} // Add ref for outside click detection
            className={`main-menu ${
              isMobileMenuOpen ? "mobile-menu-active" : "hidden"
            }`}
          >
          {/* Fuel Monitoring Link */}
          <Link href="/fuel-monitoring" className="nav-link" onClick={handleLinkClick}>
            Fuel Monitoring
           
          </Link>
          {/* Blog Link */}
 <Link href="/blog" className="nav-link" onClick={handleLinkClick}>
 Blog
 </Link>
 {/* About Us Link */}

          

            {/* Remote Access Dropdown */}
            <div className="nav-item-with-dropdown">
              <a
                className="nav-link"
                onClick={toggleRemoteDropdown} // Click handler for dropdown toggle
                aria-haspopup="true" // Accessibility
                aria-expanded={isRemoteDropdownOpen} // Accessibility
              >
                Remote Access Systems
                <svg
                  className={`nav-arrow ${
                    isRemoteDropdownOpen ? "rotate-180" : ""
                  }`}
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
                <h6 className="dropdown-section-header">
                  iTrace Networks - Remote Access
                </h6>
                <Link href="/genset-solutions" className="dropdown-link" onClick={handleLinkClick}>
                  
                  Genset Solutions
                
                </Link>
                <Link href="/solar-installations-remote-monitoring" className="dropdown-link" onClick={handleLinkClick}>
                  
                  Solar Installations Remote Monitoring
               
                </Link>
                <Link href="/smart-farm-solutions" className="dropdown-link" onClick={handleLinkClick}>
                  
                  Smart Farm Solutions
                
                </Link>
                <Link href="/cold-storage-remote-monitoring-iot" className="dropdown-link" onClick={handleLinkClick}>
                  Cold Storage Remote Monitoring (IOT)
                </Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="nav-item-with-dropdown">
              <a
                className="nav-link"
                onClick={toggleServicesDropdown} // Click handler for dropdown toggle
                aria-haspopup="true" // Accessibility
                aria-expanded={isServicesDropdownOpen} // Accessibility
              >
                Services
                <svg
                  className={`nav-arrow ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </a>
              <div
                className={`dropdown-menu ${
                  isServicesDropdownOpen ? "show" : ""
                }`}
              >
                <h6 className="dropdown-section-header">
                  iTrace Services - Industry Leader
                </h6> 
                <Link href="/fuel-monitoring" className="dropdown-link" onClick={handleLinkClick}>
                  
                  Fuel Monitoring 
                
                </Link>
                <Link href="/remote-access-systems" className="dropdown-link" onClick={handleLinkClick}>
                 Remote Access Systems
                </Link>
                <Link href="/asset-tracking" className="dropdown-link" onClick={handleLinkClick}>
                  Asset Tracking Solutions
                </Link> 
                <Link href="/alarm-systems" className="dropdown-link" onClick={handleLinkClick}>
                 Alarm System
                </Link> 
              </div>
            </div>

 {/* About Us Link */}
            <Link href="/about" className="nav-link" onClick={handleLinkClick}>About Us</Link>

            {/* Contact Link */}
            <Link href="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={toggleMobileMenu}
            className="menu-button"
            aria-label="Toggle mobile menu"
          >
            <span className="text-black">☰</span> {/* Hamburger icon */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
