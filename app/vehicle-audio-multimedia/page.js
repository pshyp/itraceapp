"use client";

import styles from "./vehicle-audio-multimedia.module.css";
import { useEffect, useState } from 'react';

const VehicleAudioMultimediaPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "PREMIUM SOUND QUALITY: Immerse yourself in crystal-clear, high-fidelity sound.",
    "CUSTOMIZATION: Tailor your audio and multimedia setup to suit your preferences and vehicle's requirements.",
    "TOUCHSCREEN DISPLAYS: Intuitive displays provide easy access to entertainment and navigation features.",
    "ENHANCED ENTERTAINMENT: Enjoy streaming music, video, and your favorite DVDs and CDs.",
    "SEAMLESS CONNECTIVITY: Stay connected with Bluetooth, Apple CarPlay, Android Auto, and more.",
  ];

  const productExamples = [
    {
      name: 'Car Stereos',
      intro: 'Upgrade Your In-Car Audio Hub',
      description: [
        'Upgrade your car with the latest car stereos equipped with connectivity features like Bluetooth, USB support, and FM radio. Enjoy easy access to your music library on the go.',
      ],
      imageSrc: '/car-stereos.jpg', // Replace with your actual image path
    },
    {
      name: 'Car Speakers',
      intro: 'Replace for Clearer, More Detailed Sound',
      description: [
        'Replace your factory speakers with high-performance ones that deliver clearer, more detailed sound. Upgrade your car’s sound system with premium car speakers for a better audio experience.',
      ],
      imageSrc: '/car-speakers.jpg', // Replace with your actual image path
    },
    {
      name: 'Amplifiers',
      intro: 'Enhance Your Sound System\'s Performance',
      description: [
        'Enhance your sound system with car amplifiers. These powerful amplifiers boost your audio system’s performance, delivering deep, dynamic sound that brings your music to life.',
      ],
      imageSrc: '/car-amplifiers.jpg', // Replace with your actual image path
    },
    {
      name: 'Subwoofers',
      intro: 'Add Deep, Heart-Pounding Low-End',
      description: [
        'For those who love bass, our subwoofers add that deep, heart-pounding low-end that makes your car sound system stand out. Add more bass to your system for that powerful audio experience.',
      ],
      imageSrc: '/car-subwoofers.jpg', // Replace with your actual image path
    },
    {
      name: 'Multimedia Receivers',
      intro: 'Large Touchscreen Displays and Compatibility',
      description: [
        'Our multimedia receivers feature large touchscreen displays and compatibility with various media formats. Navigate easily, stream music, and enjoy seamless multimedia integration.',
      ],
      imageSrc: '/multimedia-receiver.jpg', // Replace with your actual image path
    },
    {
      name: 'Backup Cameras',
      intro: 'Improve Safety and Driving Experience',
      description: [
        'Improve your safety and driving experience with backup cameras that provide a clear view of your surroundings while reversing. Stay safe and avoid accidents with enhanced visibility.',
      ],
      imageSrc: '/backup-camera.jpg', // Replace with your actual image path
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBenefitIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [benefits.length]);

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