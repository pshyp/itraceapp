"use client";

import styles from "./autolocksmith-services.module.css";
import { useEffect, useState } from 'react';

const AutolocksmithServicesPage = () => {
  // State for the visible benefit cards (now an array for staggered reveal)
  const [visibleBenefitIndices, setVisibleBenefitIndices] = useState([]);

  // Updated benefits with icons to match the "perfect design"
  const benefits = [
    { text: "Emergency lockout assistance", icon: "🔑" },
    { text: "Car key cutting and duplication", icon: "✂️" },
    { text: "Transponder key programming", icon: "🖥️" },
    { text: "Ignition repair and replacement", icon: "🛠️" },
    { text: "Broken key extraction", icon: "🤏" },
    { text: "Remote and fob programming", icon: "🎮" },
    { text: "Vehicle security system repair", icon: "🚨" },
    { text: "Trunk lockout services", icon: "📦" },
    { text: "Motorcycle key services", icon: "🏍️" },
    { text: "Key fob battery replacement", icon: "🔋" },
  ];

  const serviceExamples = [
    {
      name: 'Emergency Lockout',
      intro: 'Locked out of your car?',
      description: [
        'Fast and reliable assistance when you\'re locked out of your vehicle.',
      ],
      imageSrc: '/emergency_lock.png',
    },
    {
      name: 'Car Key Cutting',
      intro: 'Need a new car key?',
      description: [
        'Precision key cutting and duplication for most vehicle makes and models.',
      ],
      imageSrc: '/key_cutting.png',
    },
    {
      name: 'Transponder Key Programming',
      intro: 'New key not working?',
      description: [
        'Programming of transponder keys and key fobs to your vehicle\'s immobilizer system.',
      ],
      imageSrc: '/Transponder.png',
    },
    {
      name: 'Ignition Repair',
      intro: 'Issues with your ignition?',
      description: [
        'Repair or replacement of faulty ignition cylinders and switches.',
      ],
      imageSrc: '/ignition.png',
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
    <div className={styles.autolocksmithServicesContainer}> {/* Renamed main container class */}
      <div className={styles.headerRow}>
        <h1 className={styles.autolocksmithServicesTitle}> {/* Renamed title class */}
          Expert Autolocksmith Services for All Your Vehicle Key & Lock Needs
        </h1>

        {/* Removed the static WhatsApp <p> tag here as per the perfect design template */}

        {/* Updated Benefits Section with Animated Benefit Cards */}
        <div className={styles.benefitsSection}>
          <h2 className={styles.keyFeaturesTitle}>Key Benefits</h2>
          <div className={styles.benefitsGrid}> {/* Changed to div with benefitsGrid */}
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${styles.benefitCard} ${ // Apply benefitCard styles
                  visibleBenefitIndices.includes(index) ? styles.visible : ''
                }`}
              >
                <span className={styles.benefitIcon}>{benefit.icon}</span> {/* Added icon */}
                <p className={styles.benefitText}>{benefit.text}</p> {/* Added benefitText */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.responsiveImageGrid}>
          {serviceExamples.map((service, index) => (
            <div key={index} className={styles.imageItem}>
              {service.intro && (
                <p className={`${styles.deviceIntro} ${styles.initialHidden}`}>
                  {service.intro}
                </p>
              )}
              <div className={styles.imageContainer}>
                <img
                  src={service.imageSrc}
                  alt={`${service.name} - ${service.intro}`}
                  className={styles.responsiveImage}
                />
              </div>
              <p className={styles.imageName}>{service.name}</p>
              <ul className={styles.descriptionList}>
                {service.description.map((desc, idx) => (
                  <li key={idx} className={styles.descriptionItem}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Banner (primary contact) */}
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

export default AutolocksmithServicesPage;