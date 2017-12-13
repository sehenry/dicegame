"use strict"
var playerOneName= prompt("Player 1: Enter your name");
document.getElementById("player1").innerHTML=playerOneName;
var playerTwoName= prompt("Player 2:Enter your name");
document.getElementById("player2").innerHTML=playerTwoName;


function rollDice4(){
	var die4; 
	die4=Math.floor(Math.random()* 4) + 1;
	document.getElementById("result4").innerHTML=die4;
	//alert(die4);
if(die4===4){
	document.getElementById("freeRoll4").innerHTML="That's the highest possible roll! Roll again for free!";
}
}
function rollDice6(){
	var die6;
	die6=Math.floor(Math.random()* 6) + 1;
	document.getElementById("result6").innerHTML=die6;

	
if(die6===6){
	document.getElementById("freeRoll6").innerHTML="That's the highest possible roll! Roll again for free!";
}
}
function rollDice8(){
	var die8; 
	die8=Math.floor(Math.random()* 8) + 1;
	document.getElementById("result8").innerHTML=die8;
if(die8===8){
	document.getElementById("freeRoll8").innerHTML="That's the highest possible roll! Roll again for free!";
}
}
function rollDice10(){
	var die10;
	die10=Math.floor(Math.random()* 10) + 1;
	document.getElementById("result10").innerHTML=die10;
if(die10===10){
	document.getElementById("freeRoll10").innerHTML="That's the highest possible roll! Roll again for free!";
}
}
function rollDice12(){
	var die12; 
	die12=Math.floor(Math.random()* 12) + 1;
	document.getElementById("result12").innerHTML=die12;
if(die12===12){
	document.getElementById("freeRoll12").innerHTML="That's the highest possible roll! Roll again for free!";
}
}
function rollDice20(){
	var die20;
	die20=Math.floor(Math.random()* 20) + 1;
	document.getElementById("result20").innerHTML=die20;
if(die20===20){
	document.getElementById("freeRoll20").innerHTML="That's the highest possible roll! Roll again for free!";
}
}

//var startingMoney
//var remainingMoney
//var costOfDice
//var currentPoints
//var pointsWon
//var totalPoints

let startingMoney=100;
document.getElementById("bank").innerHTML="$"+startingMoney;
document.getElementById("bank1").innerHTML="$"+startingMoney;



	




