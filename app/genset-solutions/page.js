"use client";

import styles from "../fuel-monitoring/fuel-monitoring.module.css";
import { useEffect, useState } from 'react';

const GensetSolutions = () => {
  const [visibleBenefitIndex, setVisibleBenefitIndex] = useState(0);

  const benefits = [
    'Reduce Fuel Consumption',
    'Prevent Genset Malfunctions',
    'Ensure Continuous Power Supply',
    'Optimize Maintenance Schedules',
    'Enhance Operational Efficiency',
  ];

  const imageFiles = [
    { src: '/GMS125.webp', name: 'GMS125', description: "GMS125 advanced genset monitoring device" },
    { src: '/GMS650.webp', name: 'GMS650', description: "GMS650 comprehensive genset monitoring device" },
    { src: '/GMS920.webp', name: 'GMS920', description: "GMS920 smart genset monitoring device" },
    { src: '/GMS250.webp', name: 'GMS250', description: "GMS250 EV & CAN Bus genset monitoring device" },
    { src: '/GST140.webp', name: 'GST140', description: "GST140 reliable genset tracking device" },
    { src: '/GHS200.png', name: 'GHS200', description: "GHS200 genset safety & communication device" },
    { src: '/GST921.png', name: 'GST921', description: "GST921 robust genset tracking device" },
    { src: '/GST961.png', name: 'GST961', description: "GST961 heavy-duty genset tracking device" },
    { src: '/GST881.png', name: 'GST881', description: "GST881 easy installation genset tracking device" },
  ];

  const deviceDetails = {
    GMS125: {
      name: 'GMS125',
      intro: 'Advanced Genset Monitoring and Control',
      features: [
        'Fuel usage optimization',
        'Significantly lower operational costs',
        'Precise fuel consumption control',
      ],
    },
    GMS650: {
      name: 'GMS650',
      intro: 'Comprehensive Genset Data Analysis',
      features: [
        'Extensive global coverage and enhanced GNSS module',
        'Remote tachograph file downloads and live data',
        'CAN data reading from heavy machinery',
      ],
    },
    GMS920: {
      name: 'GMS920',
      intro: 'Smart & Efficient Genset Management',
      features: [
        'Optimized eco-driving for improved efficiency',
        'Compact design for versatile installation',
        'Comprehensive remote monitoring capabilities',
      ],
    },
    GMS250: {
      name: 'GMS250',
      intro: 'EV & CAN Bus Genset Tracking',
      features: [
        'Protection against dust and water ingress',
        'Integrated CAN bus data reading chip',
        'CAN data reading from electric vehicle gensets',
      ],
    },
    GST140: {
      name: 'GST140',
      intro: 'Simple & Reliable Genset Tracking',
      features: [
        'Regular location reporting',
        'Simplified backup tracking',
        'Extended battery life',
      ],
    },
    GHS200: {
      name: 'GHS200',
      intro: 'Genset Safety & Communication',
      features: [
        'Dual-way voice communication',
        'Customizable button functions',
        'Dedicated alarm button for emergencies',
      ],
    },
    GST921: {
      name: 'GST921',
      intro: 'Robust Genset Fleet Tracking',
      features: [
        'Advanced FT platform integration',
        'High-voltage power supply compatibility',
        'Prolonged operational performance with reduced drainage',
      ],
    },
    GST961: {
      name: 'GST961',
      intro: 'Heavy-Duty Genset Tracking',
      features: [
        'Robust FT platform integration',
        'IP69K-rated waterproof casing',
        'High-voltage power supply support',
      ],
    },
    GST881: {
      name: 'GST881',
      intro: 'Easy Installation Genset Tracking',
      features: [
        'FT platform device',
        'Streamlined installation process',
        'High voltage power supply',
      ],
    },
  };

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
    <div className={styles.fuelMonitoringContainer}>
      <div className={styles.headerRow}>
        <h1 className={styles.fuelMonitoringTitle}>Advanced Genset Monitoring and Remote Control Solutions</h1>
        <div className={styles.benefitsSection}>
          <h2 className={styles.keyFeaturesTitle}>Explore the Key Benefits of Our Genset Solutions</h2>
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
          {imageFiles.map((image, index) => {
            const details = deviceDetails[image.name];
            return (
              <div key={index} className={styles.imageItem}>
                {details?.intro && (
                  <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                    {details.intro}
                  </p>
                )}
                <div className={styles.imageContainer}>
                  <img
                    src={image.src}
                    alt={details?.name ? `Genset monitoring device ${details.name} details and features` : `Genset monitoring device ${image.description}`}
                    className={styles.responsiveImage}
                  />
                </div>
                <p className={styles.imageName}>{details?.name || image.name}</p>
                <ul className={styles.descriptionList}>
                  {details?.features?.map((feature, idx) => (
                    <li key={idx} className={styles.descriptionItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GensetSolutions;