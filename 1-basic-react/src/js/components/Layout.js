import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "It's Working! It's Working!",
    };
  }

  changeTitle(title) {
    this.setState({title}); // this is title: title with ES6
  }

  render() {
    return (
      <div>
        // the .bind(this) is critical because we are passing a method as a prop
        // we need to make sure it gets called on the Layout component
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
