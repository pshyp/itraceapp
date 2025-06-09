// Footer.js
"use client";

import React from "react";
import Link from "next/link";
import "./footer.css"; // Import your footer CSS
import { FaHome, FaMapMarkerAlt, FaPhone, FaMobileAlt, FaEnvelope } from "react-icons/fa"; // Import relevant icons

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-widgets">
          <div className="widget">
            <h3>Head Office</h3>
            <p>
              <FaMapMarkerAlt className="icon" /> Limuru Rd, Opp. Jamhuri High
              School, Nairobi
              <br />
              <FaPhone className="icon" /> (+254) 704 777 100
              <br />
              <FaMobileAlt className="icon" /> 0722 100 506, 0751 100 506
              <br />
              <FaEnvelope className="icon" /> info@itraceafrica.com
            </p>
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
                <Link href="/fuel-monitoring" passHref legacyBehavior>
                  <a>Fuel Monitoring</a>
                </Link>
              </li>
              <li>
                <Link href="/remote-access-systems" passHref legacyBehavior>
                  <a>Remote Access Systems</a>
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
          <div className="widget logo-widget">
            <h3>Our Partners</h3>
            <div className="partner-logos"> {/* Add a container for better styling */}
             
              <img
                src="/communicationsauthority.png"
                alt="Communications Authority Partner Logo"
                className="partner-logo"
              />
              <img
                src="/EMKFKenya.png"
                alt="EMFK Kenya Partner Logo"
                className="partner-logo"
              />
              <img
                src="/KCIC.png"
                alt="KCIC Partner Logo"
                className="partner-logo"
              />
              <img
                src="/Mojaev.png"
                alt="Mojaev Partner Logo"
                className="partner-logo"
              />
              <img
                src="/NetaEV.png"
                alt="Neta EV Partner Logo"
                className="partner-logo"
              />
              <img
                src="/stecolcorp.png"
                alt="Stecolcorp Partner Logo"
                className="partner-logo"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Itrace Africa. All rights reserved.</p>
          {/* Add any copyright information or additional links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;