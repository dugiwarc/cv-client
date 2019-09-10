import React from "react";
import { connect } from "react-redux";

// Styles
import "./Header.scss";

// Actions
import { togglePricing } from "../../redux/pricing/pricing.actions";

class Header extends React.Component {
	render() {
		const { togglePricing, isActive, orderShowing } = this.props;
		return (
			<div className='Header'>
				<div className='left'>
					<h2>Curriculum Vitae</h2>
				</div>
				<div className='mid'>
					For Hire <div className='available'></div>
				</div>
				<div className='right'>
					{orderShowing ? (
						<div
							className='pricing'
							onClick={() => {
								console.log("Home");
							}}
						>
							Home
						</div>
					) : (
						<div
							className='pricing'
							onClick={() => {
								togglePricing();
							}}
						>
							{orderShowing ? "" : isActive ? `Home` : `Pricing`}
						</div>
					)}
					<div className='resume'>
						<a href='../../downloads/englishResume.pdf' download>
							Get resume
						</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({
	pricingState: { isActive },
	packageState: { orderShowing }
}) => ({
	isActive,
	orderShowing
});

export default connect(
	mapStateToProps,
	{ togglePricing }
)(Header);
