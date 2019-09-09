import packageTypes from "./package.types";

export const selectPackage = packageID => dispatch => {
	dispatch({
		type: packageTypes.SELECT_PACKAGE,
		payload: packageID
	});
};

export const hideOrder = () => dispatch => {
	dispatch({
		type: packageTypes.HIDE_ORDER
	});
};
