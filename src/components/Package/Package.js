import React, { Component } from "react";
import { connect } from "react-redux";

// Graphics
import euro from "../../assets/icons/euro.svg";
import check from "../../assets/icons/check.svg";
import close from "../../assets/icons/close.svg";

// Actions
import { selectPackage } from "../../redux/package/package.actions";

// Styles
import "./Package.scss";

class Package extends Component {
  handleClick = packageID => {
    this.props.selectPackage(packageID);
  };
  render() {
    const {
      description,
      hasAuthentication,
      has6MonthsSupport,
      hasPayment,
      hasDatabase,
      id
    } = this.props.item;
    return (
      <div className="Package">
        <div className="price">
          <div className="price-title">{this.props.item.price}</div>
          <div className="price-image">
            <img src={euro} alt="euro" />
          </div>
        </div>
        <div className="title">{this.props.item.name}</div>
        <div className="rep">
          <img src={this.props.item.image} alt="in a nutshell" />
        </div>
        <div className="bar"></div>
        <div className="description">{description}</div>
        <div className="feature">
          <div className="feature-image">
            <img src={has6MonthsSupport ? check : close} alt="availability" />
          </div>
          <div className="feature-title">6 Months Service Support</div>
        </div>
        <div className="feature">
          <div className="feature-image">
            <img src={hasDatabase ? check : close} alt="availability" />
          </div>
          <div className="feature-title">Database</div>
        </div>
        <div className="feature">
          <div className="feature-image">
            <img src={hasAuthentication ? check : close} alt="availability" />
          </div>
          <div className="feature-title">Authentication</div>
        </div>{" "}
        <div className="feature">
          <div className="feature-image">
            <img src={hasPayment ? check : close} alt="availability" />
          </div>
          <div className="feature-title">Payment system</div>
        </div>{" "}
        <div className="select-button" onClick={() => this.handleClick(id)}>
          Select
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { selectPackage }
)(Package);
