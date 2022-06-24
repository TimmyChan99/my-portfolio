import React from 'react';
import styles from './ProjectCard.module.scss';
import budget from '../../images/mybudget.png';
//import Long from '../../images/long.png';

const ProjectCard = () => (
  <div className={styles.card_container}>
    <div className={styles.project_info}>
      <h3>myBudget</h3>
      <ul>
        <li>Rails</li>
        <li>Ruby</li>
        <li>Sass</li>
        <li>HTML</li>
        <li>RSpec</li>
      </ul>
      <p>
        myBudget is a mobile web application where you can manage your budget:
        you have a list of transactions associated with a category,
        so that you can see how much money you spent and on what.
      </p>
    </div>
    <div className={styles.links_btn}>
      <button type="button">Source</button>
      <button type="button">Live</button>
    </div>
    <img src={budget} alt="mybugdet" className={styles.project_image} />
    {/* <img src={Long} alt="mybugdet" className={styles.project_img} /> */}
  </div>
);

export default ProjectCard;
