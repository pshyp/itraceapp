import React from 'react';
import styles from './ai-dashcams-mdvr.module.css';

const AiDashcamsMdvrPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AI Dashcams and MDVR Solutions</h1>
      <p className={styles.intro}>
        Enhance safety, security, and efficiency in your fleet with our advanced AI Dashcams and Mobile Digital Video Recorders (MDVR) solutions. These systems provide valuable insights into driver behavior, vehicle activity, and potential incidents.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Benefits of AI Dashcams and MDVR</h2>
        <ul className={styles.benefitsList}>
          <li>
            <strong>Improved Driver Safety:</strong> Real-time monitoring and alerts for risky driving behaviors like harsh braking, acceleration, and cornering.
          </li>
          <li>
            <strong>Incident Investigation:</strong> High-definition video footage provides irrefutable evidence in case of accidents or disputes.
          </li>
          <li>
            <strong>Reduced Insurance Costs:</strong> Demonstrating a commitment to safety can lead to lower insurance premiums.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Monitor vehicle activity and deter theft or unauthorized use.
          </li>
          <li>
            <strong>Optimized Fleet Operations:</strong> Gain insights into route efficiency and driver performance.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our AI Dashcam and MDVR Products</h2>
        <div className={styles.productGrid}>
          <div className={styles.productItem}>
            <img src="/MC201.png" alt="MC201 2K AI 2CH DashCam" className={styles.productImage} />
            <h3 className={styles.productName}>MC201 2K AI 2CH DashCam</h3>
            <ul className={styles.productFeatures}>
              <li>1 built-in & 1 external cameras recording</li>
              <li>Driving security (ADAS & DMS)</li>
              <li>4G Video Surveillance</li>
            </ul>
          </div>
          <div className={styles.productItem}>
            <img src="/MC202X.png" alt="MC202X 1080P 2CH AI Dash Cam" className={styles.productImage} />
            <h3 className={styles.productName}>MC202X 1080P 2CH AI Dash Cam</h3>
            <ul className={styles.productFeatures}>
              <li>2 built-in cameras recording</li>
              <li>Driving security (ADAS & DMS)</li>
              <li>4G Video Surveillance</li>
            </ul>
          </div>
          <div className={styles.productItem}>
            <img src="/MC402_1080P_4CH_AI_DashCam.png" alt="MC402 1080P 4CH AI Dash Cam" className={styles.productImage} />
            <h3 className={styles.productName}>MC402 1080P 4CH AI Dash Cam</h3>
            <ul className={styles.productFeatures}>
              <li>1 built-in & 3 external cameras recording</li>
              <li>Driving security (ADAS & DMS)</li>
              <li>4G Video Surveillance</li>
            </ul>
          </div>
          <div className={styles.productItem}>
            <img src="/mc904_1080p_4ch_sd_mdvr.png" alt="MC904 1080P 4CH SD card MDVR" className={styles.productImage} />
            <h3 className={styles.productName}>MC904 1080P 4CH SD card MDVR</h3>
            <ul className={styles.productFeatures}>
              <li>4-channel recording MDVR</li>
              <li>Driving security (ADAS, DMS, BSD)</li>
              <li>4G Video Surveillance</li>
            </ul>
          </div>
          <div className={styles.productItem}>
            <img src="/mc908_8ChannelRecorder.png" alt="MC908 1080P 8CH MDVR" className={styles.productImage} />
            <h3 className={styles.productName}>MC908 1080P 8CH MDVR</h3>
            <ul className={styles.productFeatures}>
              <li>8-channel recording MDVR</li>
              <li>Driving security (ADAS, DMS, BSD)</li>
              <li>4G Video Surveillance</li>
            </ul>
          </div>
          <div className={styles.productItem}>
            <img src="/mdvrMc912_12ch1080p.png" alt="MC912 1080P 12CH MDVR" className={styles.productImage} />
            <h3 className={styles.productName}>MC912 1080P 12CH MDVR</h3>
            <ul className={styles.productFeatures}>
              <li>12-channel recording MDVR</li>
              <li>Driving security (ADAS, DMS, BSD)</li>
              <li>4G Video Surveillance</li>
            </ul>
          </div>
          {/* Add more product items as needed */}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Features and Capabilities</h2>
        <ul className={styles.featuresList}>
          <li>High-definition video recording (up to 1080P, some 2K).</li>
          <li>Multiple camera inputs (2, 4, 8, 12 channels).</li>
          <li>Driving Security features (ADAS - Advanced Driver Assistance Systems, DMS - Driver Monitoring System, BSD - Blind Spot Detection).</li>
          <li>4G Video Surveillance for remote monitoring.</li>
          <li>Built-in and external camera options.</li>
          <li>SD card storage (for some models).</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Choose Our Solutions?</h2>
        <p className={styles.outro}>
          We offer a range of AI Dashcams and MDVR systems designed to meet the diverse needs of different fleets and industries. Our solutions are reliable, feature-rich, and backed by expert support to help you improve safety and operational efficiency.
        </p>
      </section>
    </div>
  );
};

export default AiDashcamsMdvrPage;