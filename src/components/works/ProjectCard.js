import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => (
  <div className={styles.card_container}>
    <div className={styles.project_info}>
      <h3>{project.name}</h3>
      <ul>
        {project.tech_list.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <p>{project.description}</p>
      <div className={styles.links_btn}>
        <button type="button">
          <a href={project.repo_link}>Source</a>
        </button>
        <button type="button">
          <a href={project.live_link}>Live</a>
        </button>
      </div>
    </div>
    <img src={project.mobile_img} alt="project screenshot" className={styles.project_img} />
  </div>
);

export default ProjectCard;
