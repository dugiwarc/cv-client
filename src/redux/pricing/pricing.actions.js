import pricingTypes from "./pricing.types";
import axios from "axios";

export const togglePricing = () => dispatch => {
  dispatch({
    type: pricingTypes.TOGGLE_PRICING
  });
};

export const clickPricing = formData => async dispatch => {
  console.log(formData);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      `https://tusk-server.herokuapp.com/order`,
      formData,
      config
    );
    dispatch({
      type: pricingTypes.CLICK_PRICING,
      payload: res.data
    });
    console.log("SUCCESS");
  } catch (error) {
    console.log("ERROR");

    console.log(error);
  }
};
