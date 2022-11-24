class ChessBoard {
  constructor() {
    this.board = [];
  }

  generateBoard() {
    for (let i = 0; i <= 7; i += 1) {
      const column = [];
      for (let j = 0; j <= 7; j += 1) {
        column.push("");
      }
      this.board.push(column);
    }
  }
}

const gameBoard = new ChessBoard();
gameBoard.generateBoard();

export default gameBoard;
