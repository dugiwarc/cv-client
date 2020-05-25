import React, { Component } from "react";
import { connect } from "react-redux";
import StripeButton from "../StripeButton/StripeButton";

// Graphics
import orderImage from "../../assets/images/order-image.jpg";
import conversation from "../../assets/icons/conversation.svg";
import one from "../../assets/icons/one.svg";
import two from "../../assets/icons/two.svg";
import three from "../../assets/icons/three.svg";

// Data
import data from "../../data/packages.data";

// Styles
import "./Order.scss";

// Actions
import { clickPricing } from "../../redux/pricing/pricing.actions";

class Order extends Component {
  state = {
    price: 0,
    hasSetPrice: false,
    name: "",
    surname: "",
    email: "",
    about: "",
  };
  onChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  submitOrder = () => {
    const data = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      about: this.state.about,
    };
    this.props.clickPricing(data);
  };
  render() {
    const { selectedPackage, orderShowing } = this.props;
    const containerStyles = {
      transform: orderShowing && "translateX(0px)",
    };
    if (orderShowing) {
      const foundPackage = data.filter((item) => item.id === selectedPackage);
      !this.state.hasSetPrice &&
        this.setState({
          price: foundPackage[0].price,
          hasSetPrice: true,
        });
    }
    return (
      <div className="Order" style={containerStyles}>
        <div className="order-details">
          <div className="image">
            <img src={orderImage} alt="contact us" />
          </div>
          <div className="text">
            <div className="order-detail">
              <div className="title">Order:</div>
              <div className="number">#2563</div>
            </div>
            <div className="order-detail">
              <div className="title">Type:</div>
              <div className="number">{this.props.type}</div>
            </div>
            <div className="order-detail">
              <div className="title">Price:</div>
              <div className="number">${this.props.price}</div>
            </div>
          </div>
        </div>
        <div className="lets-talk">
          <div className="title">Summary</div>
          <hr />
          <div className="input">
            <label htmlFor="name">Name *</label>
            <input
              onChange={(evt) => this.onChange(evt)}
              type="text"
              name="name"
              id="name"
              placeholder="Alex"
            />
          </div>
          <div className="input">
            <label htmlFor="surname">Surname *</label>
            <input
              onChange={(evt) => this.onChange(evt)}
              type="text"
              name="surname"
              id="surname"
              placeholder="Smith"
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email *</label>
            <input
              name="email"
              onChange={(evt) => this.onChange(evt)}
              type="email"
              id="email"
              placeholder="alexsmith@mail.com"
            />
          </div>
          <div className="about">
            <label htmlFor="about">Things I need to know*</label>
            <textarea
              onChange={(evt) => this.onChange(evt)}
              name="about"
              id="about"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <StripeButton
            price={orderShowing && this.props.price}
            submitOrder={this.submitOrder}
          />
        </div>
        <div className="how-it-works">
          <div className="title">
            <h2>How it works</h2>
          </div>
          <div className="image">
            <img src={conversation} alt="questions" />
          </div>
          <div className="subtitle">
            <div className="detail">
              <img src={one} alt="one" />
              You place the order
            </div>
            <div className="detail">
              <img src={two} alt="two" />
              We will set up a channel for communication
            </div>
            <div className="detail">
              <img src={three} alt="three" />
              Project should be delivered within a week
            </div>
          </div>
          <div className="questions">
            <div className="title">Contact</div>
            <small>tusk@tusk.world</small>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  packageState: { selectedPackage, orderShowing, price, type },
}) => ({
  selectedPackage,
  orderShowing,
  price,
  type,
});

export default connect(mapStateToProps, { clickPricing })(Order);
