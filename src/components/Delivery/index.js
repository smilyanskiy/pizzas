import React, { useContext } from 'react';
import { BasketContext } from 'core/basket';
import Popup from 'services/Popup';
// import styles from './styles.css';

const Delivery = () => {
  const { basketState } = useContext(BasketContext);
  const { basketCount } = basketState;
  return (
    <Popup title="Оформить заказ:">
      <div className="container-fluid">
      </div>
      <div className="d-flex align-content-center">
        <button
          disabled={basketCount <= 0}
          type="button"
          className="btn btn-outline-success">
          Подтвердить
        </button>
      </div>
    </Popup>
  );
};

export default Delivery;