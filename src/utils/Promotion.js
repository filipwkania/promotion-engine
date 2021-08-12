class Promotion {
  constructor(products = [], cost = 0) {
    this.products = products;
    this.cost = cost;
  }

  check = (cart) =>
    this.products.every((product) => cart.includes(product))
      ? this.cost
      : false;

  getProducts = () => this.products;
}

export default Promotion;
