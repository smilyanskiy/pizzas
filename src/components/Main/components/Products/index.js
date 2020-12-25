import React, { useContext, useEffect, useState, useCallback } from 'react';
import { ProductContext, getProducts } from 'core/product';
import { BasketContext, addItems } from 'core/basket';
import { useParams } from 'react-router';
import styles from './styles.css';
import AdditionsItem from './additionsItem';

const Products = () => {
  const { category } = useParams();

  //get state
  const { productState, productDispatch } = useContext(ProductContext);
  const { basketDispatch } = useContext(BasketContext);
  const { products, isProductLoaded, extrasTypes, sizeTypes } = productState;

  // state for radio buttons
  const [additionCost, setAdditionCost] = useState([]);
  const [sizeCost, setSizeCost] = useState([]);

  //load data on page start
  useEffect(() => {
    if (!isProductLoaded) {
      productDispatch(getProducts())
    }
  }, [productDispatch, isProductLoaded]);

  // reset price by filter
  useEffect(() => {
    setAdditionCost([]);
    setSizeCost([]);
  }, [category]);

  const filterByCategory = useCallback(item =>
    category ? item?.category?.includes(parseInt(category, 10)) : item
  , [category]);

  //send to basket state
  const addToOrder = productId => basketDispatch(addItems({
    productId,
    extraId: additionCost[productId] || 0,
    sizeId: sizeCost[productId] || 0,
  }));

  //set price for different product
  const setPrice = (price, id) => {
    let sizePrice = 0;
    let extraPrice = 0;
    if (sizeCost && sizeCost[id]) {
      sizePrice = sizeTypes[sizeCost[id]].price;
    }
    if (additionCost && additionCost[id]) {
      extraPrice = extrasTypes[additionCost[id]].price;
    }
    return price + sizePrice + extraPrice;
  };
  return (
    <div className="row justify-content-center">
      {products.filter(filterByCategory).map((pizzas, key) =>
        (
          <div key={`${key}_${pizzas.name}`}
            className={`col-12 col-md-6 col-lg-4 ${styles.flex_fixed_width_item}`}>
            <div className={`card mb-4 ${styles.box_shadow}`}>
              <img className="card-img-top" height="180" width="320" src={pizzas.img} alt="" />
              <div className="card-body">
                <p className="card-text">{pizzas.name}</p>
                <div className={`align-items-center ${styles.grid}`}>
                  <AdditionsItem
                    list={sizeTypes}
                    mod="size"
                    prevPrice={sizeCost}
                    changePrice={setSizeCost}
                    productId={pizzas.id}
                  />
                  <AdditionsItem
                    list={extrasTypes}
                    mod="extra"
                    prevPrice={additionCost}
                    changePrice={setAdditionCost}
                    productId={pizzas.id}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button"
                      onClick={() => addToOrder(pizzas.id)}
                      className="btn btn-sm btn-outline-success">
                      Добавить
                    </button>
                  </div>
                  <small className="text-muted">
                    <b>{setPrice(pizzas.price, pizzas.id)}</b> {pizzas.currency}
                  </small>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
};

export default Products;