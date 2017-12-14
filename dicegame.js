"use strict"

function enterPlayerNames(){					
var playerOneName= prompt("Player 1: Enter your name");
document.getElementById("player1").innerHTML=playerOneName;
var playerTwoName= prompt("Player 2:Enter your name");
document.getElementById("player2").innerHTML=playerTwoName;
}
enterPlayerNames();


let startingMoney=100;
document.getElementById("bank1").innerHTML="$"+startingMoney;
document.getElementById("bank2").innerHTML="$"+startingMoney;

let currentPoints=0;
document.getElementById("totalPoints1").innerHTML="Total Points " +currentPoints;
document.getElementById("totalPoints2").innerHTML="Total Points " +currentPoints;



//function moneyRule(){
//	if(startingMoney<5){
//	document.getElementById("bank1").innerHTML="Sorry! You don't have enough money left to roll!";
//}
//}
//moneyRule();



function rollDice4(){
	var die4; 
	die4=Math.floor(Math.random()* 4) + 1;
	document.getElementById("result4").innerHTML=die4;
if(die4===4){
	let cost4=5;
	startingMoney += cost4;
	document.getElementById("freeRoll4").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll4").innerHTML="";
}
	let cost4=5;
if(rollDice4 && startingMoney>=5){
	startingMoney -= cost4;
	document.getElementById("bank1").innerHTML="$"+ startingMoney;
}	
else if(startingMoney<5){
	alert("Sorry! You don't have enough money left to roll!");
}
	var pointsWon;
	pointsWon=die4;
	if(pointsWon==die4 && startingMoney>=5);
	currentPoints += pointsWon;
	document.getElementById("totalPoints1").innerHTML="Total Points "+currentPoints;
}


function rollDice6(){
	var die6;
	die6=Math.floor(Math.random()* 6) + 1;
	document.getElementById("result6").innerHTML=die6;
if(die6===6){
	let cost6=6;
	startingMoney += cost6;
	document.getElementById("freeRoll6").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll6").innerHTML="";
}
	let cost6=6;
if(rollDice6 && startingMoney>=6){
	startingMoney -= cost6;
	document.getElementById("bank1").innerHTML="$"+ startingMoney;
}
else if(startingMoney<6){
	alert("Sorry! You don't have enough money left to roll!");
}
	let pointsWon=die6;
	if(pointsWon==die4 && startingMoney>=6);
	currentPoints += pointsWon;
	document.getElementById("totalPoints1").innerHTML="Total Points "+currentPoints;	
}


function rollDice8(){
	var die8; 
	die8=Math.floor(Math.random()* 8) + 1;
	document.getElementById("result8").innerHTML=die8;
if(die8===8){
	let cost8=7;
	startingMoney += cost8;
	document.getElementById("freeRoll8").innerHTML="That's the highest possible number! You got your $ back";
}
else{
	document.getElementById("freeRoll8").innerHTML="";
}
let cost8=7;
if(rollDice8 && startingMoney>=7){
	startingMoney -= cost8;
	document.getElementById("bank1").innerHTML="$"+ startingMoney;
}	
else if(startingMoney<7){
	alert("Sorry! You don't have enough money left to roll!");
}
	let pointsWon=die8;
	if(pointsWon==die8 && startingMoney>=7);
	currentPoints += pointsWon;
	document.getElementById("totalPoints1").innerHTML="Total Points "+currentPoints;
}


function rollDice10(){
	var die10;
	die10=Math.floor(Math.random()* 10) + 1;
	document.getElementById("result10").innerHTML=die10;
if(die10===10){
	let cost10=8;
	startingMoney += cost10;
	document.getElementById("freeRoll10").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll10").innerHTML="";
}
let cost10=8;
if(rollDice10 && startingMoney>=8){
	startingMoney -= cost10;
	document.getElementById("bank1").innerHTML="$"+ startingMoney;
}
else if(startingMoney<8){
	alert("Sorry! You don't have enough money left to roll!");
}	
	let pointsWon=die10;
	if(pointsWon==die10 && startingMoney>=8);
	currentPoints += pointsWon;
	document.getElementById("totalPoints1").innerHTML="Total Points "+currentPoints;
}


function rollDice12(){
	var die12; 
	die12=Math.floor(Math.random()* 12) + 1;
	document.getElementById("result12").innerHTML=die12;
if(die12===12){
	let cost12=9;
	startingMoney += cost12;
	document.getElementById("freeRoll12").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll12").innerHTML="";
}
let cost12=9;
if(rollDice12 && startingMoney>=9){
	startingMoney -= cost12;
	document.getElementById("bank1").innerHTML="$"+ startingMoney;
}	
else if(startingMoney<9){
	alert("Sorry! You don't have enough money left to roll!");
}
	let pointsWon=die12;
	if(pointsWon==die12 && startingMoney>=9);
	currentPoints += pointsWon;
	document.getElementById("totalPoints1").innerHTML="Total Points "+currentPoints;
}


function rollDice20(){
	var die20;
	die20=Math.floor(Math.random()* 20) + 1;
	document.getElementById("result20").innerHTML=die20;
if(die20===20){
	let cost20=13;
	startingMoney += cost20;
	document.getElementById("freeRoll20").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll20").innerHTML="";
}
let cost20=13;
if(rollDice20 && startingMoney >=13){
	startingMoney -= cost20;
	document.getElementById("bank1").innerHTML="$"+ startingMoney;
}	
else if(startingMoney<13){
	alert("Sorry! You don't have enough money left to roll!");
}
	let pointsWon=die20;
	if(pointsWon==die12 && startingMoney>=13);
	currentPoints += pointsWon;
	document.getElementById("totalPoints1").innerHTML="Total Points "+currentPoints;
}

//var startingMoney
//var remainingMoney
//var cost4
//var cost6
//var cost8
//var cost10
//var cost12
//var cost20
//var costOfDice
//var currentPoints
//var pointsWon
//var totalPoints





//function freeRoll(){ **Want to try to combine all the free rolls into one function for all dice
//
//	if(maxDiceRoll){
//
//	}
//}

//var dieRoll= [**Do I make the rolls into an array to assign an if statement to what the roller chooses? Do I use var? does "dieRoll" have to be an ID?
//	rollDice4, rollDice6, rollDice8, rollDice10, rollDice12, rollDice20;
//]

//if(dieRoll===[0]){ **Then does dieRoll need to equal the [i] of the above arrays? 

//let cost4=4; **When just these two lines, would only subtract 4 right away, then not again with multiple clicks. Make loop?
//document.getElementById("bank").innerHTML=startingMoney-cost4; **won't let me put "$" for some reason
//}




	




