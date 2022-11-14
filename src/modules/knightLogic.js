class Knight {
  constructor(position = [1, 2]) {
    this.position = position;
    this.adjacencyList = new Map();
    this.adjacencyList.set(String(this.position), []);
  }

  leftUp(position = this.position) {
    const move = [position[0] - 1, position[1] + 2];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return;
    return move;
  }

  leftDown(position = this.position) {
    const move = [position[0] - 1, position[1] - 2];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return;
    return move;
  }

  rightUp(position = this.position) {
    const move = [position[0] + 1, position[1] + 2];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return;
    return move;
  }

  rightDown(position = this.position) {
    const move = [position[0] + 1, position[1] - 2];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return;
    return move;
  }

  downRight(position = this.position) {
    const move = [position[0] + 2, position[1] - 1];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return;
    return move;
  }

  downLeft(position = this.position) {
    const move = [position[0] - 2, position[1] - 1];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return;
    return move;
  }

  upRight(position = this.position) {
    const move = [position[0] + 2, position[1] + 1];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return;
    return move;
  }

  upLeft(position = this.position) {
    const move = [position[0] - 2, position[1] + 1];
    if (move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7) return;
    return move;
  }

  convertStringToPosition(string = String(this.position)) {
    return string.split(",").map((move) => Number(move));
  }

  /*  convertPositionToString(position = this.position) {
    return String(position);
  } */

  generateNewPosition(position, list = this.adjacencyList) {
    const positionStringified = String(position);
    if (list.has(positionStringified)) return;
    list.set(positionStringified, []);
  }

  clearOfIllegalMoves(array = this.adjacencyList.get(String(this.position))) {
    array.forEach((move) => {
      if(move === undefined) {
        const index = array.findIndex((el) => el === move)
        array.splice(index, 1)
      }
    })
  }

  generateMoves(position = this.position, list = this.adjacencyList) {
    const positionStringified = String(position);
    const movesArray = list.get(positionStringified);
    movesArray
      .push(
        this.leftDown(),
        this.leftUp(),
        this.rightDown(),
        this.rightUp(),
        this.downLeft(),
        this.downRight(),
        this.upLeft(),
        this.upRight()
      );
    this.clearOfIllegalMoves(movesArray)
    // list.get(positionStringified) = list.get(positionStringified).filter((move) => move !== undefined)
  }
}

const myKnight = new Knight();
console.log(myKnight);
// console.log(myKnight.adjacencyList.set(JSON.stringify([1,2]), []))

// console.log(myKnight.adjacencyList.get("1,2").push(myKnight.upLeft()));

console.log([
  myKnight.leftDown(),
  myKnight.leftUp(),
  myKnight.rightDown(),
  myKnight.rightUp(),
  myKnight.downLeft(),
  myKnight.downRight(),
  myKnight.upLeft(),
  myKnight.upRight(),
]);
myKnight.generateNewPosition([2, 3]);
myKnight.generateMoves();
console.log(myKnight.adjacencyList);
