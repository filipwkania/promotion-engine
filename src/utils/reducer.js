export const ACTION = {
  ADD_PRODUCT: 1,
  ADD_PROMOTION: 2,
  CALC_PROMOTION: 3,
  UPDATE_PRICE: 4,
};

export const addProduct = (state, product) => {};
export const addPromotion = (state, promotion) => {};
export const calcPromotion = (state) => {};
export const updatePrice = (state, price) => {};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_PRODUCT:
      return addProduct(state, action.payload);
    case ACTION.ADD_PROMOTION:
      return addPromotion(state, action.payload);
    case ACTION.CALC_PROMOTION:
      return calcPromotion(state);
    case ACTION.UPDATE_PRICE:
      return updatePrice(state, action.payload);
    default:
      return false;
  }
};
