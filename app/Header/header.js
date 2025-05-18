"use client";

import styles from "./ai-dashcams-mdvr.module.css"; // Make sure this CSS file exists and has the styles
import { useEffect, useState } from 'react';

const AiDashcamsMdvrPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Real-time video monitoring",
    "Driver behavior analysis",
    "Accident reconstruction data",
    "Improved fleet safety",
    "Reduced insurance costs",
    "Remote access to video footage",
    "Integration with telematics systems",
    "Tamper-proof recording",
    "Customizable alerts and notifications",
    "High-definition video quality",
  ];

  const productExamples = [
    {
      name: 'AI Dashcam',
      intro: 'Smart Monitoring for Safer Driving',
      description: [
        'Advanced dashcams with AI features to monitor driver behavior and capture crucial road events.',
      ],
      imageSrc: '/placeholder-aidashcam1.png', // Placeholder image
    },
    {
      name: 'Mobile Digital Video Recorder (MDVR)',
      intro: 'Comprehensive Fleet Surveillance',
      description: [
        'Robust MDVR systems for recording and managing video footage from multiple cameras in a fleet.',
      ],
      imageSrc: '/placeholder-mdvr1.png', // Placeholder image
    },
    {
      name: 'Integrated Camera Systems',
      intro: 'Complete Vehicle Vision',
      description: [
        'Solutions combining multiple cameras (forward-facing, driver-facing, side) for full visibility.',
      ],
      imageSrc: '/placeholder-integratedcam.png', // Placeholder image
    },
    {
      name: 'Cloud-Based Video Management',
      intro: 'Access Footage Anytime, Anywhere',
      description: [
        'Secure cloud platforms for storing, managing, and accessing video footage remotely.',
      ],
      imageSrc: '/placeholder-cloud.png', // Placeholder image
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
          AI Dashcams and MDVR Solutions
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

export default AiDashcamsMdvrPage;
