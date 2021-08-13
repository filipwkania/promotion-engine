import produce from 'immer';
import Promotion from '../classes/Promotion';
import Product from '../classes/Product';
import Item from '../classes/Item';

export const ACTION = {
  ADD_TO_CART: 1,
  REMOVE_FROM_CART: 2,
  UPDATE_PRICE: 3,
};

export const PRICES = {
  A: 50,
  B: 30,
  C: 20,
  D: 15,
};

export const initState = () => ({
  price: 0,
  products: [
    new Product('A', PRICES['A']),
    new Product('B', PRICES['B']),
    new Product('C', PRICES['C']),
    new Product('D', PRICES['D']),
  ],
  promotions: [
    new Promotion([new Item('A', 3)], 130),
    new Promotion([new Item('B', 2)], 45),
    new Promotion([new Item('C', 1), new Item('D', 1)], 30),
  ],
  cart: [],
  lastCartUpdate: 0,
});

export const calculatePrice = (state) => {
  let price = 0;
  let noPromsLeft = false;
  produce(state, (draft) => {
    while (!noPromsLeft) {
      noPromsLeft = true;
      draft.promotions.forEach((prom) => {
        const promPrice = prom.check(draft.cart);
        if (promPrice) {
          noPromsLeft = false;
          price += promPrice;
          draft.cart = prom.subtractFromCart(draft.cart);
        }
      });
    }

    draft.cart.forEach((p) => {
      price += PRICES[p.SKU] * p.quantity;
    });
  });
  return price;
};

export const updatePrice = (state) =>
  produce(state, (draft) => {
    draft.price = calculatePrice(state);
  });

export const addToCart = (state, product) =>
  produce(state, (draft) => {
    const pIndex = state.cart.findIndex((p) => p.SKU === product.SKU);
    if (state.cart[pIndex]) {
      draft.cart[pIndex].quantity += 1;
    } else {
      draft.cart.push(new Item(product.SKU, 1));
    }
    draft.lastCartUpdate = Date.now();
  });

export const removeFromCart = (state, SKU) =>
  produce(state, (draft) => {
    draft.cart = draft.cart.filter((p) => p.SKU !== SKU);
    draft.lastCartUpdate = Date.now();
  });

export const createAction = (type, payload) => ({
  type,
  payload,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_TO_CART:
      return addToCart(state, action.payload);
    case ACTION.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case ACTION.UPDATE_PRICE:
      return updatePrice(state);
    default:
      return state;
  }
};
