"use client";

import styles from "./asset-tracking.module.css";
import gpsTracker from "../../public/gps-tracker.png";
import gpsAccessory from "../../public/gps-accessory-kit.png";
import outdoorNav from "../../public/outdoor-navigator.png";
import portableNav from "../../public/portable-navigator.png";
import smartphoneMount from "../../public/smartphone-mount.png";
import trafficReceiver from "../../public/traffic-receiver.png";

import { useEffect, useState } from "react";

const AssetTrackingPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Track your assets in real time with accuracy.",
    "Get notifications if your asset moves unexpectedly.",
    "Ensure peace of mind with geo-fencing alerts.",
    "Improve asset utilization and reduce operational costs.",
    "Generate detailed reports for compliance and analysis.",
  ];

  const imageFiles = [
    { src: "/asset1.webp", name: "AssetTracker A1", description: "Compact real-time asset tracker" },
    { src: "/asset2.webp", name: "AssetTracker B2", description: "Durable GPS asset tracker with long battery" },
    { src: "/asset3.webp", name: "AssetTracker C3", description: "Remote monitoring asset tracker" },
  ];

  const assetTracking = [
    { image: gpsTracker, title: "GPS Tracker", subtitle: "Real-time asset location updates" },
    { image: gpsAccessory, title: "Accessory Kit", subtitle: "Mounts and wiring for GPS units" },
    { image: outdoorNav, title: "Rugged GPS for tough environments" },
    { image: portableNav, title: "Flexible tracking on the go" },
    { image: smartphoneMount, title: "Device integration made easy" },
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
    const interval = setInterval(() => {
      setVisibleBenefitIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intros = document.querySelectorAll(`.${styles.deviceIntro}`);
    intros.forEach((intro, index) => {
      setTimeout(() => {
        intro.classList.add(styles.show);
        intro.style.visibility = "visible";
      }, 800 * index);
    });
  }, []);

  return (
    <div className={styles.assetTrackingContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.assetTrackingTitle}>
          Asset Tracking, GPS Monitoring & Remote Management
        </h1>

        <div className={styles.whatsappLinkContainer}>
          <a
            href="https://wa.me/254722100506"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
          >
            <img src="/whatsapp-icon.png" alt="WhatsApp" className={styles.whatsappIcon} />
            Chat with Us on WhatsApp
          </a>
        </div>

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
                        : `Asset tracking device ${image.description}`
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
    </div>
  );
};

export default AssetTrackingPage;
