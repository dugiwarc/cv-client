import packageTypes from "./package.types";

const initialState = {
	selectedPackage: null,
	orderShowing: false
};

const packageReducer = (state = initialState, action) => {
	switch (action.type) {
		case packageTypes.SELECT_PACKAGE:
			return {
				...state,
				selectedPackage: action.payload,
				orderShowing: true
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
