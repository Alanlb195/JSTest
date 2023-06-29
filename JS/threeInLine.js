var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];

function makeMove(squareIndex) {
    if (board[squareIndex] === "") {
        board[squareIndex] = currentPlayer;
        document.getElementsByClassName("square")[squareIndex].innerText = currentPlayer;

        if (checkWin(currentPlayer)) {
            alert("¡" + currentPlayer + " ha ganado!");
            resetGame();
            return;
        }

        if (board.every(square => square !== "")) {
            alert("¡Empate!");
            resetGame();
            return;
        }

        currentPlayer = currentPlayer
            === "X"
            ? "O"
            : "X";
    }
}

function checkWin(player) {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        return combination.every(squareIndex => board[squareIndex] === player);
    });
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerText = "";
    }
}