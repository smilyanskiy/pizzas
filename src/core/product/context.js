import React, { createContext, useReducer } from 'react';
import { productsReducer } from './reducer';

const initialState = {
  products: [],
  filters: [],
  extrasTypes: [],
  sizeTypes: [],
  error: null,
  isProductLoaded: false,
  isFilterLoaded: false,
};

export const ProductContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productsReducer, initialState);
  return (
    <ProductContext.Provider value={{productState, productDispatch}}>
      {children}
    </ProductContext.Provider>
  )
};