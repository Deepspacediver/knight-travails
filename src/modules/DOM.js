import Knight from "./knightLogic";
import knightImg from "../assets/icons/knight.png";
import hayImg from "../assets/icons/hay-bale.png";
import gitImg from "../assets/icons/github-icon.svg";

const boardContainer = document.getElementById("board");
const instructions = document.querySelector(".instructions");
const result = document.querySelector(".result");
const knightBtn = document.querySelector(".knight-btn");
const destinationBtn = document.querySelector(".destination-btn");
const travailBtn = document.querySelector(".travail-btn");
const resetBtn = document.querySelector(".reset-btn");
const gitHubDOMImg = document.querySelector(".github-img");

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
    const coordinates = getCoordinates(e);
    startingPoint = coordinates;
    const knightIcon = document.createElement("img");
    knightIcon.src = knightImg;
    knightIcon.classList.add("board-icon");
    e.target.appendChild(knightIcon);
  };

  const placeHayIcon = (e) => {
    const coordinates = getCoordinates(e);
    desinationCords = coordinates;
    const hayIcon = document.createElement("img");
    hayIcon.src = hayImg;
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
  const removeEvents = () => {
    boardContainer.removeEventListener("click", placeKnightIcon);
    boardContainer.removeEventListener("click", placeHayIcon);
  };

  knightBtn.addEventListener("click", () => {
    removeEvents();
    if (Array.isArray(startingPoint)) return;
    boardContainer.addEventListener("click", placeKnightIcon, { once: true });
  });

  destinationBtn.addEventListener("click", () => {
    removeEvents();
    if (Array.isArray(desinationCords)) return;
    boardContainer.addEventListener("click", placeHayIcon, { once: true });
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
    const boardIcons = Array.from(document.querySelectorAll(".board-icon"));
    boardIcons.forEach((icon) => icon.remove());
    const squares = Array.from(document.querySelectorAll(".board-square"));
    squares.forEach((square) => {
      square.innerText = "";
    });
    hideResults();
  };

  resetBtn.addEventListener("click", resetGame);

  gitHubDOMImg.src = gitImg;
  return {};
})();
