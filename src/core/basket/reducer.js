import { GET_ORDERS, ADD_ITEM, DROP_ITEM } from './actions';

export const basketReducer = (state, action) => {
  console.log('basketReducer', state, action)
  switch (action.type) {
    case GET_ORDERS:
      return { 
        ...state,
        order: action.order,
        basketCount: action.order.length,
      };
    case ADD_ITEM:
      return {
        ...state,
        order: action.order,
        basketCount: action.order.length,
      };
    case DROP_ITEM:
      return {
        ...state,
        order: action.order,
        basketCount: action.order.length,
      };
    default:
      return { ...state };
  }
};