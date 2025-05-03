"use client";

import styles from "../fuel-monitoring/fuel-monitoring.module.css";
import { useEffect, useState } from 'react';

const GensetSolutions = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [    
    "Optimize genset performance.",
    "Reduce downtime and maintenance costs.",
    "Remote monitoring and control.",
    "Ensure reliable power supply.",
    "Real-time alerts and notifications.",
  ];

  const imageFiles = [
    // Add relevant image paths and descriptions
    { src: '/GH5200.png', name: 'GH5200', description: "GH5200 Genset Monitoring Device" },
    // Add more images as needed
  ];

  const deviceDetails = {
    GH5200: {
      name: 'GH5200',
      intro: 'Advanced Genset Monitoring',
      features: [
        'Remote monitoring of genset status',
        'Fuel level monitoring',
        'Real-time alerts for faults',
      ],
    },
    // Add more device details as needed
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
        <h1 className={styles.fuelMonitoringTitle}>Advanced Genset Monitoring Solutions</h1>
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
                  <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                    {details.intro}
                  </p>
                )}
                <div className={styles.imageContainer}>
                  <img
                    src={image.src}
                    alt={details?.name ? `Genset monitoring device ${details.name} details and features` : `Genset monitoring device ${image.description}`}
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

export default GensetSolutions;