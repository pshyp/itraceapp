"use client";

import styles from "../fuel-monitoring/fuel-monitoring.module.css";
import { useEffect, useState } from 'react';

const SmartFarmSolutions = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Increased crop yields through precision monitoring.",
    "Reduced operational costs with optimized resource use.",
    "Improved crop quality with consistent environmental control.",
    "Real-time data insights for informed decision-making.",
    "Automated processes for efficient farm management.",
  ];

  const imageFiles = [
    { src: '/FTC881.png', name: 'SFM100', description: "SFM100 Smart Farm Monitoring" },
    { src: '/FTC921.png', name: 'SFM200', description: "SFM200 Smart Farm Monitoring" },
    { src: '/FTC961.png', name: 'SFM300', description: "SFM300 Smart Farm Monitoring" },
  ];

  const deviceDetails = {
    SFM100: {
      name: 'SFM100',
      intro: 'Basic Smart Farm Monitoring',
      features: [
        'Real-time environment monitoring',
        'Basic control of irrigation',
        'Temperature and humidity sensors',
      ],
    },
    SFM200: {
      name: 'SFM200',
      intro: 'Intermediate Smart Farm Monitoring',
      features: [
        'Advanced environmental monitoring',
        'Automated irrigation control',
        'Soil moisture and nutrient sensors',
      ],
    },
    SFM300: {
      name: 'SFM300',
      intro: 'Advanced Smart Farm Monitoring',
      features: [
        'Comprehensive environmental monitoring',
        'Precision irrigation control',
        'Integration with weather data',
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
        <h1 className={styles.fuelMonitoringTitle}>Smart Farm Solutions for Enhanced Productivity</h1>
        <div className={styles.benefitsSection}>
          <h2 className={styles.keyFeaturesTitle}>Key Benefits</h2>
          <ul className={styles.keyFeaturesList}>
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className={`${styles.keyFeatureItem} ${index === visibleBenefitIndex ? styles.visible : styles.hidden}`}
              >
                {benefit}
              </li>
            ))}
          </ul>
          <a href="tel:+254722100506" className={styles.whatsappLink}>
            Contact us on WhatsApp: +254 722 100 506
          </a>
        </div>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          {imageFiles.map((image, index) => {
            const details = deviceDetails[image.name];
            return (
              <div key={index} className={styles.imageItem}>
                {details?.intro && <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>{details.intro}</p>}
                <div className={styles.imageContainer}><img src={image.src} alt={details?.name ? `Smart Farm device ${details.name} details and features` : `Smart Farm device ${image.description}`} className={styles.responsiveImage} /></div>
                <p className={styles.imageName}>{details?.name || image.name}</p>
                <ul className={styles.descriptionList}>{details?.features?.map((feature, idx) => <li key={idx} className={styles.descriptionItem}>{feature}</li>)}</ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SmartFarmSolutions;