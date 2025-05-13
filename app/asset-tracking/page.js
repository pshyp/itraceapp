"use client";

import styles from "./asset-tracking.module.css";
import { useEffect, useState } from 'react';

const AssetTrackingPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Real-time Vehicle Tracking: Know where your vehicles are, anytime, anywhere.",
    "Precise GPS Navigation: Get accurate directions to your destinations.",
    "Instant & Customizable Alerts: Set up and receive notifications for speed, traffic, and more.",
    "Real-time Traffic Updates: Avoid traffic and find the best routes.",
    "Enhanced Safety with Location Sharing: Keep loved ones informed of your location for peace of mind.",
  ];

  const productTypes = [
    {
      name: 'Portable GPS Navigators',
      intro: 'Track and Navigate Freely',
      description: [
        'Perfect for fleet managers and personal vehicle owners, these devices provide real-time location and easy-to-use navigation tools.',
      ],
      imageSrc: '/portable_gps.png',
    },
    {
      name: 'GPS Smartphone Mounts',
      intro: 'Smartphone Integration',
      description: [
        'Transform your phone into a navigation powerhouse with sturdy mounts designed for driving safety and visibility.',
      ],
      imageSrc: '/smartphone_mount.png',
    },
    {
      name: 'GPS Tracker Devices',
      intro: 'Live Location Monitoring',
      description: [
        'Install discreet GPS trackers in vehicles or assets to monitor movement, location history, and receive tamper alerts.',
      ],
      imageSrc: '/gps_tracker.png',
    },
    {
      name: 'GPS Accessories',
      intro: 'Enhance Your System',
      description: [
        'Power adapters, cables, and mounts that ensure your GPS systems stay reliable and always ready.',
      ],
      imageSrc: '/gps_accessories.png',
    },
    {
      name: 'Outdoor GPS Units',
      intro: 'Designed for Adventure',
      description: [
        'Built to withstand harsh environments—ideal for tracking assets in outdoor, off-road, or industrial settings.',
      ],
      imageSrc: '/outdoor_gps.png',
    },
    {
      name: 'Traffic Receiver Modules',
      intro: 'Stay Ahead of Delays',
      description: [
        'Get real-time traffic data and route suggestions to help your fleet or personal vehicle avoid unnecessary slowdowns.',
      ],
      imageSrc: '/traffic_module.png',
    },
  ];

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
    <div className={styles.alarmSystemsContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.alarmSystemsTitle}>
          Advanced Asset Tracking & GPS Solutions
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
      </div>

      <div className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          {productTypes.map((product, index) => (
            <div key={index} className={styles.imageItem}>
              {product.intro && (
                <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                  {product.intro}
                </p>
              )}
              <div className={styles.imageContainer}>
                <img
                  src={product.imageSrc}
                  alt={`${product.name} - ${product.intro}`}
                  className={styles.responsiveImage}
                />
              </div>
              <p className={styles.imageName}>{product.name}</p>
              <ul className={styles.descriptionList}>
                {product.description.map((desc, idx) => (
                  <li key={idx} className={styles.descriptionItem}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetTrackingPage;
