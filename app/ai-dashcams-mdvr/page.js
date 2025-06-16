'use client';
import React, { useEffect, useState } from 'react';
import styles from './ai-dashcams-mdvr.module.css';

const AiDashcamsMdvrPage = () => {
  // State for the visible benefit cards (now an array for staggered reveal)
  const [visibleBenefitIndices, setVisibleBenefitIndices] = useState([]);

  // Updated benefits with icons to match the "perfect design"
  const benefits = [
    { text: "Improved Driver Safety: Real-time monitoring and alerts for risky driving behaviors.", icon: "🚦" },
    { text: "Incident Investigation: High-definition video footage for evidence.", icon: "🎥" },
    { text: "Reduced Insurance Costs: Demonstrating safety commitment can lower premiums.", icon: "📉" },
    { text: "Enhanced Security: Monitor vehicle activity and deter theft.", icon: "🛡️" },
    { text: "Optimized Fleet Operations: Gain insights into route efficiency.", icon: "🛣️" },
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

  useEffect(() => {
    // Staggered reveal for benefit cards
    benefits.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBenefitIndices((prevIndices) => [...prevIndices, index]);
      }, 200 * index); // Adjust delay as needed for desired effect
    });
  }, [benefits.length]);

  useEffect(() => {
    const intros = document.querySelectorAll(`.${styles.deviceIntro}`);
    intros.forEach((intro, index) => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          intro.classList.add(styles.show);
        }, 300 * index);
      });
    });
  }, []);

  return (
    <div className={styles.aiDashcamsMdvrContainer}> {/* Renamed main container class */}
      <div className={styles.headerRow}>
        <h1 className={styles.aiDashcamsMdvrTitle}> {/* Renamed title class */}
          AI Dashcams and MDVR Solutions for Advanced Fleet Safety & Management
        </h1>

        {/* Updated Benefits Section with Animated Benefit Cards */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.keyFeaturesTitle}>Key Benefits</h2>
          <div className={styles.benefitsGrid}>
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

      {/* Floating WhatsApp Banner */}
      <div className={styles.floatingWhatsappBanner}>
        <a
          href="https://wa.me/254722100506"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp" className={styles.whatsappIcon} />
          WhatsApp Us!
        </a>
      </div>
    </div>
  );
};

export default AiDashcamsMdvrPage;