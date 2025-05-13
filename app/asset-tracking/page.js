import React, { useEffect } from 'react';
import styles from './styles/alarmSystems.module.css';

const AlarmSystems = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(`.${styles.deviceIntro}`);
    items.forEach(item => observer.observe(item));

    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  return (
    <div className={styles.alarmSystemsContainer}>
      <div className={styles.headerRow}>
        <h2 className={styles.alarmSystemsTitle}>Alarm Systems</h2>
        <p>Protect your property with cutting-edge alarm solutions.</p>
      </div>

      <section className={styles.benefitsSection}>
        <h3 className={styles.keyFeaturesTitle}>Key Features</h3>
        <ul className={styles.keyFeaturesList}>
          <li className={styles.keyFeatureItem}>24/7 Monitoring</li>
          <li className={styles.keyFeatureItem}>Mobile Notifications</li>
          <li className={styles.keyFeatureItem}>Smart Integration</li>
          <li className={styles.keyFeatureItem}>Quick Installation</li>
          <li className={styles.keyFeatureItem}>Remote Access</li>
        </ul>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          <div className={`${styles.imageItem} ${styles.deviceIntro}`}>
            <div className={styles.imageContainer}>
              <img src="/images/alarm1.png" alt="Smart Sensor" className={styles.responsiveImage} />
            </div>
            <h4 className={styles.imageName}>Smart Sensor</h4>
            <ul className={styles.descriptionList}>
              <li className={styles.descriptionItem}>Detects movement and temperature</li>
              <li className={styles.descriptionItem}>Battery powered</li>
            </ul>
          </div>

          <div className={`${styles.imageItem} ${styles.deviceIntro}`}>
            <div className={styles.imageContainer}>
              <img src="/images/alarm2.png" alt="Control Panel" className={styles.responsiveImage} />
            </div>
            <h4 className={styles.imageName}>Control Panel</h4>
            <ul className={styles.descriptionList}>
              <li className={styles.descriptionItem}>Centralized management</li>
              <li className={styles.descriptionItem}>Touchscreen display</li>
            </ul>
          </div>

          <div className={`${styles.imageItem} ${styles.deviceIntro}`}>
            <div className={styles.imageContainer}>
              <img src="/images/alarm3.png" alt="Siren Unit" className={styles.responsiveImage} />
            </div>
            <h4 className={styles.imageName}>Siren Unit</h4>
            <ul className={styles.descriptionList}>
              <li className={styles.descriptionItem}>Loud outdoor siren</li>
              <li className={styles.descriptionItem}>Flashing lights</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlarmSystems;
