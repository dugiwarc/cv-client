import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

// Styles
import "./StripeButton.scss";

class StripeButton extends React.Component {
	onToken = token => {
		axios({
			url: "https://tusk-server.herokuapp.com/payment",
			method: "post",
			data: {
				amount: this.props.price * 100,
				token,
				currency: "EUR"
			}
		})
			.then(response => {
				alert("succesful payment");
				console.log(response);
			})
			.catch(error => {
				console.log("Payment Error: ", error);
				alert(
					"There was an issue with your payment! Please make sure you use the provided credit card."
				);
			});
	};
	handleClick = () => {
		axios({
			url: "https://tusk-server.herokuapp.com/jell-o",
			method: "get"
		})
			.then(response => {
				console.log(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	};
	render() {
		const { price } = this.props;
		const priceForStripe = price * 100;
		const publisheableKey = "pk_live_m7DjSwosTrieGNYIOWYpqiwl";
		return (
			<div className='StripeButton' onClick={this.handleClick}>
				<StripeCheckout
					panelLabel='Place order for'
					name='Tusk'
					description='Office Services'
					amount={priceForStripe}
					currency='EUR'
					stripeKey={publisheableKey}
					token={this.onToken}
				/>
			</div>
		);
	}
}

export default StripeButton;
