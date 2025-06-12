"use client";

import styles from "./fuel-monitoring.module.css";
import { useEffect, useState } from "react";

const FuelMonitoringPage = () => {
  const [visibleBenefitIndices, setVisibleBenefitIndices] = useState([]); // Changed to an array for multiple visible benefits

  const benefits = [
    { text: "Reduced cost of fuel.", icon: "💰" },
    { text: "Optimize route and monitor driver behavior.", icon: "🗺️" },
    { text: "Prevent fuel theft with advanced fuel sensors.", icon: "🔒" },
    { text: "Detect and prevent fuel theft with real-time alerts.", icon: "🚨" },
    { text: "Access detailed reports on fuel consumption and vehicle performance.", icon: "📊" },
  ];

  const imageFiles = [
    { src: "/fmc125.webp", name: "FMC125", description: "FMC125 fuel monitoring device" },
    { src: "/tat140.webp", name: "TAT140", description: "TAT140 fuel monitoring device" },
    { src: "/GH5200.png", name: "GH5200", description: "GH5200 fuel monitoring device" },
    { src: "/FTC921.png", name: "FTC921" },
    { src: "/FTC961.png", name: "FTC961" },
    { src: "/FTC881.png", name: "FTC881" },
    { src: "/fmc920.webp", name: "FMC920" },
    { src: "/fmc650.webp", name: "FMC650" },
    { src: "/fmm250.webp", name: "FMM250" },
  ];

  const deviceDetails = {
    FMC125: {
      name: "FMC125",
      intro: "Advanced Fuel Monitoring",
      features: ["Fuel monitoring and more", "Significantly lower roaming costs", "Accurate fuel usage control"],
    },
    TAT140: {
      name: "TAT140",
      intro: "Simple & Reliable Tracking",
      features: ["Periodic location reports", "Backup tracking the easy way", "Extendable battery life"],
    },
    GH5200: {
      name: "GH5200",
      intro: "Personal Safety & Communication",
      features: ["Two-way voice communication", "Programmable buttons", "Alarm button"],
    },
    FTC921: {
      name: "FTC921",
      intro: "Robust Fleet Tracking",
      features: ["FT platform device", "High voltage power supply", "Longer performance, slower drainage"],
    },
    FTC961: {
      name: "FTC961",
      intro: "Heavy-Duty Tracking",
      features: ["FT platform device", "IP69K waterproof casing", "High voltage power supply"],
    },
    FTC881: {
      name: "FTC881",
      intro: "Easy Installation Tracking",
      features: ["FT platform device", "Fast installation", "High voltage power supply"],
    },
    FMC920: {
      name: "FMC920",
      intro: "Smart & Efficient Tracking",
      features: [
        "Eco driving scenario for all-round better driving",
        "Slim design to fit the tightest spaces",
        "Extensive remote monitoring possibilities",
      ],
    },
    FMC650: {
      name: "FMC650",
      intro: "Comprehensive Vehicle Data",
      features: [
        "Reliable global coverage and separate GNSS module",
        "Remote download of Tachograph files and live data",
        "CAN data reading from heavy vehicles and special machinery",
      ],
    },
    FMM250: {
      name: "FMM250",
      intro: "EV & CAN Bus Tracking",
      features: ["Protection against dust and water", "Built-in CAN bus data reading chip", "CAN data reading from EVs"],
    },
  };

  useEffect(() => {
    // Staggered reveal for benefit cards
    benefits.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBenefitIndices((prevIndices) => [...prevIndices, index]);
      }, 200 * index); // Adjust delay as needed for desired effect
    });
  }, [benefits.length]); // Re-run if benefits array changes

  useEffect(() => {
    const intros = document.querySelectorAll(`.${styles.deviceIntro}`);
    intros.forEach((intro, index) => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          intro.classList.add(styles.show);
        }, 300 * index);
      });
    });
  }, []);

  return (
    <div className={styles.fuelMonitoringContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.fuelMonitoringTitle}>
          Fuel Monitoring, GPS Tracking & Fleet Management Solutions
        </h1>

        <div className={styles.whatsappLinkContainer}>
          <a
            href="https://wa.me/254722100506"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
          >
            <img src="/whatsapp-icon.png" alt="WhatsApp" className={styles.whatsappIcon} />
            Chat with Us Now
          </a>
        </div>

        {/* Updated Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.keyFeaturesTitle}>Key Benefits</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${styles.benefitCard} ${
                  visibleBenefitIndices.includes(index) ? styles.visible : ''
                }`}
              >
                <span className={styles.benefitIcon}>{benefit.icon}</span>
                <p className={styles.benefitText}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          {imageFiles.map((image, index) => {
            const details = deviceDetails[image.name];
            return (
              <div key={index} className={styles.imageItem}>
                {details?.intro && (
                  <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>{details.intro}</p>
                )}
                <div className={styles.imageContainer}>
                  <img
                    src={image.src}
                    alt={
                      details?.name
                        ? `Fuel monitoring device ${details.name} details and features`
                        : `Fuel monitoring device ${image.description || image.name}`
                    }
                    className={styles.responsiveImage}
                  />
                </div>
                <p className={styles.imageName}>{details?.name || image.name}</p>
                <ul className={styles.descriptionList}>
                  {details?.features?.map((feature, idx) => (
                    <li key={idx} className={styles.descriptionItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating WhatsApp Banner */}
      <div className={styles.floatingWhatsappBanner}>
        <a
          href="https://wa.me/254722100506"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp" className={styles.whatsappIcon} />
          WhatsApp Us!
        </a>
      </div>
    </div>
  );
};

export default FuelMonitoringPage;