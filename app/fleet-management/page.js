// app/fleet-management/page.js

"use client";

import styles from "../fuel-monitoring/fuel-monitoring.module.css";
import { useEffect, useState } from 'react';

const FleetManagementPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Optimize fleet operations and reduce costs.",
    "Improve driver safety and behavior.",
    "Real-time tracking and monitoring of vehicles.",
    "Enhanced security and reduced risk of theft.",
    "Detailed reports on vehicle usage and performance.",
  ];

  const imageFiles = [
    { src: '/fmc125.webp', name: 'FMC125', description: "FMC125 fleet management device" },
    { src: '/tat140.webp', name: 'TAT140', description: "TAT140 fleet management device" },
    { src: '/GH5200.png', name: 'GH5200', description: "GH5200 fleet management device" },
    { src: '/FTC921.png', name: 'FTC921' },
    { src: '/FTC961.png', name: 'FTC961' },
    { src: '/FTC881.png', name: 'FTC881' },
    { src: '/fmc920.webp', name: 'FMC920' },
    { src: '/fmc650.webp', name: 'FMC650' },
    { src: '/fmm250.webp', name: 'FMM250' },
  ];

  const deviceDetails = {
    FMC125: {
      name: 'FMC125',
      intro: 'Advanced Fleet Management',
      features: [
        'Real-time vehicle tracking',
        'Route optimization and planning',
        'Driver behavior monitoring',
      ],
    },
    TAT140: {
      name: 'TAT140',
      intro: 'Reliable Fleet Tracking',
      features: [
        'Periodic location updates',
        'Geofencing and zone alerts',
        'Easy backup tracking',
      ],
    },
    GH5200: {
      name: 'GH5200',
      intro: 'Driver Safety & Communication',
      features: [
        'Two-way voice communication',
        'Programmable safety buttons',
        'Emergency alarm button',
      ],
    },
    FTC921: {
      name: 'FTC921',
      intro: 'Robust Fleet Monitoring',
      features: [
        'High-voltage power supply',
        'Extended performance',
        'FT platform integration',
      ],
    },
    FTC961: {
      name: 'FTC961',
      intro: 'Heavy-Duty Fleet Tracking',
      features: [
        'IP69K waterproof casing',
        'High-voltage power supply',
        'FT platform integration',
      ],
    },
    FTC881: {
      name: 'FTC881',
      intro: 'Quick-Install Tracking',
      features: [
        'Fast and easy installation',
        'High-voltage power supply',
        'FT platform integration',
      ],
    },
    FMC920: {
      name: 'FMC920',
      intro: 'Smart Fleet Efficiency',
      features: [
        'Eco-driving analysis',
        'Slim and compact design',
        'Remote monitoring capabilities',
      ],
    },
    FMC650: {
      name: 'FMC650',
      intro: 'Comprehensive Fleet Data',
      features: [
        'Global coverage',
        'Tachograph data and remote access',
        'Heavy vehicle CAN data access',
      ],
    },
    FMM250: {
      name: 'FMM250',
      intro: 'EV and CAN Fleet Tracking',
      features: [
        'Dust and water protection',
        'CAN bus data integration',
        'Electric vehicle data support',
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
        <h1 className={styles.fuelMonitoringTitle}>Advanced Fleet Management Solutions for Enhanced Efficiency</h1>
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
                    alt={details?.name ? `Fleet management device ${details.name} details and features` : `Fleet management device ${image.description}`}
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

export default FleetManagementPage;