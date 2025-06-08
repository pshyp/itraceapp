"use client";

import styles from "./asset-tracking.module.css";
import { useEffect, useState } from 'react';

const AssetTrackingPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Track your assets in real time with accuracy.",
    "Get notifications if your asset moves unexpectedly.",
    "Ensure peace of mind with constant monitoring.",
    "View asset history with location logs.",
    "Integrate tracking systems with your existing infrastructure.",
    "Protect against theft with advanced GPS technology.",
    "Optimize asset usage and reduce downtime.",
    "Access detailed reports on asset performance and usage.",
    "Customize alerts to match your asset management needs.",
    "Easily manage a fleet of devices from a central dashboard.",
  ];

  const assetTypes = [
    {
      name: 'GPS Accessory Kit',
      intro: 'Complete Asset Tracking Solution',
      description: [
        'Get everything you need for seamless asset tracking with this all-in-one GPS accessory kit.',
      ],
      imageSrc: '/gps-accessory-kit.png', // Replace with your actual image path
    },
    {
      name: 'GPS Tracker',
      intro: 'Track Your Assets in Real Time',
      description: [
        'Monitor and track your valuable assets in real time with this highly accurate GPS tracker.',
      ],
      imageSrc: '/gps-tracker.png', // Replace with your actual image path
    },
    {
      name: 'Outdoor GPS Navigator',
      intro: 'Navigate Your Assets Outdoors',
      description: [
        'Ensure your assets can be tracked in outdoor environments with this rugged and durable GPS navigator.',
      ],
      imageSrc: '/outdoor-navigator.png', // Replace with your actual image path
    },
    {
      name: 'Portable GPS Navigator',
      intro: 'On-the-Go Asset Tracking',
      description: [
        'Keep your asset tracking mobile with this portable GPS navigator, perfect for field operations.',
      ],
      imageSrc: '/portable-navigator.png', // Replace with your actual image path
    },
    {
      name: 'Smartphone Mount',
      intro: 'Mount Your Device for Easy Access',
      description: [
        'Securely mount your GPS tracker or smartphone for easy access and uninterrupted asset tracking.',
      ],
      imageSrc: '/smartphone-mount.png', // Replace with your actual image path
    },
    {
      name: 'Traffic Receiver Module',
      intro: 'Get Real-Time Traffic Data',
      description: [
        'Enhance your asset tracking with live traffic data, helping to improve decision-making and route planning.',
      ],
      imageSrc: '/traffic-receiver.png', // Replace with your actual image path
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
          Advanced Asset Tracking Solutions for Ultimate Security
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
      <div className={styles.whatsappButtonContainer}>
        <a href="https://wa.me/0722100506" className={styles.whatsappButton} target="_blank" rel="noopener noreferrer">
          Chat with us on WhatsApp
        </a>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          {assetTypes.map((asset, index) => (
            <div key={index} className={styles.imageItem}>
              {asset.intro && (
                <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                  {asset.intro}
                </p>
              )}
              <div className={styles.imageContainer}>
                <img
                  src={asset.imageSrc}
                  alt={`${asset.name} - ${asset.intro}`}
                  className={styles.responsiveImage}
                />
              </div>
              <p className={styles.imageName}>{asset.name}</p>
              <ul className={styles.descriptionList}>
                {asset.description.map((desc, idx) => (
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
