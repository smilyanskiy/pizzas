import React, { useState } from 'react';
import styles from './styles.css';

const AdditionsItem = ({
  changePrice,
  list,
  productId,
  mod,
  prevPrice,
}) => {
  const [active, setActive] = useState([0, productId, mod]);
  const [additionsId, productsId, type] = active;
  // set active addditions or size and price
  const isActive = (itemId) => {
    if (productsId === productId && type === mod) {
      setActive([itemId, productId, mod]);
      changePrice({ ...prevPrice, [productId]: itemId });
    }
  }

  return (
    <div className={`btn-group btn-group-toggle btn-group-sm mb-3 ${styles.additions}`}>
      {list.map(item => (
        <label
          key={`${item.name}_${item.id}`}
          onChange={() => isActive(item.id)}
          className={`btn btn-outline-secondary ${additionsId === item.id && 'active'}`}
        >
          <input
            readOnly
            type="radio"
            className={styles.inputRadio}
            name={mod}
            value={item.id}
            checked={additionsId === item.id}
          />
          {item.name}
        </label>
      ))}
    </div>
  );
}

export default AdditionsItem;