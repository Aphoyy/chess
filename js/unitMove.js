let startPosition = null;
let endPosition = null;
let unitType = null;
let unitEaten = null;
let startRow;
let startCol;
let endRow ;
let endCol;

function isMoveValid() {
    // We set values to make it easier to calculate difference between each ones
    startRow = startPosition.match(/\d/) - 1;
    startCol = cols[startPosition.match(/[A-Za-z]/)];
    endRow = endPosition.match(/\d/) - 1;
    endCol = cols[endPosition.match(/[A-Za-z]/)];

    switch(unitType.match(/((?<=black)|(?<=white)).+/)[0]) {
        case "Pawn":
            pawnMove();
            break;
        case "Bishop":
            bishopMove();
            break;
        case "Rook":
            rookMove();
            break;
        case "Knight":
            knightMove();
            break;
        case "Queen":
            queenMove();
            break;
        case "King":
            kingMove();
            break;
        default:
            break;
    }
}

function pawnMove() {
    if (/white/.test(unitType)) {
        // Move 2 if start otherwise only 1 and eat in diagonal
        if (startRow === 1 && (startRow + 2 === endRow && startCol === endCol) && board[startRow + 1][endCol] === "empty" && board[endRow][endCol] === "empty") {
            placeUnit();
        } else if (startRow + 1 === endRow && startCol === endCol && board[endRow][endCol] === "empty") {
            placeUnit();
        } else if (startRow + 1 === endRow && (startCol + 1 === endCol | startCol - 1 === endCol) && /black/.test(board[endRow][endCol])) {
            placeUnit();
        } else {
            console.log("ERROR : invalid move");
        }
    }
    if (/black/.test(unitType)) {
        // Move 2 if start otherwise only 1 and eat in diagonal
        if (startRow === 6 && (startRow - 2 === endRow && startCol === endCol) && board[startRow - 1][endCol] === "empty" && board[endRow][endCol] === "empty") {
            placeUnit();
        } else if (startRow - 1 === endRow && startCol === endCol && board[endRow][endCol] === "empty") {
            placeUnit();
        } else if (startRow - 1 === endRow && (startCol + 1 === endCol | startCol - 1 === endCol) && /white/.test(board[endRow][endCol])) {
            placeUnit();
        } else {
            console.log("ERROR : invalid move");
        }
    }
}

function bishopMove() {
    if (startCol - endCol + startRow === endRow) {
        placeUnit();
    } else if (startRow - endRow + endCol === startCol) {
        placeUnit();
    } else console.log("ERROR : invalid move");
}

function rookMove() {
    if (startCol === endCol | startRow === endRow) {
        placeUnit();
    } else {
        console.log("ERROR : invalid move");
    }
}

function knightMove() {
    if ((startCol - 2 === endCol && startRow + 1 === endRow) | (startCol - 1 === endCol && startRow + 2 === endRow)) {
        placeUnit();
    } else if ((startCol + 2 === endCol && startRow + 1 === endRow) | (startCol + 1 === endCol && startRow + 2 === endRow)) {
        placeUnit();
    } else if ((startCol + 2 === endCol && startRow - 1 === endRow) | (startCol + 1 === endCol && startRow - 2 === endRow)) {
        placeUnit();
    } else if ((startCol - 2 === endCol && startRow - 1 === endRow) | (startCol - 1 === endCol && startRow - 2 === endRow)) {
        placeUnit();
    } else {
        console.log("ERROR : invalid move");
    }
}

function queenMove() {
    if (startCol - endCol + startRow == endRow) {
        placeUnit();
    } else if (startRow - endRow + endCol == startCol) {
        placeUnit();
    } else if (startCol === endCol | startRow === endRow) {
        placeUnit();
    } else {
        console.log("ERROR : invalid move");
    }
}

function kingMove() {
    if ((startCol + 1 === endCol && startRow === endRow) | (startCol - 1 === endCol && startRow === endRow)) {
        placeUnit();
    } else if ((startRow + 1 === endRow && startCol === endCol) | (startRow - 1 === endRow && startCol === endCol)) {
        placeUnit();
    } else if ((startCol + 1 === endCol && startRow + 1 === endRow) | (startCol - 1 === endCol && startRow - 1 === endRow)) {
        placeUnit();
    } else if ((startCol + 1 === endCol && startRow - 1 === endRow) | (startCol - 1 === endCol && startRow + 1 === endRow)) {
        placeUnit();
    } else {
        console.log("ERROR : invalid move");
    }
}