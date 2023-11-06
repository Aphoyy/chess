let dragged = null;

// Give back the corresponding box by giving it the id
function findSpot(id) {
    let col = cols[id.match(/[A-Za-z]/)];
    let row = id.match(/\d/) - 1;
    return board[row][col];
}

// Change these 2 values for the first turn
const firstPlayer = "white";
document.getElementById("screen").innerHTML = "White turn";

let currentTurn = firstPlayer;

function turn() {
    if (currentTurn === "black") {
        document.getElementById("screen").innerHTML = "White turn";
        currentTurn = "white";
        oppositeSide = "black";
    } else if (currentTurn === "white") {
        document.getElementById("screen").innerHTML = "Black turn";
        currentTurn = "black";
        oppositeSide = "white";
    }
}

function display() {
    // Display current states of each boxes
    Array.from(document.getElementsByClassName("box")).map((input) => {
        input.innerHTML = pieces[findSpot(input.id)];
    });

    // Set a draggable state to all images and store value and position when dragged
    Array.from(document.getElementsByClassName("draggable")).map((input) => {
        input.addEventListener("dragstart", (event) => {
            dragged = event.target;
            startPosition = dragged.parentNode.id;
            unitType = findSpot(startPosition);
        });
        
        input.addEventListener("dragover", (event) => {
            setOverlay();
        });

        input.addEventListener("dragend", (event) => {
            removeOverlay();
        });
    });
}

Array.from(document.getElementsByClassName("box")).map((input) => {
    input.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    input.addEventListener("drop", (event) => {
        endPosition = event.target.id;
        event.preventDefault();
        if (/box/.test(event.target.className)) {
            if (isMoveValid()) {
                display();
            }
        }
    });
});

function setOverlay() {
    Array.from(document.getElementsByClassName("draggable")).map((image) => {
        image.classList.add("overlay");
    });
}

function removeOverlay() {
    Array.from(document.getElementsByClassName("draggable")).map((image) => {
        image.classList.remove("overlay");
    });
}