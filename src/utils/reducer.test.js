import Product, { PRICES } from '../classes/Product';
import Item from '../classes/Item';

import * as reducer from './reducer';

describe('reducer', () => {
  let state;

  beforeEach(() => {
    state = reducer.initState();
  });

  it('should add product to cart', () => {
    const newState = reducer.addToCart(state, new Product('A', PRICES['A']));
    expect(newState.cart.length).toEqual(1);
  });

  it('should remove product from cart', () => {
    state.cart = ['A'];
    const newState = reducer.removeFromCart(state, 'A');
    expect(newState.cart['A']).toBe(undefined);
  });

  it('should create action', () => {
    const newAction = reducer.createAction('type', 'payload');
    expect(newAction).toEqual({ type: 'type', payload: 'payload' });
  });

  it('calculates price for scenario A', () => {
    state.cart = [new Item('A', 1), new Item('B', 1), new Item('C', 1)];

    const price = reducer.calculatePrice(state);
    expect(price).toEqual(100);
  });

  it('calculates price for scenario B', () => {
    state.cart = [new Item('A', 5), new Item('B', 5), new Item('C', 1)];

    const price = reducer.calculatePrice(state);
    expect(price).toEqual(370);
  });

  it('calculates price for scenario C', () => {
    state.cart = [
      new Item('A', 3),
      new Item('B', 5),
      new Item('C', 1),
      new Item('D', 1),
    ];

    const price = reducer.calculatePrice(state);
    expect(price).toEqual(280);
  });
});
