"use client";

import styles from "./autolocksmith-services.module.css";
import { useEffect, useState } from 'react';

const AutolocksmithServicesPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Emergency lockout assistance",
    "Car key cutting and duplication",
    "Transponder key programming",
    "Ignition repair and replacement",
    "Broken key extraction",
    "Remote and fob programming",
    "Vehicle security system repair",
    "Trunk lockout services",
    "Motorcycle key services",
    "Key fob battery replacement",
  ];

  const serviceExamples = [
    {
      name: 'Emergency Lockout',
      intro: 'Locked out of your car?',
      description: [
        'Fast and reliable assistance when you\'re locked out of your vehicle.',
      ],
      imageSrc: '/emergency_lock.png', // ✅ Corrected filename
    },
    {
      name: 'Car Key Cutting',
      intro: 'Need a new car key?',
      description: [
        'Precision key cutting and duplication for most vehicle makes and models.',
      ],
      imageSrc: '/key_cutting.png', // ✅ Corrected filename
    },
    {
      name: 'Transponder Key Programming',
      intro: 'New key not working?',
      description: [
        'Programming of transponder keys and key fobs to your vehicle\'s immobilizer system.',
      ],
      imageSrc: '/Transponder.png', // ✅ Case-sensitive match
    },
    {
      name: 'Ignition Repair',
      intro: 'Issues with your ignition?',
      description: [
        'Repair or replacement of faulty ignition cylinders and switches.',
      ],
      imageSrc: '/ignition.png', // ✅ Correct as-is
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
          Autolocksmith Services
        </h1>
        <p>
          <a href="https://wa.me/254722100506" target="_blank" rel="noopener noreferrer">WhatsApp us: 0722100506</a>
        </p>
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
          {serviceExamples.map((service, index) => (
            <div key={index} className={styles.imageItem}>
              {service.intro && (
                <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                  {service.intro}
                </p>
              )}
              <div className={styles.imageContainer}>
                <img
                  src={service.imageSrc}
                  alt={`${service.name} - ${service.intro}`}
                  className={styles.responsiveImage}
                />
              </div>
              <p className={styles.imageName}>{service.name}</p>
              <ul className={styles.descriptionList}>
                {service.description.map((desc, idx) => (
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

export default AutolocksmithServicesPage;
