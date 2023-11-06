// Images counterparts of the string, display nothing if the string is "empty"
const pieces = {
    "blackRook": '<img src="assets/blackRook.png" class="draggable" draggable="true" alt="black Rook"/>',
    "blackKnight": '<img src="assets/blackKnight.png" class="draggable" draggable="true" alt="black Knight"/>',
    "blackBishop": '<img src="assets/blackBishop.png" class="draggable" draggable="true" alt="black Bishop"/>',
    "blackQueen": '<img src="assets/blackQueen.png" class="draggable" draggable="true" alt="black Queen"/>',
    "blackKing": '<img src="assets/blackKing.png" class="draggable" draggable="true" alt="black King"/>',
    "blackPawn": '<img src="assets/blackPawn.png" class="draggable" draggable="true" alt="black Pawn"/>',
    "whiteRook": '<img src="assets/whiteRook.png" class="draggable" draggable="true" alt="white Rook"/>',
    "whiteKnight": '<img src="assets/whiteKnight.png" class="draggable" draggable="true" alt="white Knight"/>',
    "whiteBishop": '<img src="assets/whiteBishop.png" class="draggable" draggable="true" alt="white Bishop"/>',
    "whiteQueen": '<img src="assets/whiteQueen.png" class="draggable " draggable="true" alt="white Queen"/>',
    "whiteKing": '<img src="assets/whiteKing.png" class="draggable" draggable="true" alt="white King"/>',
    "whitePawn": '<img src="assets/whitePawn.png" class="draggable" draggable="true" alt="white Pawn"/>',
    "empty": ""
};

const cols = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7
};

let board = [
    ["whiteRook", "whiteKnight", "whiteBishop", "whiteQueen", "whiteKing", "whiteBishop", "whiteKnight", "whiteRook"],
    ["whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn", "whitePawn"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn", "blackPawn"],
    ["blackRook", "blackKnight", "blackBishop", "blackQueen", "blackKing", "blackBishop", "blackKnight", "blackRook"]
];