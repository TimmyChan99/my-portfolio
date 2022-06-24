import React from 'react';
import ProjectCard from './ProjectCard';
import data from '../../assets/data';
import styles from './Works.module.scss';

const Works = () => (
  <section id="works">
    <div className="headline">
      <hr />
      <h2>My Works</h2>
      <hr />
    </div>
    <ul className={styles.project_list}>
      { data.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  </section>
);

export default Works;
