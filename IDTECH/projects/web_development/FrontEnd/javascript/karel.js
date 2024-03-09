function main() {
  // moveKarelToTopLeft();
}

function moveKarelToTopLeft() {
  moveFourTimes();
  turnLeft();
  moveFourTimes();
}

function moveFourTimes() {
  move();
  move();
  move();
  move();
}

function putBeepersDiagonally() {
  putBeeper();
  moveTurnLeftputBeeper();
  rightMovePutBeeper();
  rightMovePutBeeper();
  rightMovePutBeeper();
  

}

function moveTurnLeftputBeeper() {
  move();
  turnLeft();
  move();
  putBeeper();
}

function rightMovePutBeeper() {
  turnRight();
  move();
  turnLeft();
  move();
  putBeeper();
}

function chessBoard() {
  threebeeper();

  turnLeftTwoBeeperTurnRightThreeBeepers();

  turnLeftTwoBeeperTurnRightThreeBeepers();
}

function threebeeper() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function turnLeftMove() {
  //
}

function turnLeftTwoBeeperTurnRightThreeBeepers() {
  turnLeft();
  move();
  turnLeft();

  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();

  turnRight();
  move();
  turnRight();

  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function turnRightMove() {
  //
}