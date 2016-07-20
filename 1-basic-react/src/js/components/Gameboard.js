import React from "react";


export default class Gameboard extends React.Component {

  handleCellClick(event) {
    this.props.updateBoardVal(event);
  }

  handleNewGame() {
    this.props.clearBoard();
  }

  render() {
    return (
      <div class="container">
        <table>
          <tbody>
            <tr class="row">
              <td id="cell-0" class="col-xs-4" value={this.props.boardVals[0]} onClick={this.handleCellClick.bind(this)}></td>
              <td id="cell-1" class="col-xs-4" value={this.props.boardVals[1]} onClick={this.handleCellClick.bind(this)}></td>
              <td id="cell-2" class="col-xs-4" value={this.props.boardVals[2]} onClick={this.handleCellClick.bind(this)}></td>
            </tr>
            <tr class="row">
              <td id="cell-3" class="col-xs-4" value={this.props.boardVals[3]} onClick={this.handleCellClick.bind(this)}></td>
              <td id="cell-4" class="col-xs-4" value={this.props.boardVals[4]} onClick={this.handleCellClick.bind(this)}></td>
              <td id="cell-5" class="col-xs-4" value={this.props.boardVals[5]} onClick={this.handleCellClick.bind(this)}></td>
            </tr>
            <tr class="row">
              <td id="cell-6" class="col-xs-4" value={this.props.boardVals[6]} onClick={this.handleCellClick.bind(this)}></td>
              <td id="cell-7" class="col-xs-4" value={this.props.boardVals[7]} onClick={this.handleCellClick.bind(this)}></td>
              <td id="cell-8" class="col-xs-4" value={this.props.boardVals[8]} onClick={this.handleCellClick.bind(this)}></td>
            </tr>
          </tbody>
        </table>
        <br />
        <button class="btn btn-lg btn-primary" onClick={this.handleNewGame.bind(this)}>
        New Game
        </button>
      </div>
    );
  }
}
