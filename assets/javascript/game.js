/*Start Game
1. Random number is generated and displayed 
2. Crystal buttons are each given a random number that cannot be seen
3. Each time we click the crystal buttons the random invisible numbers are added up & displayed as your total score
4. If we can get our total score to equal the random number we win; esle we lose
5. When we win or lose (this is updated by an increment of 1); the game resets and starts all over again with new random numbers and total score is 0 again
*/

//Global Variables//
var wins = 0;
var losses = 0;
var targetNum = 0;
var totalScore = 0;
var crystals = {
    purple:
    {
        name: "Purple",
        value: 0
    },
    clear:
    {
        name: "Clear",
        value: 0
    },
    pink:
    {
        name: "Pink",
        value: 0
    },
    violet:
    {
        name: "Violet",
        value: 0
    },
};


//Game Functions
var getRandom = function(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {
    
    //reset total score
    totalScore = 0;
    $("#total-score").html(totalScore);

    //set a new target score
    targetNum = getRandom(19, 120);

    //set different values for each crystal
    crystals.purple.value = getRandom(1, 12);
    crystals.clear.value = getRandom(1, 12);
    crystals.pink.value = getRandom(1, 12);
    crystals.violet.value = getRandom(1, 12);
    
    //Test
    console.log("Target Score " + targetNum);
    console.log("purple: " + crystals.purple.value + " | clear: " + crystals.clear.value + " | pink: " + crystals.pink.value + " | violet: " + crystals.violet.value);

    //HTML targets
    $("#target-num").html(targetNum);
    $("#purple").html(crystals.purple.value);
    $("#clear").html(crystals.clear.value);
    $("#pink").html(crystals.pink.value);
    $("#violet").html(crystals.violet.value);
    
}

//Functions to change total score based on cystal clicks
var addValues = function(crystals) {
    totalScore = totalScore + crystals.value;
    $("#total-score").html(totalScore);
     
    if (totalScore === targetNum) {
         wins++;
         startGame();
     } 
     else if (totalScore > targetNum) {
         losses++;
         startGame();
     }
    console.log("Your score " + totalScore);

    //HTML updates
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);

}

//Calling Start Game function
startGame();

//On-Click Functions 
$("#purple").on("click", function () {
    addValues(crystals.purple);
})
$("#clear").on("click", function () {
    addValues(crystals.clear);
})
$("#pink").on("click", function () {
    addValues(crystals.pink);
})
$("#violet").on("click", function () {
    addValues(crystals.violet);
})


/* 
Notes
------------
Seperate Option for random number generation:
    targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("target number " + targetNum);

    purple = Math.floor(Math.random() * 12) + 1;
    console.log("purple " + purple);

    clear = Math.floor(Math.random() * 12) + 1;
    console.log("clear " + clear);

    pink = Math.floor(Math.random() * 12) + 1;
    console.log("pink " + pink);

    violet = Math.floor(Math.random() * 12) + 1;
    console.log("violet " + violet);
___________________________________________________________________________

___________________________________________________________________________

*/