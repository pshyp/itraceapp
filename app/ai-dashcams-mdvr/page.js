import React from 'react';
import styles from './ai-dashcams-mdvr.module.css'; // Make sure this CSS has styles similar to asset-tracking.module.css

const AiDashcamsMdvrPage = () => {
  const benefits = [
    "Improved Driver Safety: Real-time monitoring and alerts for risky driving behaviors.",
    "Incident Investigation: High-definition video footage for evidence.",
    "Reduced Insurance Costs: Demonstrating safety commitment can lower premiums.",
    "Enhanced Security: Monitor vehicle activity and deter theft.",
    "Optimized Fleet Operations: Gain insights into route efficiency.",
  ];

  const products = [
    {
      name: 'MC201 2K AI 2CH DashCam',
      intro: 'Advanced Dual-Channel AI Dashcam',
      description: [
        '1 built-in & 1 external cameras recording.',
        'Driving security (ADAS & DMS).',
        '4G Video Surveillance.',
      ],
      imageSrc: '/MC201.png',
    },
    {
      name: 'MC202X 1080P 2CH AI Dash Cam',
      intro: 'Compact Dual-Camera AI Solution',
      description: [
        '2 built-in cameras recording.',
        'Driving security (ADAS & DMS).',
        '4G Video Surveillance.',
      ],
      imageSrc: '/MC202X.png',
    },
    {
      name: 'MC402 1080P 4CH AI Dash Cam',
      intro: 'Comprehensive Quad-Channel AI Recording',
      description: [
        '1 built-in & 3 external cameras recording.',
        'Driving security (ADAS & DMS).',
        '4G Video Surveillance.',
      ],
      imageSrc: '/MC402_1080P_4CH_AI_DashCam.png',
    },
    {
      name: 'MC904 1080P 4CH SD card MDVR',
      intro: 'Reliable 4-Channel SD Card MDVR',
      description: [
        '4-channel recording MDVR.',
        'Driving security (ADAS, DMS, BSD).',
        '4G Video Surveillance.',
      ],
      imageSrc: '/mc904_1080p_4ch_sd_mdvr.png',
    },
    {
      name: 'MC908 1080P 8CH MDVR',
      intro: 'Expandable 8-Channel MDVR System',
      description: [
        '8-channel recording MDVR.',
        'Driving security (ADAS, DMS, BSD).',
        '4G Video Surveillance.',
      ],
      imageSrc: '/mc908_8ChannelRecorder.png',
    },
    {
      name: 'MC912 1080P 12CH MDVR',
      intro: 'High-Capacity 12-Channel Full HD MDVR',
      description: [
        '12-channel recording MDVR.',
        'Driving security (ADAS, DMS, BSD).',
        '4G Video Surveillance.',
      ],
      imageSrc: '/mdvrMc912_12ch1080p.png',
    },
  ];

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
              <li key={index} className={styles.keyFeatureItem}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          {products.map((product, index) => (
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