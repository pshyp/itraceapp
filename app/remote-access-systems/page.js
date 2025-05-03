"use client";

import styles from "../fuel-monitoring/fuel-monitoring.module.css";
import { useEffect, useState } from 'react';

const RemoteAccessSystemsPage = () => {
    const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);
    const benefits = [
        'Real-Time Monitoring and Alerts',
        'Remote Control and Management',
        'Data Security and Access Control',
        'Scalable and Customizable Solutions',
        'Cost-Effective Remote Access',
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleBenefitIndex((prevIndex) => (prevIndex + 1) % benefits.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
  return (
      <div className={styles.fuelMonitoringContainer}>
          <div className={styles.headerRow}>
              <h1 className={styles.fuelMonitoringTitle}>iTrace Networks - Remote Access Systems</h1>
              <div className={styles.benefitsSection}>
                  <h2 className={styles.keyFeaturesTitle}>Key Benefits</h2>
                  <ul className={styles.keyFeaturesList}>
                      {benefits.map((benefit, index) => (
                          <li key={index} className={`${styles.keyFeatureItem} ${index === visibleBenefitIndex ? styles.visible : styles.hidden}`}> {benefit}</li>
                      ))}
                  </ul>
              </div>
          </div>
          <p>Discover the power of remote access with iTrace Networks. Our cutting-edge remote access systems empower you to manage and control your assets and operations from anywhere in the world. Explore our range of solutions designed to enhance your efficiency, security, and productivity.</p>
      </div>
  );
};

export default RemoteAccessSystemsPage;