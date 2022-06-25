import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutMe.module.scss';

const SkillCard = ({ skill }) => (
  <div className={styles.skill_card}>
    <h4>{skill.title}</h4>
    <ul>
      {skill.list.map((item) => (
        <li key={item.name}>
          <item.icon />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

SkillCard.propTypes = {
  skill: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default SkillCard;
