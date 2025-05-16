"use client";

import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="intro-text">Reach out to iTrace Africa through any of the channels below.</p>

        <div className="contact-section">
          <h2>Phone Numbers</h2>
          <div className="contact-row">
            <FaPhone className="icon" />
            <a href="tel:+254704777100">(+254) 704 777 100</a>
          </div>
          <div className="contact-row">
            <FaPhone className="icon" />
            <a href="tel:0722100506">0722 100 506</a>
          </div>
        </div>

        <div className="contact-section">
          <h2>Email</h2>
          <div className="contact-row">
            <FaEnvelope className="icon" />
            <a href="mailto:info@itraceafrica.com">info@itraceafrica.com</a>
          </div>
        </div>

        <div className="contact-section">
          <h2>Social Media</h2>
          <div className="social-links">
            <a
              href="https://www.facebook.com/itrace.africa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://tiktok.com/@itraceafricatelematics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding: 2rem 1rem;
          background-color: #f9f9f9;
          min-height: 100vh;
        }

        .container {
          max-width: 720px;
          margin: 0 auto;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .intro-text {
          margin-bottom: 2rem;
          color: #555;
        }

        .contact-section {
          margin-bottom: 2rem;
        }

        .contact-section h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #222;
        }

        .contact-row {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .icon {
          color: #444;
          margin-right: 10px;
          font-size: 1.2rem;
        }

        a {
          text-decoration: none;
          color: #0070f3;
          transition: color 0.2s;
        }

        a:hover {
          color: #005bb5;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          font-size: 1.5rem;
        }

        .social-links a {
          color: #333;
          transition: transform 0.2s;
        }

        .social-links a:hover {
          transform: scale(1.2);
          color: #0070f3;
        }

        @media (max-width: 600px) {
          .container {
            padding: 1.5rem;
          }

          h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactPage;