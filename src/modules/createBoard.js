import gameBoard from "./chessBoard";

const boardContainer = document.querySelector("#board");
console.log(boardContainer);
const createBoard = (board) => {
  let yIndex = 7;
  board.forEach((row) => {
    let xIndex = 0;
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    boardContainer.appendChild(rowElement);
    row.forEach((square) => {
      const squareElement = document.createElement("div");
      squareElement.classList.add("board-square");
      squareElement.dataset.x = xIndex;
      squareElement.dataset.y = yIndex;
      rowElement.appendChild(squareElement);
      xIndex += 1;
    });
    yIndex-=1
  });
};

createBoard(gameBoard.board);
