import produce from 'immer';

class Promotion {
  constructor(products = [], cost = 0) {
    this.products = products;
    this.cost = cost;
    this.label = `${products.map((p) => `${p.quantity} ${p.SKU}`).join(', ')} ${
      this.cost
    }`;
  }

  check = (cart) =>
    this.products.every((product) => {
      const pIndex = cart.findIndex((p) => p.SKU === product.SKU);
      return pIndex >= 0 && cart[pIndex].quantity >= product.quantity;
    })
      ? this.cost
      : false;

  subtractFromCart = (cart) =>
    produce(cart, (draft) => {
      this.products.forEach((product) => {
        const pIndex = cart.findIndex((p) => p.SKU === product.SKU);
        if (pIndex >= 0) {
          if (draft[pIndex].quantity === product.quantity) {
            draft[pIndex].quantity = 0;
          } else {
            draft[pIndex].quantity -= product.quantity;
          }
        }
      });
    });
}

export default Promotion;
