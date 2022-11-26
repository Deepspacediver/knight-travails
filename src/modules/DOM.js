import Knight from "./knightLogic";

const boardContainer = document.getElementById("board");
const instructions = document.querySelector(".instructions");
const result = document.querySelector(".result");
const knightBtn = document.querySelector(".knight-btn");
const destinationBtn = document.querySelector(".destination-btn");
const travailBtn = document.querySelector(".travail-btn");
const resetBtn = document.querySelector(".reset-btn");

const controlDOM = (() => {
  let startingPoint = "";
  let desinationCords = "";
  let myKnight;

  const getCoordinates = (e) => {
    if (e.target.classList.contains("board-square")) {
      const target = e.target;
      const coordinates = [Number(target.dataset.x), Number(target.dataset.y)];
      return coordinates;
    }
  };

  const placeKnightIcon = (e) => {
    const knightIcon = document.createElement("img");
    knightIcon.src = "../src/assets/icons/knight.png";
    knightIcon.classList.add("board-icon");
    e.target.appendChild(knightIcon);
  };

  const placeHayIcon = (e) => {
    const hayIcon = document.createElement("img");
    hayIcon.src = "../src/assets/icons/hay-bale.png";
    hayIcon.classList.add("board-icon");
    e.target.appendChild(hayIcon);
  };

  const drawPath = ({ path }) => {
    const innerPath = path.slice(1, path.length - 1);
    innerPath.forEach((position, index) => {
      const boardSquare = document.querySelector(
        `[data-x="${position[0]}"][data-y="${position[1]}"]`
      );
      console.log(boardSquare);
      boardSquare.innerText = index + 1;
    });
    console.log(innerPath);
  };
  const displayResults = ({ message, pathFormatted }) => {
    instructions.classList.add("hidden");
    result.classList.remove("hidden");
    result.innerText = `${message}. Here's the path: ${pathFormatted}`;
  };
  const hideResults = () => {
    instructions.classList.remove("hidden");
    result.classList.add("hidden");
  };

  // Prevent from calling mutiple events when repeatedly clicking buttons
  let knightIsCalled = false;
  let destinationIsCalled = false;

  knightBtn.addEventListener("click", () => {
    if (knightIsCalled) return;
    knightIsCalled = true;
    if (Array.isArray(startingPoint)) return;
    boardContainer.addEventListener(
      "click",
      (e) => {
        const coordinates = getCoordinates(e);
        startingPoint = coordinates;
        placeKnightIcon(e);
        console.log(startingPoint);
      },
      { once: true }
    );
  });

  destinationBtn.addEventListener("click", () => {
    if (destinationIsCalled) return;
    destinationIsCalled = true;
    if (Array.isArray(desinationCords)) return;
    boardContainer.addEventListener(
      "click",
      (e) => {
        const coordinates = getCoordinates(e);
        desinationCords = coordinates;
        placeHayIcon(e);
        console.log(desinationCords);
      },
      { once: true }
    );
  });

  travailBtn.addEventListener("click", () => {
    if (instructions.classList.contains("hidden")) return;
    if (startingPoint !== "" && desinationCords !== "") {
      myKnight = new Knight(startingPoint, desinationCords);
      const path = myKnight.findPath();
      drawPath(path);
      displayResults(path);
    }
  });

  const resetGame = () => {
    startingPoint = "";
    desinationCords = "";
    myKnight = "";
    knightIsCalled = false;
    destinationIsCalled = false;
    const boardIcons = Array.from(document.querySelectorAll(".board-icon"));
    boardIcons.forEach((icon) => icon.remove());
    const squares = Array.from(document.querySelectorAll(".board-square"));
    squares.forEach((square) => {
      square.innerText = "";
    });
    hideResults();
  };

  resetBtn.addEventListener("click", resetGame);

  return {};
})();
