//Available letter choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Sets all to zero
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = null;

//The computer will select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.querySelector(".mantis").style.display = "none";

//Allows the user 9 guesses
// guesses = guesses || 9
function updateGuessesLeft() {
    // This links to the HTML element and sets it equal to the guessesLeft. (The guessesLeft will be displayed in HTML.)
    document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    // Display the user's guesses as letters separated by commas. 
    document.querySelector("#let").innerHTML = "Your Guesses So Far: " + guessedLetters.join(", ");
};
// Function will be called when we reset everything
var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    setTimeout(function () { document.querySelector(".mantis").style.display = "none"; }, 5000);
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//When a key is depressed, it becomes the user's guess
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("That was not a valid guess, try again?");
        return false;
    } else if (check === true) {
        //If the Users choice was an alphabet char then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                document.querySelector(".mantis").style.display = '';
                document.querySelector(".mantis").style.height = '4em';
                document.querySelector(".mantis").innerHTML = "Good guess wee grasshopper " + userGuess + " was the letter I was thinking of!";
                reset();
            }
        } else if (guessesLeft == 0) {
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            document.querySelector(".mantis").style.display = '';
            document.querySelector(".mantis").innerHTML = "Sorry grasshopper, I was thinking of the letter " + letterToGuess;
            // Then we'll call the reset.
            reset();

        }
        return false;
    } else {
        alert("Oops, we have an error");
    }

};