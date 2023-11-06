const unitLine = ["blackQueen", "whiteQueen", "blackRook", "whiteRook"];
const unitDiag = ["blackQueen", "whiteQueen", "blackBishop", "whiteBishop"];
const unitKnight = ["blackKnight", "whiteKnight"];
const unitKing = ["blackKing", "whiteKing"];
const unitPawn = ["blackPawn", "whitePawn"];
let oppositeSide;
let kingRow;
let kingCol;

function findKing() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === currentTurn + "King") {
                kingRow = i;
                kingCol = j;
                return;
            }
        }
    }
}

// It will check for any menace in his surroundings if it finds something it return TRUE else it return FALSE
function isCheck() {
    // Top line
    for (let num = 1; kingRow + num <= 7; num++) {
        if (/empty/.test(board[kingRow + num][kingCol]) === false) {
            if (board[kingRow + num][kingCol].includes(oppositeSide) && unitLine.includes(board[kingRow + num][kingCol])) {
                return true;
            }
            break;
        }
    }
    // Bottom line
    for (let num = 1; kingRow - num >= 0; num++) {
        if (/empty/.test(board[kingRow - num][kingCol]) === false) {
            if (board[kingRow - num][kingCol].includes(oppositeSide) && unitLine.includes(board[kingRow - num][kingCol])) {
                return true;
            }
            break;
        }
    }
    // Right line
    for (let num = 1; kingCol + num <= 7; num++) {
        if (/empty/.test(board[kingRow][kingCol + num]) === false) {
            if (board[kingRow][kingCol + num].includes(oppositeSide) && unitLine.includes(board[kingRow][kingCol + num])) {
                return true;
            }
            break;
        }
    }
    // Left line
    for (let num = 1; kingCol - num >= 0; num++) {
        if (/empty/.test(board[kingRow][kingCol - num]) === false) {
            if (board[kingRow][kingCol - num].includes(oppositeSide) && unitLine.includes(board[kingRow][kingCol - num])) {
                return true;
            }
            break;
        }
    }
    // Top left diag
    for (let num = 1; kingRow + num <= 7 && kingCol - num >= 0; num++) {
        if (/empty/.test(board[kingRow + num][kingCol - num]) === false) {
            if (board[kingRow + num][kingCol - num].includes(oppositeSide) && unitDiag.includes(board[kingRow + num][kingCol - num])) {
                return true;
            }
            break;
        }
    }
    // Top right diag
    for (let num = 1; kingRow + num <= 7 && kingCol + num <= 7; num++) {
        if (/empty/.test(board[kingRow + num][kingCol + num]) === false) {
            if (board[kingRow + num][kingCol + num].includes(oppositeSide) && unitDiag.includes(board[kingRow + num][kingCol + num])) {
                return true;
            }
            break;
        }
    }
    // Bottom left diag
    for (let num = 1; kingRow - num >= 0 && kingCol - num >= 0; num++) {
        if (/empty/.test(board[kingRow - num][kingCol - num]) === false) {
            if (board[kingRow - num][kingCol - num].includes(oppositeSide) && unitDiag.includes(board[kingRow - num][kingCol - num])) {
                return true;
            }
            break;
        }
    }
    // Bottom diag
    for (let num = 1; kingRow - num >= 0 && kingCol + num <= 7; num++) {
        if (/empty/.test(board[kingRow - num][kingCol + num]) === false) {
            if (board[kingRow - num][kingCol + num].includes(oppositeSide) && unitDiag.includes(board[kingRow - num][kingCol + num])) {
                return true;
            }
            break;
        }
    }
    // Knight top side
    if (kingRow + 2 <= 7) {
        if (kingCol + 1 <=7 && board[kingRow + 2][kingCol + 1].includes(oppositeSide) && unitKnight.includes(board[kingRow + 2][kingCol + 1])) {
            return true;
        }
        if (kingCol - 1 >= 0 && board[kingRow + 2][kingCol - 1].includes(oppositeSide) && unitKnight.includes(board[kingRow + 2][kingCol - 1])) {
            return true;
        }
    }
    // Knight bottom side
    if (kingRow - 2 >= 0) {
        if (kingCol + 1 <=7 && board[kingRow - 2][kingCol + 1].includes(oppositeSide) && unitKnight.includes(board[kingRow - 2][kingCol + 1])) {
            return true;
        }
        if (kingCol - 1 >= 0 && board[kingRow - 2][kingCol - 1].includes(oppositeSide) && unitKnight.includes(board[kingRow - 2][kingCol - 1])) {
            return true;
        }
    }
    // Knight right side
    if (kingCol + 2 <= 7) {
        if (kingRow + 1 <=7 && board[kingRow + 1][kingCol + 2].includes(oppositeSide) && unitKnight.includes(board[kingRow + 1][kingCol + 2])) {
            return true;
        }
        if (kingRow - 1 >= 0 && board[kingRow - 1][kingCol + 2].includes(oppositeSide) && unitKnight.includes(board[kingRow - 1][kingCol + 2])) {
            return true;
        }
    }
    // Knight left side
    if (kingCol - 2 >= 0) {
        if (kingRow + 1 <=7 && board[kingRow + 1][kingCol - 2].includes(oppositeSide) && unitKnight.includes(board[kingRow + 1][kingCol - 2])) {
            return true;
        }
        if (kingRow - 1 >= 0 && board[kingRow - 1][kingCol - 2].includes(oppositeSide) && unitKnight.includes(board[kingRow - 1][kingCol - 2])) {
            return true;
        }
    }
    // King top side
    if (kingRow + 1 <= 7) {
        if (board[kingRow + 1][kingCol].includes(oppositeSide) && unitKing.includes(board[kingRow + 1][kingCol])) {
            return true;
        }
        if (kingCol + 1 <= 7) {
            if (board[kingRow + 1][kingCol + 1].includes(oppositeSide) && unitKing.includes(board[kingRow + 1][kingCol + 1])) {
                return true;
            }
        }
        if (kingCol - 1 >= 0) {
            if (board[kingRow + 1][kingCol - 1].includes(oppositeSide) && unitKing.includes(board[kingRow + 1][kingCol - 1])) {
                return true;
            }
        }
    }
    // King center
    if (kingCol + 1 <= 7) {
        if (board[kingRow][kingCol + 1].includes(oppositeSide) && unitKing.includes(board[kingRow][kingCol + 1])) {
            return true;
        }
    }
    if (kingCol - 1 >= 0) {
        if (board[kingRow][kingCol - 1].includes(oppositeSide) && unitKing.includes(board[kingRow][kingCol - 1])) {
            return true;
        }
    }
    // King bottom side
    if (kingRow - 1 >= 0) {
        if (board[kingRow - 1][kingCol].includes(oppositeSide) && unitKing.includes(board[kingRow - 1][kingCol])) {
            return true;
        }
        if (kingCol + 1 <= 7) {
            if (board[kingRow - 1][kingCol + 1].includes(oppositeSide) && unitKing.includes(board[kingRow - 1][kingCol + 1])) {
                return true;
            }
        }
        if (kingCol - 1 >= 0) {
            if (board[kingRow - 1][kingCol - 1].includes(oppositeSide) && unitKing.includes(board[kingRow - 1][kingCol - 1])) {
                return true;
            }
        }
    }
    //Pawn black
    if (board[kingRow][kingCol].includes("black")) {
        if (kingRow - 1 >= 0 && kingCol - 1 >= 0) {
            if (board[kingRow - 1][kingCol - 1].includes(oppositeSide) && unitPawn.includes(board[kingRow - 1][kingCol - 1])) {
                return true;
            }
        }
        if (kingRow - 1 >= 0 && kingCol + 1 <= 7) {
            if (board[kingRow - 1][kingCol + 1].includes(oppositeSide) && unitPawn.includes(board[kingRow - 1][kingCol + 1])) {
                return true;
            }
        }
    }
    // Pawn white
    if (board[kingRow][kingCol].includes("white")) {
        if (kingRow + 1 <= 7 && kingCol - 1 >= 0) {
            if (board[kingRow + 1][kingCol - 1].includes(oppositeSide) && unitPawn.includes(board[kingRow + 1][kingCol - 1])) {
                return true;
            }
        }
        if (kingRow + 1 <= 7 && kingCol + 1 <= 7) {
            if (board[kingRow + 1][kingCol + 1].includes(oppositeSide) && unitPawn.includes(board[kingRow + 1][kingCol + 1])) {
                return true;
            }
        }
    } 

    // If not in check return false
    return false;
}