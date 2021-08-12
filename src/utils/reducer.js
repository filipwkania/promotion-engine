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

export const PRICES = {
  A: 50,
  B: 30,
  C: 20,
  D: 15,
};

export const initialState = {
  price: 0,
  products: ['A', 'B', 'C'],
  promotions: [
    new Promotion(['A', 'A', 'A'], 130),
    new Promotion(['B', 'B'], 45),
    new Promotion(['C', 'D'], 30),
  ],
  cart: [],
};

export const calculatePrice = (cart, promotions) => {
  let price = 0;
  let tempCart = cart.slice();
  let noPromsLeft;

  while (tempCart.length > 0) {
    noPromsLeft = true;

    promotions.forEach((prom) => {
      const promPrice = prom.check(tempCart);
      if (promPrice) {
        noPromsLeft = false;
        price += promPrice;
        tempCart = prom.subtractFromCart(tempCart);
      }
    });

    if (noPromsLeft) {
      tempCart.forEach((product) => {
        price += PRICES[product];
      });
      tempCart = [];
    }
  }

  return price;
};

export const addProduct = (state, product) => {};

export const addPromotion = (state, promotion) => {};

export const calcPromotion = (state) => {};

export const updatePrice = (state, price) =>
  produce(state, (draft) => {
    draft.price = calculatePrice(state.cart, state.promotions);
  });

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
