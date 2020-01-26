import React from "react";
import { connect } from "react-redux";

// Styles
import "./Header.scss";

// Actions
import { togglePricing } from "../../redux/pricing/pricing.actions";
import { hideOrder } from "../../redux/package/package.actions";

class Header extends React.Component {
  render() {
    const { togglePricing, isActive, orderShowing, hideOrder } = this.props;
    return (
      <div className="Header">
        <div className="left">
          <h2>Curriculum Vitae</h2>
        </div>
        <div className="mid">
          Available <div className="available"></div>
        </div>
        <div className="right">
          {orderShowing ? (
            <div
              className="pricing"
              onClick={() => {
                hideOrder();
              }}
            >
              Pricing
            </div>
          ) : (
            <div
              className="pricing"
              onClick={() => {
                togglePricing();
              }}
            >
              {orderShowing ? "" : isActive ? `Home` : `Pricing`}
            </div>
          )}
          <div className="resume">
            <a
              href="https://drive.google.com/open?id=1USKe63FBRwAfKaP8pJQ90JWJPqDOO0vd"
              download
            >
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

export default connect(mapStateToProps, { togglePricing, hideOrder })(Header);
