"use client";

import Image from "next/image";
import Link from "next/link";
import useScrollReveal from "./hooks/useScrollReveal";

// ——— Import your product images (swap for real files) ———
import fmc150 from "../public/fmc150.webp";
import fmc250 from "../public/fmc250.webp";
import fmm250 from "../public/fmm250.webp";

function SectionBlock({ title, subtitle, imgSrc, imgAlt, ctaHref = "/contact" }) {
  return (
    <section className="section-block">
      <h1 className="product-title">{title}</h1>
      <p className="product-subtitle">{subtitle}</p>

      <div className="image-wrapper">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="monitor-image"
          sizes="(max-width: 640px) 320px, 280px"
          priority
        />
      </div>

      <div className="button-group">
        <Link href={ctaHref}>
          <button className="primary-button">Get Quote</button>
        </Link>
        <Link href={`/products/${title.toLowerCase()}`}>
          <button className="secondary-button">View Specs</button>
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  // Initialise the scroll‑reveal once on mount
  useScrollReveal();

  return (
    <div className="main-content">
      <SectionBlock
        title="FMC150"
        subtitle="Compact GNSS Tracker for Vehicles"
        imgSrc={fmc150}
        imgAlt="FMC150 product photo"
      />

      <SectionBlock
        title="FMC250"
        subtitle="Advanced 4G LTE Vehicle Tracker"
        imgSrc={fmc250}
        imgAlt="FMC250 product photo"
      />

      <SectionBlock
        title="FMM250"
        subtitle="OBDII Plug‑and‑Play Tracker with BLE"
        imgSrc={fmm250}
        imgAlt="FMM250 product photo"
      />
    </div>
  );
}
