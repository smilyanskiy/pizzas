import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom'

const BreadMenu = ({ links }) => ( 
  links.map((item, key) => {
    return (
      <Link
        to={`/${item.category}`}
        key={`${item.category}_${key}`}
        className={`${styles.nav_button} p-2 text-muted`}
      >
        {item.name}
      </Link>
    )
  })
);

export default BreadMenu;
