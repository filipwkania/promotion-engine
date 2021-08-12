import produce from 'immer';
import Promotion from './Promotion';

export const ACTION = {
  ADD_PRODUCT: 1,
  ADD_PROMOTION: 2,
  ADD_TO_CART: 3,
  REMOVE_FROM_CART: 4,
  CALC_PROMOTION: 5,
  UPDATE_PRICE: 6,
};

export const initialState = {
  price: 0,
  products: ['A', 'B', 'C'],
  promotions: [new Promotion([])],
  cart: [],
};

export const addProduct = (state, product) => {};

export const addPromotion = (state, promotion) => {};

export const calcPromotion = (state) => {};

export const updatePrice = (state, price) => {};

export const addToCart = (state, product) =>
  produce(state, (draft) => {
    draft.cart = [...state.cart, product];
  });

export const removeFromCart = (state, productIndex) =>
  produce(state, (draft) => {
    draft.cart.splice(productIndex, 1);
  });

export const createAction = (type, payload) => ({
  type,
  payload,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_PRODUCT:
      return addProduct(state, action.payload);
    case ACTION.ADD_TO_CART:
      return addToCart(state, action.payload);
    case ACTION.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case ACTION.ADD_PROMOTION:
      return addPromotion(state, action.payload);
    case ACTION.CALC_PROMOTION:
      return calcPromotion(state);
    case ACTION.UPDATE_PRICE:
      return updatePrice(state, action.payload);
    default:
      return false;
  }
};
