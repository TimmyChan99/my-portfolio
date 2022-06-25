import React from 'react';
import { SiGmail } from 'react-icons/si';
import SocialMedia from './SocialMedia';
import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.contact}>
    <div className="headline">
      <hr />
      <h2>Get in touch</h2>
      <hr />
    </div>
    <p>
      I&apos;m always interested in hearing about new projects,
      so if you&apos;d like to chat please get in touch.
    </p>
    <SocialMedia />
    <div>
      <SiGmail />
      <a href="mailto: felemenoun@gmail.com">felemenoun@gmail.com</a>
    </div>
  </div>
);

export default Contact;
