// Create computer's alphabet character pool:
function generateAlphabet() {
    var arr = [];
    for (var i = 97; i <= 122; i++) {
      arr.push(String.fromCharCode(i));
    }
    return arr;
  }
  //GLOBAL SCOPE
  // Start the game with a score of 0.
  var playerScore = 0;
  var computerScore = 0;
  // var losses = 0;
  var guessesRemaining = 12;
  var alphabet = generateAlphabet();
  var $playerScore = document.getElementById("player-score");
  var $computerScore = document.getElementById("computer-score");
  var $alreadyGuessed = document.getElementById("already-guessed");
  var $guessesRemaining = document.getElementById("guesses-remaining");
  console.log($alreadyGuessed);
  // Randomly chooses an option from the options array. This is the computer's generation of random characters:
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  var $computerGuess = document.getElementById("computer-guess");
  console.log("Evil Computer's Guess:", computerGuess);
  var alreadyGuessedArr = [];
  //EVENT LISTENER:
  // When the user presses a key, it will run the following function...
  document.onkeyup = function(event) {
    guessesRemaining--;
    var playerGuess = event.key.toLowerCase();
    alreadyGuessedArr.push(playerGuess);
    console.log("player guess " + playerGuess);
    // If the player guesses the same letter as the computer, increment your wins variable.
    if (playerGuess === computerGuess) {
      playerScore++;
      guessesRemaining = 12;
      alreadyGuessedArr = [];
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("Evil Computer's Guess:", computerGuess);
      
    } else if (guessesRemaining === 0) {
      computerScore++;
      // losses++;
      guessesRemaining = 12;
      alreadyGuessedArr = [];
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log("Evil Computer's Guess:", computerGuess);
      
    }
    // else if (guessesRemaining === 0) {
    //     computerScore++;
    //     guessesRemaining = 12;
    //     alreadyGuessedArr = [];
    //     computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    //     // document.getElementById("computer-guess").innerText = computerGuess;
    //     $computerScore.textContent = computerScore;
    //     document.getElementById("computer-score").innerText = computerScore;
    // }
    console.log("remaining " + guessesRemaining);
    
    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("already-guessed").innerHTML = alreadyGuessedArr.join(",   ");
    // $alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");
    // document.getElementById("guesses-remaining").innerText = guessesRemaining;
  };
  