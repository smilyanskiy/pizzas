import React, { createContext, useReducer } from 'react';
import { basketReducer } from './reducer';

const initialState = {
  order: [],
  isOrderLoaded: false,
  basketCount: 0,
  error: null,
};

export const BasketContext = createContext(initialState);

export const BasketProvider = ({ children }) => {
  const [basketState, basketDispatch] = useReducer(basketReducer, initialState);
  return (
    <BasketContext.Provider value={{basketState, basketDispatch}}>
      {children}
    </BasketContext.Provider>
  )
};