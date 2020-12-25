import React from 'react';
import styles from './styles.css';

const MainSectionInfo = () => (
  <div className={`${styles.jumbotron} text-center`}>
    <div className={`container ${styles.background}`}>
      <h1 className={styles.jumbotron_heading}>Домашняя пицца</h1>
      <p className="lead muted">
        Одним из самых популярных и простых видов бездрожжевого хлеба можно назвать содовый.
      </p>
    </div>
  </div>
);

export default MainSectionInfo;
