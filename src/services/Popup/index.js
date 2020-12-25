import React, { useState, useEffect, useContext, useCallback } from 'react';
import { BasketContext } from 'core/basket';
import { withRouter } from "react-router";
import styles from './styles.css';

const Popup = ({ history, children, title }) => {
  const [isShow, setIsShow] = useState(true);
  const { basketState } = useContext(BasketContext);
  const { basketCount } = basketState;

  const goBack = useCallback(() => {
    setIsShow(false);
    history.replace("/");
  }, [history]);

  useEffect(() => {
    (basketCount > 0 && !isShow) && goBack();
  }, [basketCount, goBack, isShow]);

  return (
    isShow && (
      <div className={styles.overlay}>
        <div className={`container ${styles.popup}`}>
          <div>
            <p className={styles.popup_title}>{title}</p>
            <button className={styles.close} onClick={() => goBack()}>&times;</button>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    )
  );
};


export default withRouter(Popup);