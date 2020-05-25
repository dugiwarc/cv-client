import React, { Component, Fragment } from "react";

import Cubes from "../../components/Cubes/Cubes";

export default class Planets extends Component {
  sayhi = () => {
    console.log("Hi");
  };

  render() {
    return (
      <Fragment>
        <Cubes say={this.sayhi} />
      </Fragment>
    );
  }
}
