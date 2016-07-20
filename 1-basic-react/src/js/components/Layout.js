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

  updateBoard() {
    this.state.boardVals.forEach((val, index) => {
      let cell = document.getElementById('cell-' + index);
      cell.innerHTML = val;
    });
  }

  clearBoard() {
    let emptyBoard = [,,,,,,,,];
    this.setState({boardVals: emptyBoard});

    this.updateBoard();
  }

  updateBoardVal(event) {
    let cellName = event.target.id;
    let cellIndex = cellName.slice(-1);
    let newBoardVals = this.state.boardVals;
    newBoardVals[cellIndex] = this.state.turn;
    this.setState({boardVals: newBoardVals});

    if(this.state.turn === "X"){
      this.setState({turn:"O"});
    } else {
      this.setState({turn:"X"});
    }

    this.updateBoard();
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
        <Gameboard clearBoard={this.clearBoard.bind(this)} updateBoardVal={this.updateBoardVal.bind(this)} boardVals={this.state.boardVals} turn={this.state.turn}/>
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
