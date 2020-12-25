import React, { useContext, useEffect } from 'react';
import { withRouter } from "react-router";
import { BasketContext, dropItems } from 'core/basket';
import styles from './styles.css';

const OrderList = ({ history }) => {
  const { basketState, basketDispatch } = useContext(BasketContext);
  const { order, basketCount } = basketState;

  useEffect(() => {
    basketCount === 0 && history.replace("/");
  }, [basketCount, history]);

  return (
    order.map((item, key) => (
      <div key={`${item.id}_${key}_${Date()}`} className={styles.order}>
        <div className={`card mb-3`}>
          <div className="row no-gutters">
            <div className="col-md-5 col-lg-4">
              <img height="180" width="240" src={item.img} className="card-img" alt={item.name} />
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card-body">
                <div className="d-flex">
                  <h5 className="card-title mb-1 mr-1">{item.pname}</h5>
                  <span className="badge badge-dark h-50 mt-auto mb-auto mr-1">{item.sname}</span>
                  <span className="badge badge-dark h-50 mt-auto mb-auto">{item.ename}</span>
                </div>
                <p className="card-text">
                  <small className="text-muted">{item.description}</small>
                </p>
                <div className="d-flex justify-content-between">
                  <p className="card-text mt-auto mb-auto">
                    <small className="text-muted"><strong>{item.price} {item.currency}</strong></small>
                  </p>
                  <button
                    type="button"
                    onClick={() => basketDispatch(dropItems(item.id))}
                    className="btn btn-outline-secondary btn-sm">
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export default withRouter(OrderList);
