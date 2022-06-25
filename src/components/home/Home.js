import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import SocialMedia from '../contact/SocialMedia';

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

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
      <button type="button">
        <a href="#contact">Contact Me</a>
      </button>
      { (screenWidth > 500) && (<SocialMedia />)}
    </section>
  );
}

export default Home;
