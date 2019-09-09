import React, { Component } from "react";
import { connect } from "react-redux";

// Graphics
import orderImage from "../../assets/images/order-image.jpg";

// Data
import data from "../../data/packages.data";

// Styles
import "./Order.scss";

class Order extends Component {
	render() {
		const { selectedPackage, orderShowing } = this.props;
		const containerStyles = {
			transform: orderShowing && "translateX(0px)"
		};
		const foundPackage = data.filter(item => item.id === selectedPackage);
		return (
			<div className='Order' style={containerStyles}>
				<div className='left'>
					<div className='image'>
						<img src={orderImage} alt='contact us' />
					</div>
					<div className='text'>
						<div className='title'>Order #1450</div>
						<div className='date'>Type: Blog</div>
					</div>
				</div>
				<div className='right'>
					<div className='title'>Let's talk</div>
					<div className='input'>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' placeholder='John Smith' />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({
	packageState: { selectedPackage, orderShowing }
}) => ({
	selectedPackage,
	orderShowing
});

export default connect(
	mapStateToProps,
	null
)(Order);
