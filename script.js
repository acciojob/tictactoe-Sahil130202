let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");
let submit = document.getElementById("submit");

let game = document.getElementById("game");
let message = document.querySelector(".message");

let currentPlayer = "x";

submit.addEventListener("click", function () {
    let name1 = player1.value;
    let name2 = player2.value;

    game.style.display = "block";
    player1.parentElement.style.display = "none";

    message.innerText = name1 + ", you're up";

    let cells = document.querySelectorAll(".cell");

    cells.forEach(function (cell) {
        cell.addEventListener("click", function () {

            // Don't overwrite an existing move
            if (cell.innerText !== "") {
                return;
            }

            cell.innerText = currentPlayer;

            // Check winner
            let win = checkWinner();

            if (win) {
                if (currentPlayer === "x") {
                    message.innerText =
                        name1 + " congratulations you won!";
                } else {
                    message.innerText =
                        name2 + " congratulations you won!";
                }
                return;
            }

            // Change player
            if (currentPlayer === "x") {
                currentPlayer = "o";
                message.innerText = name2 + ", you're up";
            } else {
                currentPlayer = "x";
                message.innerText = name1 + ", you're up";
            }
        });
    });
});


function checkWinner() {

    let winningCombinations = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],

        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],

        ["1", "5", "9"],
        ["3", "5", "7"]
    ];

    for (let combination of winningCombinations) {

        let a = document.getElementById(combination[0]).innerText;
        let b = document.getElementById(combination[1]).innerText;
        let c = document.getElementById(combination[2]).innerText;

        if (a !== "" && a === b && b === c) {
            return true;
        }
    }

    return false;
}