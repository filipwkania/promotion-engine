import Item from './Item';
import Promotion from './Promotion';

describe('Promotions', () => {
  it('should create promotions properly', () => {
    const promo = new Promotion();
    expect(promo.cost).toEqual(0);
    expect(promo.products.length).toEqual(0);

    const promo2 = new Promotion([new Item('A', 1), new Item('B', 1)], 125);
    expect(promo2.cost).toEqual(125);
    expect(promo2.products.length).toEqual(2);
  });

  it('should check promotion properly', () => {
    const cart = [new Item('A', 1), new Item('B', 1), new Item('C', 1)];
    const promo = new Promotion([new Item('A', 1), new Item('B', 1)], 100);

    expect(promo.check(cart)).toEqual(promo.cost);
    expect(promo.check([])).toEqual(false);
  });

  it('should remove promotion products from cart', () => {
    const cart = [new Item('A', 2), new Item('B', 1)];
    const promotion = new Promotion([new Item('A', 2)], 50);
    const newCart = promotion.subtractFromCart(cart);

    expect(newCart).toEqual([new Item('A', 0), new Item('B', 1)]);
  });
});
