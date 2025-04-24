"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ftc921 from "../public/FTC921.webp";
import ftc961 from "../public/FTC961.png";
import ftc881 from "../public/FTC881.jpg";
import "./globals.css";


export default function Home() {
  const monitors = [ftc921, ftc961, ftc881];
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % monitors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      

      <main className="main-content no-padding">
       

        <h2 className="product-title">Fuel Monitors</h2>
        <p className="product-subtitle">Built for smart vehicle tracking.</p>
        <div className="image-wrapper">
          <Image
            src={monitors[index]}
            alt="Fuel Monitor Device"
            fill
            className="monitor-image"
            priority
          />
        </div>
        <div className="button-group">
          <button className="primary-button">Learn more</button>
     
        </div>
      </main>
    </>
  );
}
