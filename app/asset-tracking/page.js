"use client";

import styles from "./asset-tracking.module.css";
import { useEffect, useState } from "react";

const AssetTrackingPage = () => {
  const [visibleBenefitIndices, setVisibleBenefitIndices] = useState([]); // Changed to an array for staggered reveal

  const benefits = [
    { text: "Improve asset security with real-time location monitoring.", icon: "🔒" }, // Added icons
    { text: "Reduce operational costs by optimizing routes and usage.", icon: "💰" },
    { text: "Enhance efficiency with instant alerts and geo-fencing.", icon: "⚡" },
    { text: "Deter theft and ensure rapid recovery of valuable assets.", icon: "🚨" },
    { text: "Gain detailed insights with comprehensive reports and analytics.", icon: "📊" },
    { text: "Increase productivity through better asset allocation and visibility.", icon: "📈" },
  ];

  const imageFiles = [
    { src: "/gps-tracker.png", name: "GPS Tracker", description: "Real-time asset location updates" },
    { src: "/outdoor-navigator.png", name: "Outdoor Navigator", description: "Rugged GPS for tough environments" },
    { src: "/portable-navigator.png", name: "Portable Navigator", description: "Flexible tracking on the go" },
    { src: "/traffic-receiver.png", name: "Traffic Receiver", description: "Live road condition updates" },
    { src: "/accessory-kit.png", name: "Accessory Kit", description: "Mounts and wiring for GPS units" },
    { src: "/smartphone-mount.png", name: "Smartphone Mount", description: "Device integration made easy" },
  ];

  const deviceDetails = {
    "GPS Tracker": {
      intro: "Pinpoint Location Accuracy",
      features: ["Live GPS tracking worldwide", "Compact and discreet design", "Long-lasting rechargeable battery"],
    },
    "Outdoor Navigator": {
      intro: "Built for the Extremes",
      features: ["IP67 water and dust proof", "High-precision satellite reception", "Durable, shock-resistant casing"],
    },
    "Portable Navigator": {
      intro: "Tracking That Moves With You",
      features: ["Lightweight and easy to carry", "Versatile for personal or asset use", "SOS button for emergency alerts"],
    },
    "Traffic Receiver": {
      intro: "Avoid Delays, Save Time",
      features: ["Real-time traffic incident alerts", "Suggests faster alternative routes", "Seamless integration with navigators"],
    },
    "Accessory Kit": {
      intro: "Secure & Professional Setup",
      features: ["Includes magnetic and screw mounts", "Hard-wiring kit for permanent power", "Durable, high-quality components"],
    },
    "Smartphone Mount": {
      intro: "Integrate Your Devices",
      features: ["Securely holds any smartphone", "Adjustable for optimal viewing angle", "Quick and easy installation"],
    },
  };

  useEffect(() => {
    // Staggered reveal for benefit cards
    benefits.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBenefitIndices((prevIndices) => [...prevIndices, index]);
      }, 200 * index); // Adjust delay as needed for desired effect
    });
  }, [benefits.length]);

  useEffect(() => {
    const intros = document.querySelectorAll(`.${styles.deviceIntro}`);
    intros.forEach((intro, index) => {
      requestAnimationFrame(() => { // Using requestAnimationFrame for better animation performance
        setTimeout(() => {
          intro.classList.add(styles.show);
        }, 300 * index);
      });
    });
  }, []);

  return (
    <div className={styles.assetTrackingContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.assetTrackingTitle}>
          Asset Tracking, GPS Monitoring & Remote Management Solutions
        </h1>

        {/* Updated Benefits Section with Animated Benefit Cards */}
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
                        ? `Asset tracking device ${details.name} details and features`
                        : `Asset tracking device ${image.description || image.name}`
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

      {/* Floating WhatsApp Banner (now the primary WhatsApp contact) */}
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

export default AssetTrackingPage;