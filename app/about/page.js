import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={`${styles.intro} ${styles.section}`}> {/* Added styles.section */}
 {/* The image below will now have the styling of the intro section */}
 {/* This image will be centered and styled by the intro section */}
        <h1>About iTrace Africa</h1>
        <p>
          iTrace Africa is a Nairobi-based technology firm focused on delivering smart,
          remote monitoring solutions for businesses across energy, agriculture,
          logistics, and industrial sectors.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What We Do</h2>
        <ul>
          <li>Fuel Monitoring Solutions for real-time consumption visibility</li>
          <li>Remote Access for Genset, Solar Installations, and Smart Farms</li>
          <li>Cold Storage and IoT Monitoring for temperature-sensitive logistics</li>
        </ul>
        <p>
          Our technologies empower businesses to reduce losses, optimize operations,
          and make data-driven decisions.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Partners</h2>
        <div className={styles.partnerLogos}>
 <Image
 src="/communicationsauthority.png"
 alt="Communications Authority Partner Logo"
 width={100}
 height={50}
 className="partner-logo"
 loading="lazy"
 />
 <Image
 src="/EMKFKenya.png"
 alt="EMFK Kenya Partner Logo"
 width={100}
 height={50}
 className="partner-logo"
 loading="lazy"
 />
 <Image
 src="/KCIC.png"
 alt="KCIC Partner Logo"
 width={100}
 height={50}
 className="partner-logo"
 loading="lazy"
 />
 <Image
 src="/Mojaev.png"
 alt="Mojaev Partner Logo"
 width={100}
 height={50}
 className="partner-logo"
 loading="lazy"
 />


        </div>
      </section>

      <section className={styles.section}>
        <h2>Contact Us</h2>
        <p>
          📍 Limuru Rd, Opp. Jamhuri High School, Nairobi<br />
          📞 (+254) 704 777 100 / 0722 100 506 / 0751 100 506<br />
          📧 <a href="mailto:info@itraceafrica.com" className={styles.link}>info@itraceafrica.com</a><br />
          🌐 <a href="https://itraceafrica.com" target="_blank" rel="noopener noreferrer" className={styles.link}>itraceafrica.com</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>Follow Us</h2>
        <p>
          <a href="https://www.facebook.com/itrace.africa" target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a> |{' '}
          <a href="https://tiktok.com/@itraceafricatelematics" target="_blank" rel="noopener noreferrer" className={styles.link}>TikTok</a>
        </p>
      </section>
    </div>
  );
};