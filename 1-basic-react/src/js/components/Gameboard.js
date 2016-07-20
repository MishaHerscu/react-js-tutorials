import React from "react";


export default class Gameboard extends React.Component {

  clearBoard() {
    console.log('clearing');
    console.log(this.state.boardVals);

    let emptyBoard = [,,,,,,,,];
    this.setState({boardVals: emptyBoard});
    console.log(this.state.boardVals);

  }

  updateBoardVal(event) {
    let cellName = event.target.id;
    let index = cellName[-1];
    let newBoardVals = this.state.boardVals;
    newBoardVals[Number(index)] = this.state.turn;
    this.setState({boardVals: newBoardVals});

    if(this.state.turn === "X"){
      this.setState({turn:"O"});
    } else {
      this.setState({turn:"X"});
    }

    updateBoard();
  }

  updateBoard() {
    this.state.boardVals.forEach((val, index) => {
      let cell = document.getElementById('cell-' + index);
      cell.innerHTML = val;
    });
  }

  render() {
    return (
      <div class="container">
        <table>
          <tbody>
            <tr class="row">
              <td id="cell-0" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
              <td id="cell-1" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
              <td id="cell-2" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
            </tr>
            <tr class="row">
              <td id="cell-3" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
              <td id="cell-4" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
              <td id="cell-5" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
            </tr>
            <tr class="row">
              <td id="cell-6" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
              <td id="cell-7" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
              <td id="cell-8" class="col-xs-4" onClick={this.updateBoardVal.bind(this)}></td>
            </tr>
          </tbody>
        </table>
        <br />
        <button class="btn btn-lg btn-primary" onClick={this.clearBoard.bind(this)}>
        New Game
        </button>
      </div>
    );
  }
}
