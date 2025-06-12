"use client";

import styles from "./alarm-systems.module.css";
import { useEffect, useState } from 'react';

const AlarmSystemsPage = () => {
  const [visibleBenefitIndices, setVisibleBenefitIndices] = useState([]); // Changed to an array for staggered reveal

  const benefits = [
    { text: "Receive real-time alerts on your remote control or smartphone.", icon: "🔔" },
    { text: "Protect against key-less entry system hacking.", icon: "🔑" },
    { text: "Remotely start and stop your car's engine securely.", icon: "🚗" },
    { text: "Detect even the slightest impact on your vehicle.", icon: "💥" },
    { text: "Trigger the alarm immediately if a window is shattered.", icon: " shatter" }, // Consider a more suitable emoji or icon for shattering
    { text: "Experience the reliability of two-way communication.", icon: "💬" },
    { text: "Enhance security with specialized key-less entry solutions.", icon: "🛡️" },
    { text: "Enjoy the convenience of remote engine control.", icon: "🎮" },
    { text: "Get immediate alerts upon any physical impact.", icon: "🚨" },
    { text: "Protect your car from window breakage with sound detection.", icon: "🔊" },
  ];

  const alarmTypes = [
    {
      name: 'Two-Way Alarm Systems',
      intro: 'Real-Time Communication',
      description: [
        'Receive real-time alerts on your remote control or smartphone when your car is tampered with or breached, ensuring you are always informed.',
      ],
      imageSrc: '/two_way_alarm.png',
    },
    {
      name: 'Key-Less Entry Security',
      intro: 'Advanced Access Protection',
      description: [
        'Protect against key-less entry system hacking with specialized security solutions designed to safeguard your vehicle\'s access from modern theft techniques.',
      ],
      imageSrc: '/keyless_entry.png',
    },
    {
      name: 'Remote Start and Stop',
      intro: 'Convenient Engine Control',
      description: [
        'Enjoy the convenience of remotely starting and stopping your car\'s engine while keeping it secure, ideal for pre-heating or cooling your vehicle.',
      ],
      imageSrc: '/remote_start.png',
    },
    {
      name: 'Shock Sensors',
      intro: 'Impact Detection',
      description: [
        'Detect even the slightest impact on your vehicle, triggering the alarm and alerting you to potential threats like bumps or attempted break-ins.',
      ],
      imageSrc: '/shock_sensor.png',
    },
    {
      name: 'Glass Break Sensors',
      intro: 'Window Security',
      description: [
        'If a window is shattered, our alarms will immediately sound, deterring burglars and alerting you to the intrusion based on the sound of breaking glass.',
      ],
      imageSrc: '/glass_break_sensor.png',
    },
  ];

  useEffect(() => {
    // Staggered reveal for benefit cards
    benefits.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBenefitIndices((prevIndices) => [...prevIndices, index]);
      }, 200 * index); // Adjust delay as needed for desired effect
    });
  }, [benefits.length]); // Added benefits.length to dependency array

  useEffect(() => {
    const intros = document.querySelectorAll(`.${styles.deviceIntro}`);
    intros.forEach((intro, index) => {
      requestAnimationFrame(() => { // Use requestAnimationFrame for smoother animation
        setTimeout(() => {
          intro.classList.add(styles.show);
        }, 300 * index); // Adjust delay as needed
      });
    });
  }, []);

  return (
    <div className={styles.alarmSystemsContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.alarmSystemsTitle}>
          Advanced Car Alarm Systems for Superior Security
        </h1>

        {/* Updated Benefits Section to use Animated Benefit Cards */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.keyFeaturesTitle}>Key Benefits</h2>
          <div className={styles.benefitsGrid}> {/* Changed from ul to div, and keyFeaturesList to benefitsGrid */}
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${styles.benefitCard} ${
                  visibleBenefitIndices.includes(index) ? styles.visible : ''
                }`}
              >
                <span className={styles.benefitIcon}>{benefit.icon}</span>
                <p className={styles.benefitText}>{benefit.text}</p>
              </div>
            ))}
          </div>
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

      {/* Floating WhatsApp Banner */}
      <div className={styles.whatsappLinkContainer}>
        <a
          href="https://wa.me/254722100506" {/* Fixed phone number to be consistent with fuel-monitoring */}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappLink}
          title="Chat with us on WhatsApp" {/* Added title for accessibility */}
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp Icon" className={styles.whatsappIcon} />
          Chat with Us on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default AlarmSystemsPage;