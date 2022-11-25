import isEqual from "lodash.isequal";

class Knight {
  constructor(position = [1, 2]) {
    this.position = { move: position, predecessor: null };
    this.adjacencyList = new Map();
  }

  leftUp(position = this.position) {
    const move = [position[0] - 1, position[1] + 2];
    if (this.isIllegalMove(move)) return undefined;
    return { move, predecessor: position };
  }

  leftDown(position = this.position) {
    const move = [position[0] - 1, position[1] - 2];
    if (this.isIllegalMove(move)) return undefined;
    return { move, predecessor: position };
  }

  rightUp(position = this.position) {
    const move = [position[0] + 1, position[1] + 2];
    if (this.isIllegalMove(move)) return undefined;
    return { move, predecessor: position };
  }

  rightDown(position = this.position) {
    const move = [position[0] + 1, position[1] - 2];
    if (this.isIllegalMove(move)) return undefined;
    return { move, predecessor: position };
  }

  downRight(position = this.position) {
    const move = [position[0] + 2, position[1] - 1];
    if (this.isIllegalMove(move)) return undefined;
    return { move, predecessor: position };
  }

  downLeft(position = this.position) {
    const move = [position[0] - 2, position[1] - 1];
    if (this.isIllegalMove(move)) return undefined;
    return { move, predecessor: position };
  }

  upRight(position = this.position) {
    const move = [position[0] + 2, position[1] + 1];
    if (this.isIllegalMove(move)) return undefined;
    return { move, predecessor: position };
  }

  upLeft(position = this.position) {
    const move = [position[0] - 2, position[1] + 1];
    if (this.isIllegalMove(move)) return undefined;
    return { move, predecessor: position };
  }

  isIllegalMove(position) {
    if (
      position[0] < 0 ||
      position[0] > 7 ||
      position[1] < 0 ||
      position[1] > 7
    )
      return true;
    return false;
  }

  convertStringToPosition(string = String(this.position)) {
    return string.split(",").map((move) => Number(move));
  }

  generateMoves({ move, predecessor }, list = this.adjacencyList) {
    let positionStringified;
    if (Array.isArray(move)) positionStringified = String(move);

    let arrayOfMoves = [];
    arrayOfMoves.push(
      this.leftDown(move),
      this.leftUp(move),
      this.rightDown(move),
      this.rightUp(move),
      this.downLeft(move),
      this.downRight(move),
      this.upLeft(move),
      this.upRight(move)
    );
    arrayOfMoves = arrayOfMoves.filter((e) => e !== undefined);
    list.set(positionStringified, { predecessor, arrayOfMoves });
  }

  findPath(destination, position = this.position, list = this.adjacencyList) {
    if (this.isIllegalMove(destination)) return "Illegal move";
    if(isEqual(destination, position.move)) return "You are already here"

    const queue = [];
    const visitedNodes = {};

    queue.push(position);
    visitedNodes[position] = true;

    while (queue.length !== 0) {
      let firstInQ = queue[0];
      visitedNodes[firstInQ.move] = true;
      this.generateMoves(firstInQ);
      if (
        list
          .get(String(firstInQ.move))
          .arrayOfMoves.some((el) => isEqual(el.move, destination))
      ) {
        visitedNodes[destination] = true;
        console.log(visitedNodes);
        return this.findShortestPath(destination);
      }
      list.get(String(firstInQ.move)).arrayOfMoves.forEach((move) => {
        if (visitedNodes[move.move] !== true) {
          queue.push(move);
        }
      });
      queue.shift();
    }
  }

  findShortestPath(destination, list = this.adjacencyList) {
    const lastMapKey = Array.from(list.keys()).pop();
    const result = [this.convertStringToPosition(lastMapKey), destination];

    let previousMove = list.get(lastMapKey).predecessor;
    while (previousMove !== null) {
      result.unshift(previousMove);
      previousMove = list.get(String(previousMove)).predecessor;
    }

    return {
      message: `You made it in ${result.length - 1} move(s)`,
      path: result,
    };
  }
}

let myKnight = new Knight([1, 2]);
console.log(myKnight);

console.log(myKnight.findPath([2, 4]));

console.log(myKnight);