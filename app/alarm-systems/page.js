"use client";

import styles from "./alarm-systems.module.css";
import { useEffect, useState } from "react";

const AlarmSystemsPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Receive real-time alerts on your remote control or smartphone.",
    "Protect against key-less entry system hacking.",
    "Remotely start and stop your vehicle engine.",
    "Immobilize your vehicle in case of unauthorized access.",
    "Access detailed logs of vehicle alarms and alerts.",
  ];

  const imageFiles = [
    { src: "/alarm1.png", name: "SmartGuard A1", description: "Advanced alarm system with smartphone integration" },
    { src: "/alarm2.png", name: "SecureLock Pro", description: "Anti-theft system with immobilizer" },
    { src: "/alarm3.png", name: "Guardian Elite", description: "Premium car alarm with remote start" },
  ];

  const deviceDetails = {
    "SmartGuard A1": {
      name: "SmartGuard A1",
      intro: "Smartphone-Enabled Protection",
      features: ["Real-time smartphone alerts", "Remote engine control", "Geo-fencing capabilities"],
    },
    "SecureLock Pro": {
      name: "SecureLock Pro",
      intro: "Anti-Theft & Immobilizer",
      features: ["Keyless entry protection", "Automatic immobilization", "Loud tamper alarms"],
    },
    "Guardian Elite": {
      name: "Guardian Elite",
      intro: "Full-Suite Alarm Solution",
      features: ["Remote start/stop engine", "Shock & tilt sensors", "Integrated siren and alert system"],
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
    <div className={styles.fuelMonitoringContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.fuelMonitoringTitle}>
          Car Alarm Systems & Anti-Theft Protection
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
                        ? `Alarm system device ${details.name} details and features`
                        : `Car alarm system ${image.description}`
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

export default AlarmSystemsPage;
