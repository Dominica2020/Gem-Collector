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
var crystalPurple = 0;
var crystalClear = 0;
var crystalPink = 0;
var crystalViolet = 0;

//On-Click Functions 
$("#purple").on("click", function() {
    alert("test");
})
$("#diamond").on("click", function() {
    alert("test");
})
$("#pink").on("click", function() {
    alert("test");
})
$("#violet").on("click", function() {
    alert("test");
})

//Random Number Generation
var targetNum = function (start, range) {
    var getRandom = Math.floor((Math.random() * (range - start)) + start);
    return getRandom;
}
console.log(targetNum(19, 120));

var crystalPurple = function (start, range) {
    var getRandom = Math.floor((Math.random() * (range - start)) + start);
    return getRandom;
}
console.log(crystalPurple(1, 12));

var crystalClear = function (start, range) {
    var getRandom = Math.floor((Math.random() * (range - start)) + start);
    return getRandom;
}
console.log(crystalClear(1, 12));

var crystalPink = function (start, range) {
    var getRandom = Math.floor((Math.random() * (range - start)) + start);
    return getRandom;
}
console.log(crystalPink(1, 12));

var crystalViolet = function (start, range) {
    var getRandom = Math.floor((Math.random() * (range - start)) + start);
    return getRandom;
}
console.log(crystalViolet(1, 12));

//HTML targets

$("#target-num").text(targetNum);
$("#purple").html(crystalPurple);
$("#diamond").html(crystalClear);
$("#pink").html(crystalPink);
$("#violet").html(crystalViolet);











/* Notes: var targetNum = function(start, range) {
    var getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start);
    }
    return getRandom;
}
console.log(targetNum(19, 120)); */