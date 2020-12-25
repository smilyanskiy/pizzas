import {
  getProductsList,
  getFilterList,
  sizeTypes,
  extrasTypes,
} from './api';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_FILTER = 'GET_FILTER';

export const getProducts = () => ({
  type: GET_PRODUCTS,
  products: getProductsList(),
  sizeTypes: sizeTypes(),
  extrasTypes: extrasTypes(),
});

export const getFilter = () => ({
  type: GET_FILTER,
  filters: getFilterList(),
});
