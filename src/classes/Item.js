import { immerable } from 'immer';

class Item {
  [immerable] = true;
  constructor(SKU, quantity = 1) {
    this.SKU = SKU;
    this.quantity = quantity;
  }
}

export default Item;
