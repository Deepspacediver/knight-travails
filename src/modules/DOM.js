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

  const displayResults = ({ message, path }) => {
    instructions.classList.add("hidden");
    result.classList.remove("hidden");
    result.innerText = `${message}. Here's the path: ${path}`;
  };
  const hideResults = () => {
    instructions.classList.remove("hidden");
    result.classList.add("hidden");
  };
  knightBtn.addEventListener("click", () => {
    if(Array.isArray(startingPoint)) return
    boardContainer.addEventListener(
      "click",
      (e) => {
        const coordinates = getCoordinates(e);
        startingPoint = coordinates;
        console.log(startingPoint);
      },
      { once: true }
    );
  });

  destinationBtn.addEventListener("click", () => {
    if(Array.isArray(desinationCords)) return
    boardContainer.addEventListener(
      "click",
      (e) => {
        const coordinates = getCoordinates(e);
        desinationCords = coordinates;
        console.log(desinationCords);
      },
      { once: true }
    );
  });

  travailBtn.addEventListener("click", (e) => {
    if (startingPoint !== "" && desinationCords !== "") {
      myKnight = new Knight(startingPoint, desinationCords);
      const path = myKnight.findPath()
      displayResults(path)
    }
  });

  const resetGame = () => {
    startingPoint = "";
    desinationCords = "";
    myKnight = "";
    hideResults()
  };

  resetBtn.addEventListener('click', resetGame)

  return {};
})();
