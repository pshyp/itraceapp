"use client";

import styles from './fuel-monitoring.module.css';
import { useEffect } from 'react';

const FuelMonitoringPage = () => {
  const imageFiles = [
    { src: '/fmc125.webp', name: 'FMC125' },
    { src: '/tat140.webp', name: 'TAT140' },
    { src: '/GH5200.png', name: 'GH5200' },
    { src: '/FTC921.png', name: 'FTC921' },
    { src: '/FTC961.png', name: 'FTC961' },
    { src: '/FTC881.png', name: 'FTC881' },
    { src: '/fmc920.webp', name: 'FMC920' },
    { src: '/fmc650.webp', name: 'FMC650' },
    { src: '/fmm250.webp', name: 'FMM250' },
  ];





  // Define a map of image names to their details, including the introductory phrase
  const deviceDetails = {
    FMC125: {
      name: 'FMC125',
      intro: 'Advanced Fuel Monitoring',
      features: [
        'Fuel monitoring and more',
        'Significantly lower roaming costs',
        'Accurate fuel usage control',
      ],
    },
    TAT140: {
      name: 'TAT140',
      intro: 'Simple & Reliable Tracking',
      features: [
        'Periodic location reports',
        'Backup tracking the easy way',
        'Extendable battery life',
      ],
    },
    GH5200: {
      name: 'GH5200',
      intro: 'Personal Safety & Communication',
      features: [
        'Two-way voice communication',
        'Programmable buttons',
        'Alarm button',
      ],
    },
    FTC921: {
      name: 'FTC921',
      intro: 'Robust Fleet Tracking',
      features: [
        'FT platform device',
        'High voltage power supply',
        'Longer performance, slower drainage',
      ],
    },
    FTC961: {
      name: 'FTC961',
      intro: 'Heavy-Duty Tracking',
      features: [
        'FT platform device',
        'IP69K waterproof casing',
        'High voltage power supply',
      ],
    },
    FTC881: {
      name: 'FTC881',
      intro: 'Easy Installation Tracking',
      features: [
        'FT platform device',
        'Fast installation',
        'High voltage power supply',
      ],
    },
    FMC920: {
      name: 'FMC920',
      intro: 'Smart & Efficient Tracking',
      features: [
        'Eco driving scenario for all-round better driving',
        'Slim design to fit the tightest spaces',
        'Extensive remote monitoring possibilities',
      ],
    },
    FMC650: {
      name: 'FMC650',
      intro: 'Comprehensive Vehicle Data',
      features: [
        'Reliable global coverage and separate GNSS module',
        'Remote download of Tachograph files and live data',
        'CAN data reading from heavy vehicles and special machinery',
      ],
    },
    FMM250: {
      name: 'FMM250',
      intro: 'EV & CAN Bus Tracking',
      features: [
        'Protection against dust and water',
        'Built-in CAN bus data reading chip',
        'CAN data reading from EVs',
      ],
    },
  };

  useEffect(() => {
    const intros = document.querySelectorAll(".deviceIntro");
    intros.forEach((intro, index) => {
      setTimeout(() => {
        intro.classList.add("show");
      }, 1500 * index);
    });
  }, []);

  return (
    <div className={styles.fuelMonitoringContainer}>
      <h1 className={styles.fuelMonitoringTitle}>Fuel Monitoring Solutions</h1>

      {/* Introduction Section */}
      <div className={styles.introductionSection}>
        <h2 className={styles.introductionTitle}>Unlock Efficiency with Advanced Fuel Monitoring</h2>
        <p className={styles.introductionText}>
          Gain complete control over your fleet's fuel consumption and operational costs. Our cutting-edge
          fuel monitoring devices provide real-time insights, prevent fuel theft, optimize routes, and promote
          efficient driving habits. Explore our range of solutions designed to meet the diverse needs of your
          business.
        </p>
      </div>

      {/* Key Features Section */}
      <div className={styles.keyFeaturesSection}>
        <h2 className={styles.keyFeaturesTitle}>Key Benefits of Our Fuel Monitoring</h2>
        <ul className={styles.keyFeaturesList}>
          <li className={styles.keyFeatureItem}><strong>Reduce Fuel Costs:</strong> Minimize wastage and prevent unauthorized usage.</li>
          <li className={styles.keyFeatureItem}><strong>Improve Efficiency:</strong> Optimize routes and monitor driver behavior.</li>
          <li className={styles.keyFeatureItem}><strong>Enhance Security:</strong> Detect and prevent fuel theft with real-time alerts.</li>
          <li className={styles.keyFeatureItem}><strong>Gain Insights:</strong> Access detailed reports on fuel consumption and vehicle performance.</li>
        </ul>
      </div>

      {/* Devices Section */}
      <div className={styles.responsiveImageGrid}>
        {imageFiles.map((image, index) => {
          const details = deviceDetails[image.name];

          return (
            <div key={index} className={styles.imageItem}>
              {details?.intro && <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>{details.intro}</p>} {/* Display the intro phrase */}
              <div className={styles.imageContainer}>
                <img
                  src={image.src}
                  alt={details?.name || image.name}
                  className={styles.responsiveImage}
                />
              </div>
              <p className={styles.imageName}>{details?.name || imageName}</p>
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
  );
};

export default FuelMonitoringPage;