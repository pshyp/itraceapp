"use client";

import styles from "../fuel-monitoring/fuel-monitoring.module.css";
import { useEffect, useState } from 'react';

const SolarInstallationsRemoteMonitoring = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Real-time performance tracking.",
    "Maximize energy production.",
    "Remote monitoring and control.",
    "Early fault detection and alerts.",
    "Detailed energy generation reports.",
  ];

    const imageFiles = [
        { src: '/FTC921.png', name: 'FTC921', description: "FTC921 Solar Tracking Device" },
        { src: '/FTC961.png', name: 'FTC961', description: "FTC961 Heavy-Duty Solar Tracking Device" },
        { src: '/FTC881.png', name: 'FTC881', description: "FTC881 Easy Installation Solar Tracking Device" },
        
  ];

  const deviceDetails = {
    "Solar Panel 1": {
      name: 'Solar Panel 1',
      intro: 'High Efficiency Solar Panel',
      features: [
        'High energy conversion',
        'Durable and weather-resistant',
        'Long lifespan',
      ],
    },
    "Solar Inverter 1": {
      name: 'Solar Inverter 1',
      intro: 'Smart Solar Inverter',
      features: [
        'Grid synchronization',
        'Remote monitoring',
        'Energy optimization',
      ],
    },
    "Solar Monitoring 1": {
      name: 'Solar Monitoring 1',
      intro: 'Advanced Solar Monitoring System',
      features: [
        'Real-time data analysis',
        'Fault detection alerts',
        'Performance reporting',
      ],
    },
  };

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
        <h1 className={styles.fuelMonitoringTitle}>Solar Installations Remote Monitoring</h1>
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
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          {imageFiles.map((image, index) => {
            const details = deviceDetails[image.name]
            return (
              <div key={index} className={styles.imageItem}>
                {details?.intro && (
                  <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                    {details.intro}
                  </p>
                )}
                <div className={styles.imageContainer}>
                  <img src={image.src} alt={image.description} className={styles.responsiveImage}/>
                </div>
                <p className={styles.imageName}>{details?.name || image.description}</p>
                <ul className={styles.descriptionList}>
                  {details?.features?.map((feature, idx) => (
                    <li key={idx} className={styles.descriptionItem}>{feature}</li>
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

export default SolarInstallationsRemoteMonitoring;