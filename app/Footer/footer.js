// Footer.js
"use client";

import React from "react";
import Link from "next/link";
import "./footer.css"; // Import your footer CSS

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-widgets">
          <div className="widget">
            <h3>About Us</h3>
            <p>
              Your company description goes here. Tell your visitors about your
              mission, values, and what makes you unique.
            </p>
            {/* You can add more about us details here */}
          </div>
          <div className="widget">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/" passHref legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref legacyBehavior>
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref legacyBehavior>
                  <a>Contact Us</a>
                </Link>
              </li>
              {/* Add more quick links as needed */}
            </ul>
          </div>
          <div className="widget">
            <h3>Contact Information</h3>
            <p>
              Address: 123 Main Street, Anytown, Country
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Email: info@example.com
            </p>
            {/* Add social media links or other contact info */}
          </div>
          <div className="widget logo-widget">
            <h3>Our Partners</h3>
            <img
              src="/LogoMobi.jpeg"
              alt="Partner Logo"
              className="partner-logo"
            />
            {/* You can add more partner logos or information here */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          {/* Add any copyright information or additional links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;