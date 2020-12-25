import { getOrderList, addItem, dropItem } from '../product/api';

export const ADD_ITEM = 'ADD_ITEM';
export const DROP_ITEM = 'DROP_ITEM';
export const GET_ORDERS = 'GET_ORDERS';

export const getOrders = () => ({
  type: GET_ORDERS,
  order: getOrderList(),
});

export const addItems = params => ({
  type: ADD_ITEM,
  order: addItem(params),
});

export const dropItems = (orderId) => ({
  type: DROP_ITEM,
  order: dropItem(orderId),
});
