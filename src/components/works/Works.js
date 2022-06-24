import React from 'react';
import ProjectCard from './ProjectCard';
import data from '../../images/data';

const Works = () => (
  <section id="works">
    <div className="headline">
      <hr />
      <h2>My Works</h2>
      <hr />
    </div>
    <ul>
      { data.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  </section>
);

export default Works;
