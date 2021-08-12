import * as reducer from './reducer';
import Promotion from './Promotion';

describe('reducer', () => {
  let state = reducer.initialState;
  beforeEach = () => {
    state = reducer.initialState;
  };

  it('should add product to cart', () => {
    const newState = reducer.addToCart(state, 'A');
    expect(newState.cart[0]).toEqual('A');
  });

  it('should remove product from cart', () => {
    state.cart = ['A'];
    const newState = reducer.removeFromCart(state, 0);
    expect(newState.cart.length).toEqual(0);
  });

  it('should create action', () => {
    const newAction = reducer.createAction('type', 'payload');
    expect(newAction).toEqual({ type: 'type', payload: 'payload' });
  });

  it('should calculate prices', () => {
    const cart = ['A', 'A', 'D'];
    const promotions = [new Promotion(['A', 'D'], 50)];

    const price = reducer.calculatePrice(cart, promotions);
    expect(price).toEqual(50 + reducer.PRICES.A);
  });
});
