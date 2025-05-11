"use client";

import styles from "../fuel-monitoring/fuel-monitoring.module.css";
import { useEffect, useState } from 'react';

const ColdStorageRemoteMonitoringIOT = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Real-time Temperature Monitoring.",
    "Remote Access and Control.",
    "Automated Alerts and Notifications.",
    "Compliance and Data Logging.",
    "Reduced Operational Costs.",
  ];

  const imageFiles = [
    // Add relevant image paths and descriptions
    { src: '/GH5200.png', name: 'GH5200', description: "GH5200 cold storage monitoring device" },
    // Add more images as needed
  ];

  const deviceDetails = {
    GH5200: {
      name: 'GH5200',
      intro: 'Advanced Cold Storage Monitoring',
      features: [
        'Remote temperature monitoring',
        'Humidity control',
        'Real-time alerts for temperature fluctuations',
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
        <h1 className={styles.fuelMonitoringTitle}>Cold Storage Remote Monitoring</h1>
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

      {/* Add your content here */}
    </div>
  );
};

export default ColdStorageRemoteMonitoringIOT;