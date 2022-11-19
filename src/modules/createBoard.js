import gameBoard from "./chessBoard";

const boardContainer = document.querySelector("#board");
const createBoard = (board) => {
  let yIndex = 7;
  board.forEach((row) => {
    let xIndex = 0;
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    boardContainer.appendChild(rowElement);
    row.forEach(() => {
      const squareElement = document.createElement("div");
      squareElement.classList.add("board-square");
      squareElement.dataset.x = xIndex;
      xIndex += 1;
      squareElement.dataset.y = yIndex;
      rowElement.appendChild(squareElement);
    });
    yIndex -= 1;
  });
};

createBoard(gameBoard.board);
