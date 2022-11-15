class Knight {
  constructor(position = [1, 2]) {
    this.position = position;
    this.adjacencyList = new Map();
    this.adjacencyList.set(String(this.position), []);
  }

  leftUp(position = this.position) {
    const move = [position[0] - 1, position[1] + 2];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return undefined;
    return move;
  }

  leftDown(position = this.position) {
    const move = [position[0] - 1, position[1] - 2];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return undefined;
    return move;
  }

  rightUp(position = this.position) {
    const move = [position[0] + 1, position[1] + 2];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return undefined;
    return move;
  }

  rightDown(position = this.position) {
    const move = [position[0] + 1, position[1] - 2];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return undefined;
    return move;
  }

  downRight(position = this.position) {
    const move = [position[0] + 2, position[1] - 1];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return undefined;
    return move;
  }

  downLeft(position = this.position) {
    const move = [position[0] - 2, position[1] - 1];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return undefined;
    return move;
  }

  upRight(position = this.position) {
    const move = [position[0] + 2, position[1] + 1];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return undefined;
    return move;
  }

  upLeft(position = this.position) {
    const move = [position[0] - 2, position[1] + 1];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return undefined;
    return move;
  }

  convertStringToPosition(string = String(this.position)) {
    return string.split(",").map((move) => Number(move));
  }

  /*  convertPositionToString(position = this.position) {
    return String(position);
  } */

  generateNewPosition(position = this.position, list = this.adjacencyList) {
    const positionStringified = String(position);
    if (list.has(positionStringified)) return;
    list.set(positionStringified, []);
  }

  clearOfIllegalMoves(array = this.adjacencyList.get(String(this.position))) {
    array.forEach((move) => {
        console.log({move})
        if (move === undefined) {
        const index = array.findIndex((el) => el === move);
        console.log(index, array.length, array)
        array.splice(index, 1);
      }
    });
  }

  generateMoves(position = this.position, list = this.adjacencyList) {
    let positionStringified = position;
    if (Array.isArray(position)) positionStringified = String(position);
    let arrayOfMoves  = []
    arrayOfMoves.push(
      this.leftDown(position),
      this.leftUp(position),
      this.rightDown(position),
      this.rightUp(position),
      this.downLeft(position),
      this.downRight(position),
      this.upLeft(position),
      this.upRight(position)
    );
    arrayOfMoves = arrayOfMoves.filter((e) => e !== undefined)
    list.set(positionStringified, arrayOfMoves)

    
  }

  findPath(destination, position = this.position, list = this.adjacencyList) {
    let queue = []
    let visitedNodes = {}
  }
}

const myKnight = new Knight();
console.log(myKnight);
// console.log(myKnight.adjacencyList.set(JSON.stringify([1,2]), []))

// console.log(myKnight.adjacencyList.get("1,2").push(myKnight.upLeft()));

myKnight.generateNewPosition([0,0])
myKnight.generateMoves([0,0])
console.log(myKnight);

/* console.log([
  myKnight.leftDown(),
  myKnight.leftUp(),
  myKnight.rightDown(),
  myKnight.rightUp(),
  myKnight.downLeft(),
  myKnight.downRight(),
  myKnight.upLeft(),
  myKnight.upRight(),
]);
 */


