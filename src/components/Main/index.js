import React, { useContext, useEffect } from 'react';
// import MainSectionInfo from './components/MainSectionInfo';
import Slider from './components/Slider';
import Products from './components/Products';
import BreadMenu from '../BreadMenu';
import { ProductContext, getFilter } from 'core/product';
import styles from './styles.css';

const Main = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { filters, isFilterLoaded } = productState;
  useEffect(
    () => {
      if (!isFilterLoaded) {
        productDispatch(getFilter())
      }
    },
    [productDispatch, isFilterLoaded]);
  return (
    <main role="main">
      {/* <MainSectionInfo /> */}
      <Slider />
      <div className={styles.filters}>
        <BreadMenu links={filters} />
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <Products />
        </div>
      </div>
    </main>
  )
};

export default Main;
