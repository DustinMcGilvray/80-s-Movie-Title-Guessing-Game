//Global Variables
var wins = 0;
var lose = 0;
var incorrectGuess = [];
var guessesLeft = 3;
var underScore = [];
var correctGuess = [];
var chosenMovieTitle = "";
var movieTitleSplit = chosenMovieTitle.split("");
console.log(guessesLeft);

//Movie Title Bank
var movieTitle = [
    "The\Burbs", "The\Neverending\Story", "Flight\of\the\Navigator", "Weird\Science",
    "Batteries\Not\Included", "Mac\and\Me", "Howard\the\Duck", "Ferris\Buellers\Day\Off",
    "The\Money\Pit", "Spaceballs", "Dirty\Dancing", "The\Princess\Bride", "The\Labyrinth",
    "Top\Gun", "Ghostbusters", "Major\Leauge", "Field\of\Dreams", "FireFox", "Iron\Eagle",
    "Red\Dawn", "WarGames", "Real\Genius", "Adventures\in\Babysitting", "Mystic\Pizza",
    "The\Goonies", "Clue", "Stand\By\Me", "Back\to\the\Future", "ET\the\Extra\Terrestrial",
    "Gremlins", "Indiana\Jones\and\the\Raiders\of\the\Lost\Ark", "The\Karate\Kid", "Die\Hard",
    "Footloose", "Caddyshack", "Bill\and\Teds\Excellent\Adventure", "Big", "Honey\I\Shrunk\the\Kids",
    "Beetlejuice", "Ghostbusters\Two", "Rain\Man", "Lethal\Weapon", "Batman", "National\Lampoons\Christmas\Vacation",
    "Crocodile\Dundee", "Police\Academy", "Short\Circuit", "Who\Framed\Roger\Rabbit", "Uncle\Buck",
    "When\Harry\Met\Sally", "Overboard", "Scrooged", "The\Great\Outdoors", "Harry\and\the\Hendersons",
    "Parenthood"
]

//Converts Uppercase characters to lowercase in array
var arrayToLower = String.prototype.toLowerCase.apply(movieTitle).split(",");

// random number generator for Movie Title
chosenMovieTitle = arrayToLower[Math.floor(Math.random() * arrayToLower.length)];
console.log(chosenMovieTitle);
var movieTitleSplit = chosenMovieTitle.split("");

//create underscores and displays on web page
for (var i = 0; i < chosenMovieTitle.length; i++) {
    underScore.push("_");
    document.getElementById("underScore").innerHTML=underScore.join(" ");
}

//Game Start Function
function gameStart() {
    incorrectGuess = [];
    correctGuess = [];
    underScore = [];
    guessesLeft = 12;
    arrayToLower = String.prototype.toLowerCase.apply(movieTitle).split(",");
    chosenMovieTitle = arrayToLower[Math.floor(Math.random() * arrayToLower.length)];

    for (var i = 0; i < chosenMovieTitle.length; i++) {
            underScore.push("_");
            console.log(underScore);
            document.getElementById("underScore").innerHTML=underScore.join(" ");
        }  
    }
//Grabbing the Event (user input) and changing number to a letter
document.onkeyup=function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

//Checking user guess input against random chosen movie title
    if (chosenMovieTitle.indexOf(userGuess)> -1) {

//If userGuess is correct then letter choice placed in correct guess "bucket"
        correctGuess.push(userGuess);
        console.log(correctGuess);
    }
    
//If userGuess is incorrect then letter choice placed in incorrect guess "bucket"
    else {
        incorrectGuess.push(userGuess);
        guessesLeft --;
        console.log(incorrectGuess);
        console.log(guessesLeft);
        document.getElementById("incorrectGuesses").innerHTML=incorrectGuess;
        document.getElementById("remainingGuesses").innerHTML=guessesLeft;
    }

//If userGuess is correct then the letter replaces underScore
    for (var i = 0; i < chosenMovieTitle.length; i++) {

//Correct userGuess is "removed" from "bucket" amd compared against underscore
    if (chosenMovieTitle[i]===userGuess) {

//Correct guess is replacing underScore position in index position of array        
        underScore[i] = userGuess;
        console.log(underScore);
        console.log(underScore.join(" "));
        document.getElementById("underScore").innerHTML=underScore.join(" ");
    }
}
//If chosen letters replaced all underscores then user will win
    if(underScore.join("") === chosenMovieTitle) {
        wins++;
        document.getElementById("winCounter").innerHTML=wins;
    
//Game Reset After Win
    gameStart();

    }

    else if(guessesLeft===0) {
        lose ++;
        document.getElementById("loseCounter").innerHTML=lose;
    
//Game Reset After Lose
    gameStart();
    
}
}














