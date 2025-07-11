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

  const imageFiles = [
    { src: '/trb140.png', name: 'TRB140', description: "Teltonika TRB140 LTE Cat 1 Gateway for Generator Monitoring" },
  ];

  const deviceDetails = {
    TRB140: {
      name: 'TRB140',
      intro: 'Compact LTE Cat 1 Gateway for Industrial Automation',
      features: [
        'Enables secure remote monitoring of generators.',
        'Collects data from generator\'s ECU via Modbus RTU.',
        'Robust design suitable for harsh industrial environments.',
        'Supports various sensor inputs for comprehensive data.',
        'Easy to deploy and integrate into existing systems.',
        'Reliable data transmission over LTE Cat 1 network.',
      ],
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
      }, 800 * index);
    });
  }, []);

  return (
    <div className={styles.fuelMonitoringContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.fuelMonitoringTitle}>
          LTE Router Enabling Generator Predictive Maintenance
        </h1>
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
        <div className={styles.contactLink}>
          Contact us for a personalized solution: <a href="https://wa.me/0722100506" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
        </div>


      </div>

      <div className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          {imageFiles.map((image, index) => {
            const details = deviceDetails[image.name];
            return (
              <div key={index} className={styles.imageItem}>
                {details?.intro && (
                  <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                    {details.intro}
                  </p>
                )}
                <div className={styles.imageContainer}>
                  <img
                    src={image.src}
                    alt={details?.description ? `Teltonika ${details.name}: ${details.description}` : `Teltonika ${image.name}`}
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

export default FuelMonitoringPage;
