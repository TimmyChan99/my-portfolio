import React from 'react';
import styles from './ProjectCard.module.scss';
import budget from '../../images/mybudget.png';

const ProjectCard = () => (
  <div className={styles.card_container}>
    <h3>myBudget</h3>
    <img src={budget} alt="mybugdet" className={styles.project_image} />
    <p>
      myBudget is a mobile web application where you can manage your budget:
      you have a list of transactions associated with a category,
      so that you can see how much money you spent and on what.
    </p>
    <ul>
      <li>Rails</li>
      <li>Ruby</li>
      <li>Sass</li>
      <li>HTML</li>
      <li>RSpec</li>
    </ul>
    <div className={styles.links_btn}>
      <button type="button">Source</button>
      <button type="button">Live</button>
    </div>
  </div>
);

export default ProjectCard;
