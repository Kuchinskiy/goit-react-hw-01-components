import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const randomColor = function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColor = `#${r.toString(16) + g.toString(16) + b.toString(16)}`;
  return randomColor;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
      <ul className={styles.statList}>
        {stats.map(elem => (
          <li
            key={elem.id}
            className={styles.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{elem.label}</span>
            <span className={styles.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
