"use client";

import styles from "../styles/alarm-systems.module.css";
import { useEffect, useState } from 'react';

const AlarmSystemsPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Deters crime and protects against break-ins",
    "Provides 24/7 monitoring and emergency assistance",
    "Reduces home insurance premiums",
    "Offers remote access and control via smartphone apps",
    "Integrates with smart home devices for enhanced automation",
    "Increases property value",
  ];

  const alarmTypes = [
    {
      name: 'Wired Systems',
      intro: 'Reliable Connectivity',
      description: [
        'Reliable and stable connection',
        'Less susceptible to interference',
        'Suitable for larger facilities',
      ],
      imageSrc: '/wired_alarm.png', // Replace with your actual image path
    },
    {
      name: 'Wireless Systems',
      intro: 'Easy and Flexible',
      description: [
        'Easy installation and flexible placement',
        'Integration with smart home devices',
        'Battery-powered for continued operation during power outages',
      ],
      imageSrc: '/wireless_alarm.png', // Replace with your actual image path
    },
    {
      name: 'Monitored Systems',
      intro: 'Professional Support',
      description: [
        '24/7 professional monitoring',
        'Immediate response from emergency services',
        'Enhanced security for high-risk areas',
      ],
      imageSrc: '/monitored_alarm.png', // Replace with your actual image path
    },
    {
      name: 'Smart Systems',
      intro: 'Connected Security',
      description: [
        'Integration with smart home devices',
        'Remote monitoring and control',
        'Real-time notifications and alerts',
      ],
      imageSrc: '/smart_alarm.png', // Replace with your actual image path
    },
    {
      name: 'Burglar Alarms',
      intro: 'Intrusion Detection',
      description: [
        'Motion detectors and door/window sensors',
        'Deter unauthorized entry',
        'May include smoke detectors for added safety',
      ],
      imageSrc: '/burglar_alarm.png', // Replace with your actual image path
    },
    {
      name: 'Fire Alarms',
      intro: 'Safety First',
      description: [
        'Detects smoke, heat, and flames',
        'Alerts occupants and emergency services',
        'Essential for safety in all buildings',
      ],
      imageSrc: '/fire_alarm.png', // Replace with your actual image path
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
          Alarm Systems for Enhanced Security and Protection
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
          {alarmTypes.map((alarm, index) => (
            <div key={index} className={styles.imageItem}>
              {alarm.intro && (
                <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                  {alarm.intro}
                </p>
              )}
              <div className={styles.imageContainer}>
                <img
                  src={alarm.imageSrc}
                  alt={`${alarm.name} - ${alarm.intro}`}
                  className={styles.responsiveImage}
                />
              </div>
              <p className={styles.imageName}>{alarm.name}</p>
              <ul className={styles.descriptionList}>
                {alarm.description.map((desc, idx) => (
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

export default AlarmSystemsPage;