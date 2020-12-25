import React, { useContext } from 'react';
import OrderList from './OrderList';
import { BasketContext } from 'core/basket';
import { withRouter } from "react-router";
import Popup from 'services/Popup';
import styles from './styles.css';

const Order = ({ history }) => {
  const { basketState } = useContext(BasketContext);
  const { basketCount } = basketState;
  return (
    <Popup title="Ваш заказ:">
      <div className="container-fluid">
        <OrderList />
      </div>
      <div className={`d-flex ${styles.buttons}`}>
        <button
          disabled={basketCount <= 0}
          type="button"
          onClick={() => history.push("/delivery")}
          className="btn btn-outline-success">
          Офрмить заказ
        </button>
      </div>
    </Popup>
  );
};

export default withRouter(Order);
