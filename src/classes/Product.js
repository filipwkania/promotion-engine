export const PRICES = {
  A: 50,
  B: 30,
  C: 20,
  D: 15,
};

class Product {
  constructor(SKU, price) {
    this.SKU = SKU;
    this.price = price;
  }
}

export default Product;
