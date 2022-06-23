import React from 'react';
import styles from './Home.module.scss';

function Home() {
  return (
    <section className={styles.home_section}>
      <div>
        <span>Hey there. </span>
        <span>I&lsquo;m</span>
        <h1>Fatima Ezzahra</h1>
        <h2>I&lsquo;m a software developer</h2>
      </div>
      <p>
        I can help you build a product , feature or website Look through some
        of my work and experience! If you like what you see and have a project
        you need coded, don&lsquo;t hestiate to contact me.
      </p>
      <button type="button">Contact Me</button>
    </section>
		
  );
}

export default Home;
