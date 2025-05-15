import React from 'react';

function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.info}>
        Feel free to reach out to us using the contact information below:
      </p>
      <div className={styles.contactDetails}>
        <p>Phone 1: <a href="tel:+254704777100" className={styles.link}>(+254) 704 777 100</a></p>
        <p>Phone 2: <a href="tel:0722100506" className={styles.link}>0722 100 506</a></p>
        <p>Email: <a href="mailto:info@itraceafrica.com" className={styles.link}>info@itraceafrica.com</a></p>
      </div>
    </div>
  );
}

export default ContactPage;