import React from 'react';
import styles from './contact.module.css'; // Assuming you'll create a contact.module.css
import { phoneNumber1, phoneNumber2, emailAddress } from '../Header/header';

function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.info}>
        Feel free to reach out to us using the contact information below:
      </p>
      <div className={styles.contactDetails}>
        <p>Phone 1: <a href={`tel:${phoneNumber1}`} className={styles.link}>{phoneNumber1}</a></p>
        <p>Phone 2: <a href={`tel:${phoneNumber2}`} className={styles.link}>{phoneNumber2}</a></p>
        <p>Email: <a href={`mailto:${emailAddress}`} className={styles.link}>{emailAddress}</a></p>
      </div>
    </div>
  );
}

export default ContactPage;