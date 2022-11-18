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

  /*  convertPositionToString(position = this.position) {
    return String(position);
  } */

  /* generateNewPosition(position = this.position, list = this.adjacencyList) {
    const positionStringified = String(position);
    if (list.has(positionStringified)) return;
    list.set(positionStringified, []);
  } 

*/
  generateMoves({ move, predecessor }, list = this.adjacencyList) {
    let positionStringified = move;
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

  findShortestPath(destination, list = this.adjacencyList) {
    let lastMapKey = Array.from(list.keys()).pop();
    const result = [this.convertStringToPosition(lastMapKey) ,destination];
    let previousMove = list.get(lastMapKey).predecessor
    while(previousMove!== null){
      result.unshift(previousMove)
      previousMove = list.get(String(previousMove)).predecessor
    }
    return result
  }

  findPath(destination, position = this.position, list = this.adjacencyList) {
    if (this.isIllegalMove(destination)) return "Illegal move";

    const queue = [];
    const visitedNodes = {};
    let previousNode = 0;

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
        return;
      }
      list.get(String(firstInQ.move)).arrayOfMoves.forEach((move) => {
        // if (!list.has(String(move))) queue.push(move);
        if (visitedNodes[move.move] !== true) {
          queue.push(move);
        }
      });
      queue.shift();
    }
  }
}

const myKnight = new Knight();
console.log(myKnight);
/* console.log(myKnight.generateMoves([1,2], 0))
console.log(myKnight.generateMoves([2,4], [1,2]))
console.log(myKnight.adjacencyList.get('2,4').moves.some((el) => isEqual(el, [3,6]))) */
// console.log(myKnight.generateMoves({move:[1,2]}));
// console.log(myKnight.generateMoves({move:[2,4], predecessor:[1,2] }));

// console.log(myKnight.adjacencyList.get(String([1,2])).moves)
console.log(myKnight.findPath([7,7]));
 console.log(myKnight.findShortestPath([7,7]))
/* myKnight.generateMoves({move:[1,2]})
console.log(myKnight.adjacencyList.get(String([1,2])).arrayOfMoves.forEach((move) => {
  // if (!list.has(String(move))) queue.push(move);
    myKnight.generateMoves(move)
  }
)) 
console.log( 
  myKnight.adjacencyList.get(String([1,2])).arrayOfMoves.some((el) => isEqual(el.move, [2,4]))
 ) */
console.log(myKnight);

/* const iterate = (map) => {
  for (const entry of map) {
    console.log(entry);
  }
};
iterate(myKnight.adjacencyList); */
