//your JS code here. If required.
let player1 = document.getElementById("player-1")
let player1 = document.getElementById("player-2")
let submit = document.getElementById("submit")

let game = document.getElementById("game")
let message = document.getElementById(".message")

let currentPlayer = 1
let board = ["", "", "", "", "", "", "", "", ""]
let winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

submit.addEventListener("click", function(){
	let name1 = player1.value
	let name2 = player2.value
	game.style.display="block"
	player1.parentElement.style.display = "none"

	message.innerText = name1 + ", you're up"
	let cells = document.querySelectorAll(".cell")

	cells.forEach(function (cell){
		cell.addEventListener("click", function(){
			let id = Number(cell.id)
			if(board.id!==""){
				return
			}
			 if (currentPlayer === 1) {
                cell.innerText = "x";
                board[id] = "x";
            } else {
                cell.innerText = "o";
                board[id] = "o";
			 }
			for(let combinations in winningCombinations){
				 let a = board[combination[0]];
                let b = board[combination[1]];
                let c = board[combination[2]];
				if(a!=="" && a===b && b===c){
					if (currentPlayer === 1) {
                        message.innerText =
                            name1 + " congratulations you won!";
                    } else {
                        message.innerText =
                            name2 + " congratulations you won!";
                    }

                    return;
				}
			}
			if (currentPlayer === 1) {
                currentPlayer = 2;
                message.innerText = name2 + ", you're up";
            } else {
                currentPlayer = 1;
                message.innerText = name1 + ", you're up";
            }
		})
	})
	

	
	
} )





