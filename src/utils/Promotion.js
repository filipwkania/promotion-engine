import produce from 'immer';

class Promotion {
  constructor(products = [], cost = 0) {
    this.products = products;
    this.cost = cost;
  }

  getLabel = () => `${this.products.join()} ${this.cost}`;

  check = (cart) =>
    this.products.every((product) => cart.includes(product))
      ? this.cost
      : false;

  subtractFromCart = (cart) =>
    produce(cart, (draft) => {
      this.products.map((product) => draft.splice(draft.indexOf(product), 1));
    });
}

export default Promotion;
