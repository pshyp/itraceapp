"use client";

import styles from "./genset-solutions.module.css";
import { useEffect, useState } from 'react';

const FuelMonitoringPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Reduced downtime and operational costs for generators.",
    "Prevention of unexpected generator malfunctions and breakdowns.",
    "Improved generator health and operational efficiency through continuous monitoring.",
    "Early detection of anomalies and potential issues for proactive maintenance.",
    "Real-time monitoring of critical parameters like fuel level, engine temperature, and oil pressure.",
    "Automated data collection and secure transmission of sensor data.",
    "Enhanced reliability and extended longevity of generator sets.",
    "Optimized maintenance schedules based on actual usage and condition, not just time.",
  ];

  const product = {
    name: "TRB140",
    tagline: "INDUSTRIAL RUGGED LTE GATEWAY",
    image: "/trb140.png",
    description:
      "TRB140 is an ultra-small, lightweight, and energy-efficient IoT device with mission-critical LTE Cat 4 and Gigabit Ethernet connectivity options. Linux environment offers a high degree of customization. This gateway is perfect for projects and applications where a single device must be upgraded with reliable and secure internet connectivity.",
    features: [
      "Compact LTE Cat 4 gateway for industrial automation.",
      "Gigabit Ethernet port ensures high-speed wired connection.",
      "Linux OS with SDK for advanced customization.",
      "Secure remote access and monitoring over VPNs and firewalls.",
      "DIN rail mounting option and rugged aluminum housing.",
      "Ideal for SCADA systems, smart metering, and industrial monitoring.",
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBenefitIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intro = document.querySelector(`.${styles.productIntro}`);
    if (intro) {
      setTimeout(() => {
        intro.classList.add(styles.show);
      }, 500);
    }
  }, []);

  return (
    <div className={styles.fuelMonitoringContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Predictive Maintenance with TRB140</h1>
        <div className={styles.benefitsSection}>
          <h2 className={styles.keyFeaturesTitle}>Key Benefits</h2>
          <ul className={styles.keyFeaturesList}>
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className={`${styles.keyFeatureItem} ${
                  index === visibleBenefitIndex ? styles.visible : styles.hidden
                }`}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className={styles.productShowcase}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={`${product.name} industrial LTE gateway`}
            className={styles.responsiveImage}
          />
        </div>
        <div className={styles.productInfo}>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.tagline}>{product.tagline}</p>
          <p className={`${styles.productIntro} ${styles.initialHidden}`}>
            {product.description}
          </p>
          <ul className={styles.featureList}>
            {product.features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FuelMonitoringPage;
