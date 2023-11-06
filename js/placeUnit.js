function placeUnit() {
    if (unitType.includes(currentTurn)) {
        if (checkIfEmpty() === true) {
            unitEaten = board[endRow][endCol];

            // Set new position of unit
            board[startRow][startCol] = "empty";
            board[endRow][endCol] = unitType;

            // Find current position of black/white King
            findKing();
            
            // If you moved to a position of check revert it
            if (isCheck() === true) {
                board[startRow][startCol] = unitType;
                board[endRow][endCol] = unitEaten;
                // Check if you can't play anymore
                checkmate();
            } else if (isCheck() === false) {
                // If everthing is alright display it and change turn and play move soung
                display();
                soundMove();
                turn();
            }
        } else {
            console.log("ERROR : Can't go above a piece");
        }
    } else {
        console.log("TURN : " + currentTurn);
    }
}