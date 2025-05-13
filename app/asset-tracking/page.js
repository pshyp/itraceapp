"use client";

import styles from "./asset-tracking.module.css";
import { useEffect, useState } from 'react';

const AssetTrackingPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Monitor valuable assets in real time from any location.",
    "Prevent theft with instant movement alerts.",
    "Track vehicles, equipment, and shipments easily.",
    "Receive notifications if an asset leaves a geofenced area.",
    "Optimize routes and logistics with live GPS data.",
    "Minimize operational losses through smart tracking.",
  ];

  const trackerTypes = [
    {
      name: 'Portable GPS Navigators',
      intro: 'Reliable On-the-Go Tracking',
      description: [
        'Ideal for fleets and individuals needing portable, plug-and-play GPS devices with accurate location tracking and long battery life.',
      ],
      imageSrc: '/portable_gps_navigator.png',
    },
    {
      name: 'GPS Smartphone Mounts',
      intro: 'Integrated Mobile Navigation',
      description: [
        'Mounts with built-in GPS support for smartphones, allowing secure placement and efficient navigation during transit.',
      ],
      imageSrc: '/gps_smartphone_mount.png',
    },
    {
      name: 'GPS Tracker Devices',
      intro: 'Real-Time Location Monitoring',
      description: [
        'Compact trackers suitable for cars, trucks, or containers, offering real-time tracking with cellular and satellite communication.',
      ],
      imageSrc: '/gps_tracker_device.png',
    },
    {
      name: 'GPS Accessories',
      intro: 'Support Tools for Trackers',
      description: [
        'Power cables, signal boosters, mounts, and more — accessories that enhance the performance and durability of your GPS trackers.',
      ],
      imageSrc: '/gps_accessories.png',
    },
    {
      name: 'Outdoor GPS Units',
      intro: 'Rugged Field-Ready Devices',
      description: [
        'Built to withstand tough environments, these devices are perfect for field teams tracking assets in remote or off-road areas.',
      ],
      imageSrc: '/outdoor_gps_unit.png',
    },
    {
      name: 'Traffic Receiver Module',
      intro: 'Live Traffic Integration',
      description: [
        'Attachable modules that provide real-time traffic updates to GPS systems for smarter routing and better ETA predictions.',
      ],
      imageSrc: '/traffic_receiver_module.png',
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
    <div className={styles.assetTrackingContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.assetTrackingTitle}>
          Advanced Asset Tracking for Smarter Logistics
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
          {trackerTypes.map((tracker, index) => (
            <div key={index} className={styles.imageItem}>
              {tracker.intro && (
                <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                  {tracker.intro}
                </p>
              )}
              <div className={styles.imageContainer}>
                <img
                  src={tracker.imageSrc}
                  alt={`${tracker.name} - ${tracker.intro}`}
                  className={styles.responsiveImage}
                />
              </div>
              <p className={styles.imageName}>{tracker.name}</p>
              <ul className={styles.descriptionList}>
                {tracker.description.map((desc, idx) => (
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
