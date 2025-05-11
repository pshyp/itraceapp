"use client";

import styles from "./alarm-systems.module.css";
import { useEffect, useState } from 'react';

const AlarmSystemsPage = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    "Receive real-time alerts on your remote control or smartphone.",
    "Protect against key-less entry system hacking.",
    "Remotely start and stop your car's engine securely.",
    "Detect even the slightest impact on your vehicle.",
    "Trigger the alarm immediately if a window is shattered.",
    "Experience the reliability of two-way communication.",
    "Enhance security with specialized key-less entry solutions.",
    "Enjoy the convenience of remote engine control.",
    "Get immediate alerts upon any physical impact.",
    "Protect your car from window breakage with sound detection.",
  ];

  const alarmTypes = [
    {
      name: 'Two-Way Alarm Systems',
      intro: 'Real-Time Communication',
      description: [
        'Receive real-time alerts on your remote control or smartphone when your car is tampered with or breached, ensuring you are always informed.',
      ],
      imageSrc: '/two_way_alarm.png', // Replace with your actual image path
    },
    {
      name: 'Key-Less Entry Security',
      intro: 'Advanced Access Protection',
      description: [
        'Protect against key-less entry system hacking with specialized security solutions designed to safeguard your vehicle\'s access from modern theft techniques.',
      ],
      imageSrc: '/keyless_entry.png', // Replace with your actual image path
    },
    {
      name: 'Remote Start and Stop',
      intro: 'Convenient Engine Control',
      description: [
        'Enjoy the convenience of remotely starting and stopping your car\'s engine while keeping it secure, ideal for pre-heating or cooling your vehicle.',
      ],
      imageSrc: '/remote_start.png', // Replace with your actual image path
    },
    {
      name: 'Shock Sensors',
      intro: 'Impact Detection',
      description: [
        'Detect even the slightest impact on your vehicle, triggering the alarm and alerting you to potential threats like bumps or attempted break-ins.',
      ],
      imageSrc: '/shock_sensor.png', // Replace with your actual image path
    },
    {
      name: 'Glass Break Sensors',
      intro: 'Window Security',
      description: [
        'If a window is shattered, our alarms will immediately sound, deterring burglars and alerting you to the intrusion based on the sound of breaking glass.',
      ],
      imageSrc: '/glass_break_sensor.png', // Replace with your actual image path
    },
    // You can add more product categories here
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
          Advanced Car Alarm Systems for Superior Security
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