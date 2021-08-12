import Promotion from './Promotion';

describe('Promotions', () => {
  it('should create promotions properly', () => {
    const promo = new Promotion();
    expect(promo.cost).toEqual(0);
    expect(promo.products.length).toEqual(0);

    const promo2 = new Promotion(['A', 'B'], 125);
    expect(promo2.cost).toEqual(125);
    expect(promo2.products.length).toEqual(2);
  });

  it('should check promotion properly', () => {
    const cart = ['A', 'B', 'C'];
    const promo = new Promotion(['A', 'B'], 100);

    expect(promo.check(cart)).toEqual(promo.cost);
    expect(promo.check(['A', 'C'])).toEqual(false);
    expect(promo.check([])).toEqual(false);
  });

  it('should remove promotion products from cart', () => {
    const cart = ['A', 'A', 'B'];
    const promotion = new Promotion(['A', 'A'], 50);
    const newCart = promotion.subtractFromCart(cart);

    expect(newCart).toEqual(['B']);
  });
});
