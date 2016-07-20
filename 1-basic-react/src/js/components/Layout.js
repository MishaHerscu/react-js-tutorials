import React from "react";

import Footer from "./Footer";
import Gameboard from "./Gameboard";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "It's Working! It's Working!",
      boardVals: [,,,,,,,,],
      turn: "X"
    };
  }

  // this is title: title with ES6
  changeTitle(title) {
    this.setState({title});
  }

  // the .bind(this) is critical because we are passing a method as a prop
  // we need to make sure it gets called on the Layout component
  render() {
    return (
      <div>
        <br />
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <br />
        <br />
        <br />
        <Gameboard />
        <br />
        <br />
        <br />
        <Footer />
        <br />
        <br />
      </div>
    );
  }
}
