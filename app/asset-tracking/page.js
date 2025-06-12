"use client";

import styles from "./asset-tracking.module.css";
import { useEffect, useState } from "react";

const AssetTrackingPage = () => {
  const [visibleBenefitIndices, setVisibleBenefitIndices] = useState([]); // Changed to array for staggered reveal

  const benefits = [
    { text: "Track your assets in real time with accuracy.", icon: "📍" },
    { text: "Get notifications if your asset moves unexpectedly.", icon: "🚨" },
    { text: "Ensure peace of mind with geo-fencing alerts.", icon: "🔒" },
    { text: "Improve asset utilization and reduce operational costs.", icon: "📈" },
    { text: "Generate detailed reports for compliance and analysis.", icon: "📊" },
  ];

  const imageFiles = [
    { src: "/asset1.webp", name: "AssetTracker A1", description: "Compact real-time asset tracker" },
    { src: "/asset2.webp", name: "AssetTracker B2", description: "Durable GPS asset tracker with long battery" },
    { src: "/asset3.webp", name: "AssetTracker C3", description: "Remote monitoring asset tracker" },
  ];

  const deviceDetails = {
    "AssetTracker A1": {
      intro: "Compact & Powerful Tracking",
      features: ["Small size, great performance", "Real-time GPS updates", "Long-lasting battery"],
    },
    "AssetTracker B2": {
      intro: "Built for Rugged Environments",
      features: ["IP67 water and dust resistant", "Extended battery life", "Tamper alerts"],
    },
    "AssetTracker C3": {
      intro: "Smart Remote Monitoring",
      features: ["SIM + Wi-Fi dual connectivity", "Remote diagnostics", "Flexible mounting options"],
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
      requestAnimationFrame(() => {
        setTimeout(() => {
          intro.classList.add(styles.show);
          // Removed inline style visibility manipulation, let CSS handle it
        }, 300 * index); // Adjusted delay for consistency
      });
    });
  }, []);

  return (
    <div className={styles.assetTrackingContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.assetTrackingTitle}>
          Asset Tracking, GPS Monitoring & Remote Management
        </h1>

        {/* Removed: The static WhatsApp link from the header */}

        {/* Updated Benefits Section with Animated Benefit Cards */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.keyFeaturesTitle}>Key Benefits</h2>
          <div className={styles.benefitsGrid}> {/* Changed from ul to div, and keyFeaturesList to benefitsGrid */}
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
      <div className={styles.whatsappLinkContainer}>
        <a
          href="https://wa.me/254722100506"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappLink}
          title="Chat with us on WhatsApp"
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp Icon" className={styles.whatsappIcon} />
          WhatsApp Us!
        </a>
      </div>
    </div>
  );
};

export default AssetTrackingPage;