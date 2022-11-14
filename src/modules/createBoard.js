import gameBoard from "./chessBoard";

const boardContainer = document.querySelector("#board");
const createBoard = (board) => {
  let yIndex = 7;
  board.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    boardContainer.appendChild(rowElement);
    row.forEach((square) => {
      const squareElement = document.createElement("div");
      squareElement.classList.add("board-square");
      squareElement.dataset.x = square;
      squareElement.dataset.y = yIndex;
      rowElement.appendChild(squareElement);
    });
    yIndex -= 1;
  });
};

createBoard(gameBoard.board);
