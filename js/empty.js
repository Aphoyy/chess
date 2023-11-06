function checkIfEmpty() {
    if (/white/.test(unitType)) {
        if (/white/.test(board[endRow][endCol])) {
            return false;
        }
    }
    if (/black/.test(unitType)) {
        if (/black/.test(board[endRow][endCol])) {
            return false;
        }
    }
    if (/Rook/.test(unitType)) {
        return checkStraightLines();
    } else if (/Bishop/.test(unitType)) {
        return checkDiagonals();
    } else if (/Queen/.test(unitType)) {
        return checkStraightLines() && checkDiagonals();
    }
    return true;
}

function checkStraightLines() {
    if (startRow < endRow && startCol === endCol) {
        for (let i = startRow + 1; i < endRow; i++) {
            if (board[i][endCol] !== "empty") {
                return false;
            }
        }
    } else if (startRow > endRow && startCol === endCol) {
        for (let i = startRow - 1; i > endRow; i--) {
            if (board[i][endCol] !== "empty") {
                return false;
            }
        }
    } else if (startCol < endCol && startRow === endRow) {
        for (let i = startCol + 1; i < endCol; i++) {
            if (board[endRow][i] !== "empty") {
                return false;
            }
        }
    } else if (startCol > endCol && startRow === endRow) {
        for (let i = startCol - 1; i > endCol; i--) {
            if (board[endRow][i] !== "empty") {
                return false;
            }
        }
    }
    return true;
}

function checkDiagonals() {
    if (startRow < endRow && startCol <= endCol) {
        for (let i = 1; i < 7; i++) {
            if (startRow + i <= endRow && startCol + i < endCol && board[startRow + i][startCol + i] !== "empty") {
                return false;
            }
        }
    } else if (startRow > endRow && startCol >= endCol) {
        for (let i = 1; i < 7; i++) {
            if (startRow - i > endRow && startCol - i > endCol) {
                if (board[startRow - i][startCol - i] != "empty") {
                    return false;
                }
            }
        }
    } else if (startRow > endRow && startCol <= endCol) {
        for (let i = 1; i < 7; i++) {
            if (startRow - i > endRow && startCol + i < endCol) {
                if (board[startRow - i][startCol + i] != "empty") {
                    return false;
                }
            }
        }
    } else if (startRow < endRow && startCol >= endCol) {
        for (let i = 1; i < 7; i++) {
            if (startRow + i < endRow && startCol - i > endCol) {
                if (board[startRow + i][startCol - i] != "empty") {
                    return false;
                }
            }
        }
    }
    return true;
}