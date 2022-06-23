import React from 'react';
import ProjectCard from './ProjectCard';

const Works = () => (
  <section id="works">
    <div className="headline">
      <hr />
      <h2>My Works</h2>
      <hr />
    </div>
    <ul>
      <li>
        <ProjectCard />
      </li>
    </ul>
  </section>
);

export default Works;
