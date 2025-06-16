"use client";

import styles from "./vehicle-audio-multimedia.module.css";
import { useEffect, useState } from 'react';

const VehicleAudioMultimediaPage = () => {
  // State for the visible benefit cards (now an array for staggered reveal)
  const [visibleBenefitIndices, setVisibleBenefitIndices] = useState([]);

  // Updated benefits with icons to match the "perfect design"
  const benefits = [
    { text: "PREMIUM SOUND QUALITY: Immerse yourself in crystal-clear, high-fidelity sound.", icon: "🔊" },
    { text: "CUSTOMIZATION: Tailor your audio and multimedia setup to suit your preferences and vehicle's requirements.", icon: "⚙️" },
    { text: "TOUCHSCREEN DISPLAYS: Intuitive displays provide easy access to entertainment and navigation features.", icon: "📱" },
    { text: "ENHANCED ENTERTAINMENT: Enjoy streaming music, video, and your favorite DVDs and CDs.", icon: "🎬" },
    { text: "SEAMLESS CONNECTIVITY: Stay connected with Bluetooth, Apple CarPlay, Android Auto, and more.", icon: "🔗" },
  ];

  const productExamples = [
    {
      name: 'Car Stereos',
      intro: 'Upgrade Your In-Car Audio Hub',
      description: [
        'Upgrade your car with the latest car stereos equipped with connectivity features like Bluetooth, USB support, and FM radio. Enjoy easy access to your music library on the go.',
      ],
      imageSrc: '/Car_stereo.png', // Corrected image path based on your update
    },
    {
      name: 'Car Speakers',
      intro: 'Replace for Clearer, More Detailed Sound',
      description: [
        'Replace your factory speakers with high-performance ones that deliver clearer, more detailed sound. Upgrade your car’s sound system with premium car speakers for a better audio experience.',
      ],
      imageSrc: '/car_speaker.png', // Corrected image path based on your update
    },
    {
      name: 'Amplifiers',
      intro: 'Enhance Your Sound System\'s Performance',
      description: [
        'Enhance your sound system with car amplifiers. These powerful amplifiers boost your audio system’s performance, delivering deep, dynamic sound that brings your music to life.',
      ],
      imageSrc: '/Amplifier.png', // Corrected image path based on your update
    },
    {
      name: 'Subwoofers',
      intro: 'Add Deep, Heart-Pounding Low-End',
      description: [
        'For those who love bass, our subwoofers add that deep, heart-pounding low-end that makes your car sound system stand out. Add more bass to your system for that powerful audio experience.',
      ],
      imageSrc: '/Subwoofer.png', // Corrected image path based on your update
    },
    {
      name: 'Multimedia Receivers',
      intro: 'Large Touchscreen Displays and Compatibility',
      description: [
        'Our multimedia receivers feature large touchscreen displays and compatibility with various media formats. Navigate easily, stream music, and enjoy seamless multimedia integration.',
      ],
      imageSrc: '/multimedia_receivers.png', // Corrected image path based on your update
    },
    {
      name: 'Backup Cameras',
      intro: 'Improve Safety and Driving Experience',
      description: [
        'Improve your safety and driving experience with backup cameras that provide a clear view of your surroundings while reversing. Stay safe and avoid accidents with enhanced visibility.',
      ],
      imageSrc: '/backupcamera.png', // Corrected image path based on your update
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
      requestAnimationFrame(() => { // Using requestAnimationFrame for better animation performance
        setTimeout(() => {
          intro.classList.add(styles.show);
        }, 300 * index);
      });
    });
  }, []);

  return (
    <div className={styles.vehicleAudioMultimediaContainer}> {/* Renamed main container class */}
      <div className={styles.headerRow}>
        <h1 className={styles.vehicleAudioMultimediaTitle}> {/* Renamed title class */}
          Premium Vehicle Audio & Multimedia Systems for an Unforgettable Journey
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
          {productExamples.map((product, index) => (
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
          href="https://wa.me/254722100506" // Corrected WhatsApp number as per previous context
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

export default VehicleAudioMultimediaPage;