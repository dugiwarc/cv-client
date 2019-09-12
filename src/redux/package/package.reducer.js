import packageTypes from "./package.types";

const initialState = {
  selectedPackage: null,
  orderShowing: false,
  price: 0,
  type: ""
};

const packageReducer = (state = initialState, action) => {
  switch (action.type) {
    case packageTypes.SELECT_PACKAGE:
      return {
        ...state,
        selectedPackage: action.payload,
        orderShowing: true,
        price: action.payload === 1 ? 100 : action.payload === 2 ? 200 : 500,
        type:
          action.payload === 1
            ? "Portfolio"
            : action.payload === 2
            ? "Blog"
            : "E-commerce"
      };
    case packageTypes.HIDE_ORDER:
      return {
        ...state,
        orderShowing: false
      };
    default:
      return state;
  }
};

export default packageReducer;
