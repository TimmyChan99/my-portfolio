import React from 'react';
import {
  SiGithub, SiLinkedin, SiAngellist, SiTwitter,
} from 'react-icons/si';
import styles from './Contact.module.scss';
import stylesDesktop from '../home/Home.module.scss';

const SocialMedia = () => (

  <ul className={`${styles.social_media} ${stylesDesktop.social_media_desktop}`}>
    <li>
      <a href="https://github.com/TimmyChan99">
        <SiGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/fatima-ezzahra-elemenoun/">
        <SiLinkedin />
      </a>
    </li>
    <li>
      <a href="https://angel.co/u/fatima-ezzahra-elmenoun">
        <SiAngellist />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/elemenoun">
        <SiTwitter />
      </a>
    </li>
  </ul>
);

export default SocialMedia;
