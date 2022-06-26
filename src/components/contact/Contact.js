import React from 'react';
import { SiGmail } from 'react-icons/si';
import SocialMedia from './SocialMedia';
import styles from './Contact.module.scss';

const Contact = () => (
  <section className={styles.contact} id="contact">
    <div className="headline">
      <hr />
      <h2>Get in touch</h2>
      <hr />
    </div>
    <p>
      I&apos;m always interested in hearing about new projects,
      so if you&apos;d like to chat please get in touch.
    </p>
    <SocialMedia style={styles.social_desktop} />
    <div>
      <SiGmail />
      <a href="mailto: felemenoun@gmail.com">felemenoun@gmail.com</a>
    </div>
  </section>
);

export default Contact;
