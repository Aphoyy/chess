function checkmate() {
    findKing();
    let tester = true;

    // Right
    if (kingCol + 1 <= 7 && board[kingRow][kingCol + 1] === "empty") {
        kingRow;
        kingCol ++;
        if (isCheck() === false) {
            tester = false;
        }
        console.log([kingRow, kingCol, tester]);
        kingRow;
        kingCol --;
    }

    // Bottom right
    if (kingRow - 1 >= 0 && kingCol + 1 <= 7 && board[kingRow - 1][kingCol + 1] === "empty") {
        kingRow --;
        kingCol ++;
        if (isCheck() === false) {
            tester = false;
        }
        console.log([kingRow, kingCol, tester]);
        kingRow ++;
        kingCol --;
    }

    // Bottom
    if (kingRow - 1 >= 0 && board[kingRow - 1][kingCol] === "empty") {
        kingRow --;
        kingCol;
        if (isCheck() === false) {
            tester = false;
        }
        console.log([kingRow, kingCol, tester]);
        kingRow ++;
        kingCol;
    }

    // Bottom left
    if (kingRow - 1 >= 0 && kingCol - 1 >= 0 && board[kingRow - 1][kingCol - 1] === "empty") {
        kingRow --;
        kingCol --;
        if (isCheck() === false) {
            tester = false;
        }
        console.log([kingRow, kingCol, tester]);
        kingRow ++;
        kingCol ++;
    }

    // Left
    if (kingCol - 1 >= 0 && board[kingRow][kingCol - 1] === "empty") {
        kingRow;
        kingCol --;
        if (isCheck() === false) {
            tester = false;
        }
        console.log([kingRow, kingCol, tester]);
        kingRow;
        kingCol ++;
    }

    // Top left
    if (kingRow + 1 <= 7 && kingCol - 1 >= 0 && board[kingRow + 1][kingCol - 1] === "empty") {
        kingRow ++;
        kingCol --;
        if (isCheck() === false) {
            tester = false;
        }
        console.log([kingRow, kingCol, tester]);
        kingRow --;
        kingCol ++;
    }

    // Top
    if (kingRow + 1 <= 7 && board[kingRow + 1][kingCol] === "empty") {
        kingRow ++;
        kingCol;
        if (isCheck() === false) {
            tester = false;
        }
        console.log([kingRow, kingCol, tester]);
        kingRow --;
        kingCol;
    }

    // Top right
    if (kingRow + 1 <= 7 && kingCol + 1 <= 7 && board[kingRow + 1][kingCol + 1] === "empty") {
        kingRow ++;
        kingCol ++;
        if (isCheck() === false) {
            tester = false;
        }
        console.log([kingRow, kingCol, tester]);
        kingRow --;
        kingCol --;
    }

    if (tester === true) {
        if (currentTurn === "white") {
            document.getElementById("screen").innerHTML = "Black has won";
        } else {
            document.getElementById("screen").innerHTML = "White has won";
        }
        return currentTurn = "stop";
    }
    return false;
}