import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ name, position, aboutMe, linkedin, github, cvLink, profileImage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.descripcion}>
          <h1>{name}</h1>
          <h2>{position}</h2>
          <p>{aboutMe}</p>
          <div className={styles.icons}>
            <a href={linkedin} className={styles.hoverText} target="_blank" rel="noopener noreferrer">
              <span className={styles.tooltipText} id="fade">
                LinkedIn
              </span>
              <i className="bi bi-linkedin"></i>
            </a>
            <a href={github} className={styles.hoverText} target="_blank" rel="noopener noreferrer">
              <span className={styles.tooltipText} id="fade">
                GitHub
              </span>
              <i className="bi bi-github"></i>
            </a>
            <a href={cvLink} className={styles.hoverText} target="_blank" rel="noopener noreferrer">
              <span className={styles.tooltipText} id="fade">
                Resume
              </span>
              <i className="bi bi-file-earmark-arrow-down"></i>
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={profileImage} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Card;
