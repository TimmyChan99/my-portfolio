import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project }) => {
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
      { screenWidth < 500 ? (<img src={project.mobile_img} alt="project screenshot" className={styles.project_img} />) : (<img src={project.desktop_img} alt="project screenshot" className={styles.project_img} />)}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ProjectCard;
