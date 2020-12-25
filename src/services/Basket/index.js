import React, { useContext, useEffect } from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';
import { BasketContext, getOrders } from '../../core/basket';

const Basket = () => {
  const { basketState, basketDispatch } = useContext(BasketContext);
  const { basketCount } = basketState;
  useEffect(
    () => basketDispatch(getOrders()),
  [basketDispatch, basketCount]);
  return (
    <div className={styles.basket}>
      <Link className="text-muted" to={basketCount > 0 ? '/order' : '#'}>
        <img alt="desc for img" className="shop-icon" width="20" height="20" src="image/shop2.svg" />
        {basketCount > 0 &&
          <span className={styles.in_basket}>{basketCount}</span>
        }
      </Link>
    </div>
  )
};

export default Basket;
