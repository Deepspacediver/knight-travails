class Knight {
  constructor() {
    this.position = null;
    // this.adjacencyList = [];
  }

  leftUp(position = this.position) {
    const leftUp = [position[0] - 1, position[1] + 2];
    return leftUp;
  }

  leftDown(position = this.position) {
    const leftDown = [position[0] - 1, position[1] - 2];
    return leftDown;
  }

  rightUp(position = this.position) {
    const rightUp = [position[0] + 1, position[1] + 2];
    return rightUp;
  }

  rightDown(position = this.position) {
    const rightDown = [position[0] + 1, position[1] - 2];
    return rightDown;
  }

  downRight(position = this.position) {
    const downRight = [position[0] + 2, position[1] - 1];
    return downRight;
  }

  downLeft(position = this.position) {
    const downLeft = [position[0] - 2, position[1] - 1];
    return downLeft;
  }

  upRight(position = this.position) {
    const upRight = [position[0] + 2, position[1] + 1];
    return upRight;
  }

  upLeft(position = this.position) {
    const upLeft = [position[0] - 2, position[1] + 1];
    return upLeft;
  }
}

const myKnight = new Knight();
myKnight.position = [2, 3];

console.log(myKnight);
console.log(myKnight.leftUp());
console.log(myKnight.leftDown());
console.log(myKnight.rightUp());
console.log(myKnight.rightDown());
console.log(myKnight.downRight());
console.log(myKnight.downLeft());
console.log(myKnight.upRight());
console.log(myKnight.upLeft());
