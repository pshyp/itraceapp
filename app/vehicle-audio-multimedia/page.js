"use client";

import styles from "./vehicle-audio-multimedia.module.css"; // Make sure this CSS file exists and has the styles
import { useEffect, useState } from 'react';

const VehicleAudioMultimediaPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "High-quality sound system upgrades",
    "Integration of modern multimedia players",
    "Installation of screens and displays",
    "Custom audio setups",
    "Bluetooth and smartphone connectivity",
    "Navigation system installation",
    "Backup camera integration",
    "Steering wheel control compatibility",
    "Noise reduction and sound dampening",
    "Expert installation and tuning",
  ];

  const productExamples = [
    {
      name: 'Premium Speaker System',
      intro: 'Experience Crystal Clear Sound',
      description: [
        'Upgrade your car\'s audio with our range of premium speakers for an immersive listening experience.',
      ],
      imageSrc: '/placeholder-audio1.png', // Placeholder image
    },
    {
      name: 'Touchscreen Multimedia Player',
      intro: 'Modern Entertainment on the Go',
      description: [
        'Install a state-of-the-art touchscreen player with navigation, Bluetooth, and app compatibility.',
      ],
      imageSrc: '/placeholder-audio2.png', // Placeholder image
    },
    {
      name: 'Subwoofer and Amplifier',
      intro: 'Add Depth to Your Bass',
      description: [
        'Enhance your audio system with powerful subwoofers and amplifiers for rich, deep bass.',
      ],
      imageSrc: '/placeholder-audio3.png', // Placeholder image
    },
    {
      name: 'Backup Camera System',
      intro: 'Increased Safety and Convenience',
      description: [
        'Integrate a backup camera with your display for safer parking and maneuvering.',
      ],
      imageSrc: '/placeholder-audio4.png', // Placeholder image
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
          Vehicle Audio & Multimedia Systems
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
          {productExamples.map((product, index) => (
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

export default VehicleAudioMultimediaPage;
a