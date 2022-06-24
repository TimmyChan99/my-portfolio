import React from 'react';
import styles from './AboutMe.module.scss';
import SkillCard from './SkillCard';
import resume from '../../assets/Resume.pdf';
import { BiDownload } from 'react-icons/bi'

const AboutMe = () => (
  <div>
    <div className="headline">
      <hr />
      <h2>About Me</h2>
      <hr />
    </div>
		<div className={styles.aboutme}>
      <p>
      I&apos;m a
      {' '}
      <span>full-stack web developer</span>
      {' '}
      and open-source enthusiast with a love
      for clean code and accessible design.
      Pair-programming and remote work aficionado.
      Fluent in multiple languages, frameworks, and technologies, and
      capable of ramping up quickly and efficiently.
      </p>
		 <div className={styles.resume}>
			 <a href={resume} download>Resume</a>
       <BiDownload />
		 </div>
		</div>
		<ul>
			<SkillCard />
		</ul>
  </div>
);

export default AboutMe;
