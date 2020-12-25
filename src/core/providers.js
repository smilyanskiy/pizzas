
import React from 'react';
import { ProductsProvider } from './product';
import { BasketProvider } from './basket';

const mapProviders = [
  ProductsProvider,
  BasketProvider,
];

const MainProvider = ({ children }) =>
  mapProviders.reverse().reduce((acc, Provider) => {
    return <Provider>{acc}</Provider>
}, children);

export default MainProvider;
