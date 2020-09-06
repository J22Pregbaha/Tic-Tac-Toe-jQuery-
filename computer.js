var startGame = "X";
var playerScore = 0;
var computerScore = 0;
var b1 = $("#one");
var b2 = $("#two");
var b3 = $("#three");
var b4 = $("#four");
var b5 = $("#five");
var b6 = $("#six");
var b7 = $("#seven");
var b8 = $("#eight");
var b9 = $("#nine");

var tiles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

$(".button").on("click", function() {
	var buttonId = this.id;

	if ($("#"+buttonId).html() === "") {
		$("#"+buttonId).html(startGame);
		$("#"+buttonId).addClass("pressedX");
		startGame = "O";

		var index = tiles.indexOf(buttonId);

		tiles.splice(index,1);

		computerPlay();
	}

	animatePress(buttonId);
	checkResult();

});

function computerPlay() {
	var randomTile = tiles[Math.floor(Math.random() * tiles.length)];

	var computerIndex = tiles.indexOf(randomTile);

	tiles.splice(computerIndex,1);

	console.log(randomTile);
	$("#"+randomTile).html(startGame);
	$("#"+randomTile).addClass("pressedO");
	startGame = "X";
}

function animatePress(currentBox) {
	$("#" + currentBox).addClass("pressed");
	setTimeout(function() {
		$("#" + currentBox).removeClass("pressed");
	}, 100);
}

$("#reset").on("click", function() {
	resetGame();
});

function resetGame() {
	$(".button").html("");
	$(".button").removeClass("pressedO");
	$(".button").removeClass("pressedX");
	startGame = "X";
	tiles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
}

function checkResult() {
	if (b1.html()==="X" && b2.html()==="X" && b3.html()==="X") {
		$(".winner").html("⛳Player One Wins");
		playerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b1.html()==="O" && b2.html()==="O"&& b3.html()==="O") {
		$(".winner").html("Computer Wins⛳");
		computerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b4.html()==="X" && b5.html()==="X" && b6.html()==="X") {
		$(".winner").html("⛳Player One Wins");
		playerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b4.html()==="O" && b5.html()==="O" && b6.html()==="O") {
		$(".winner").html("Computer Wins⛳");
		computerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b7.html()==="X" && b8.html()==="X" && b9.html()==="X") {
		$(".winner").html("⛳Player One Wins");
		playerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b7.html()==="O" && b8.html()==="O" && b9.html()==="O") {
		$(".winner").html("Computer Wins⛳");
		computerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b1.html()==="X" && b5.html()==="X" && b9.html()==="X") {
		$(".winner").html("⛳Player One Wins");
		playerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b1.html()==="O" && b5.html()==="O" && b9.html()==="O") {
		$(".winner").html("Computer Wins⛳");
		computerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b3.html()==="X" && b5.html()==="X" && b7.html()==="X") {
		$(".winner").html("⛳Player One Wins");
		playerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b3.html()==="O" && b5.html()==="O" && b7.html()==="O") {
		$(".winner").html("Computer Wins⛳");
		computerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b1.html()==="X" && b4.html()==="X" && b7.html()==="X") {
		$(".winner").html("⛳Player One Wins");
		playerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b1.html()==="O" && b4.html()==="O" && b7.html()==="O") {
		$(".winner").html("Computer Wins⛳");
		computerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b2.html()==="X" && b5.html()==="X" && b8.html()==="X") {
		$(".winner").html("⛳Player One Wins");
		playerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b2.html()==="O" && b5.html()==="O" && b8.html()==="O") {
		$(".winner").html("Computer Wins⛳");
		computerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b3.html()==="X" && b6.html()==="X" && b9.html()==="X") {
		$(".winner").html("⛳Player One Wins");
		playerScore++;

		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b3.html()==="O" && b6.html()==="O" && b9.html()==="O") {
		$(".winner").html("Computer Wins⛳");
		computerScore++;
		setTimeout(function() {
			gameOver();
		}, 300);
	}

	if (b1.html()!="" && b2.html()!="" && b3.html()!="" && b4.html()!="" && b5.html()!="" && b6.html()!="" && b7.html()!="" && b8.html()!="" && b9.html()!="") {
		if (playerScore === playerScore && computerScore === computerScore) {
			$(".winner").html("Draw! Nobody wins");
			setTimeout(function() {
				gameOver();
			}, 300);
		}
	}

	$("#playerScore").html(playerScore);
	$("#computerScore").html(computerScore);
}

function gameOver() {
	$("body").addClass("game-over");
	setTimeout(function() {
		$("body").removeClass("game-over");
	}, 200);
	resetGame();
}