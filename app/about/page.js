import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.intro}>
        <Image src="/LogoMobi.jpeg" alt="iTrace Africa Logo" width={160} height={160} />
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
          <Image src="/images/ca.png" alt="Communications Authority" width={100} height={50} />
          <Image src="/images/emfk.png" alt="EMFK Kenya" width={100} height={50} />
          <Image src="/images/kcic.png" alt="KCIC" width={100} height={50} />
          <Image src="/images/mojaev.png" alt="Mojaev" width={100} height={50} />
          <Image src="/images/netaev.png" alt="Neta EV" width={100} height={50} />
          <Image src="/images/stecolcorp.png" alt="Stecolcorp" width={100} height={50} />
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