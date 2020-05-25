import React from "react";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";

import Pricing from "../../components/Pricing/Pricing";
import Order from "../../components/Order/Order";
import LandingPage from "../../components/LandingPage/LandingPage";

import "./Home.scss";

class Home extends React.Component {
  state = { hasLoaded: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hasLoaded: true,
      });
    }, 900);
  }
  render() {
    const { hasLoaded } = this.state;
    return (
      <>
        {hasLoaded ? (
          <div className="Home">
            <Header />
            <Pricing />
            <Order />
            <LandingPage />
          </div>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

export default Home;
