import { GET_PRODUCTS, GET_FILTER } from './actions';

export const productsReducer = (state, action) => {
  console.log('productsReducer', state, action)
  switch (action.type) {
    case GET_PRODUCTS:
      return { 
        ...state, 
        products: action.products,
        extrasTypes: action.extrasTypes,
        sizeTypes: action.sizeTypes,
        isProductLoaded: true,
      };
    case GET_FILTER:
      return {
        ...state,
        filters: action.filters,
        isFilterLoaded: true,
      };
    default:
      return { ...state };
  }
};