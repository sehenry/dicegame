"use strict"
var player1 = {
	name: "",
	startingMoney: 100,
	currentPoints: 0,
	totalPoints: "totalPoints1",
	bank: "bank1"
}

var player2 = {
	name: "",
	startingMoney: 100,
	currentPoints: 0,
	totalPoints: "totalPoints2",
	bank: "bank2"
}

function enterPlayerNames(){					
player1.name= prompt("Player 1: Enter your name");
document.getElementById("player1").innerHTML=player1.name;
player2.name= prompt("Player 2:Enter your name");
document.getElementById("player2").innerHTML=player2.name;
}
enterPlayerNames();




document.getElementById(player1.bank).innerHTML="$"+player1.startingMoney;
document.getElementById(player2.bank).innerHTML="$"+player2.startingMoney;


document.getElementById(player1.totalPoints).innerHTML="Total Points " +player1.currentPoints;
document.getElementById(player2.totalPoints).innerHTML="Total Points " +player2.currentPoints;

function gameWinner(player1, player2){
if(player1.bank <5 && player2.bank <5){	
	if(player1.totalPoints > player2.totalPoints){
		alert("Congrats, " +player1.name+" ! You won Splunkle!");
	}
		else if(player2.totalPoints > player1.totalPoints){
			alert("Congrats, " +player2.name+ " ! You won Splunkle!");
		}
		
		else{
			alert(player1.name +" and "+ player2.name+ " , you TIED! Play again!");
			}
	}
}


function rollDice4(player){
	var die4; 
	die4=Math.floor(Math.random()* 4) + 1;
	document.getElementById("result4").innerHTML=die4;
if(die4===4){
	let cost4=5;
	player.startingMoney += cost4;
	document.getElementById("freeRoll4").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll4").innerHTML="";
}
	let cost4=5;
if(rollDice4 && player.startingMoney>=5){
	player.startingMoney -= cost4;
	document.getElementById(player.bank).innerHTML="$"+ player.startingMoney;
}	
else if(player.startingMoney<5){
	alert("Sorry! You don't have enough money left to roll!");
}
	var pointsWon;
	pointsWon=die4;
	if(pointsWon==die4 && player.startingMoney>=5){
	player.currentPoints += pointsWon;
	document.getElementById(player.totalPoints).innerHTML="Total Points "+player.currentPoints;
}
}


function rollDice6(player){
	var die6;
	die6=Math.floor(Math.random()* 6) + 1;
	document.getElementById("result6").innerHTML=die6;
if(die6===6){
	let cost6=6;
	player.startingMoney += cost6;
	document.getElementById("freeRoll6").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll6").innerHTML="";
}
	let cost6=6;
if(rollDice6 && player.startingMoney>=6){
	player.startingMoney -= cost6;
	document.getElementById(player.bank).innerHTML="$"+ player.startingMoney;
}
else if(player.startingMoney<6){
	alert("Sorry! You don't have enough money left to roll!");
}
	var pointsWon;
	pointsWon=die6;
	if(pointsWon==die6 && player.startingMoney>=6){
	player.currentPoints += pointsWon;
	document.getElementById(player.totalPoints).innerHTML="Total Points "+player.currentPoints;	
}
}


function rollDice8(player){
	var die8; 
	die8=Math.floor(Math.random()* 8) + 1;
	document.getElementById("result8").innerHTML=die8;
if(die8===8){
	let cost8=7;
	player.startingMoney += cost8;
	document.getElementById("freeRoll8").innerHTML="That's the highest possible number! You got your $ back";
}
else{
	document.getElementById("freeRoll8").innerHTML="";
}
let cost8=7;
if(rollDice8 && player.startingMoney>=7){
	player.startingMoney -= cost8;
	document.getElementById(player.bank).innerHTML="$"+ player.startingMoney;
}	
else if(player.startingMoney<7){
	alert("Sorry! You don't have enough money left to roll!");
}
	var pointsWon;
	pointsWon=die8;
	if(pointsWon==die8 && player.startingMoney>=7){
	player.currentPoints += pointsWon;
	document.getElementById(player.totalPoints).innerHTML="Total Points "+player.currentPoints;
}
}

function rollDice10(player){
	var die10;
	die10=Math.floor(Math.random()* 10) + 1;
	document.getElementById("result10").innerHTML=die10;
if(die10===10){
	let cost10=8;
	player.startingMoney += cost10;
	document.getElementById("freeRoll10").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll10").innerHTML="";
}
let cost10=8;
if(rollDice10 && player.startingMoney>=8){
	player.startingMoney -= cost10;
	document.getElementById(player.bank).innerHTML="$"+ player.startingMoney;
}
else if(player.startingMoney<8){
	alert("Sorry! You don't have enough money left to roll!");
}	
	var pointsWon
	pointsWon=die10;
	if(pointsWon==die10 && player.startingMoney>=8){
	player.currentPoints += pointsWon;
	document.getElementById(player.totalPoints).innerHTML="Total Points "+player.currentPoints;
}
}


function rollDice12(player){
	var die12; 
	die12=Math.floor(Math.random()* 12) + 1;
	document.getElementById("result12").innerHTML=die12;
if(die12===12){
	let cost12=9;
	player.startingMoney += cost12;
	document.getElementById("freeRoll12").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll12").innerHTML="";
}
let cost12=9;
if(rollDice12 && player.startingMoney>=9){
	player.startingMoney -= cost12;
	document.getElementById(player.bank).innerHTML="$"+ player.startingMoney;
}	
else if(player.startingMoney<9){
	alert("Sorry! You don't have enough money left to roll!");
}
	var pointsWon;
	pointsWon=die12;
	if(pointsWon==die12 && player.startingMoney>=9){
	player.currentPoints += pointsWon;
	document.getElementById(player.totalPoints).innerHTML="Total Points "+player.currentPoints;
}
}


function rollDice20(player){
	var die20;
	die20=Math.floor(Math.random()* 20) + 1;
	document.getElementById("result20").innerHTML=die20;
if(die20===20){
	let cost20=13;
	player.startingMoney += cost20;
	document.getElementById("freeRoll20").innerHTML="That's the highest possible number! You got your $ back!";
}
else{
	document.getElementById("freeRoll20").innerHTML="";
}
let cost20=13;
if(rollDice20 && player.startingMoney >=13){
	player.startingMoney -= cost20;
	document.getElementById(player.bank).innerHTML="$"+ player.startingMoney;
}	
else if(player.startingMoney<13){
	alert("Sorry! You don't have enough money left to roll!");
}
	var pointsWon;
	pointsWon=die20;
	if(pointsWon==die20 && player.startingMoney>=13){
	player.currentPoints += pointsWon;
	document.getElementById(player.totalPoints).innerHTML="Total Points "+player.currentPoints;
}
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
//var player1TotalPoints
//var player2TotalPoints
//var gameWinner



//function takeTurns(player1, player2){
	//for(i=0; i>1; i++){
		//player1= takeTurn
	//}
//}



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


//function moneyRule(){
//	if(startingMoney<5){
//	document.getElementById(player.bank).innerHTML="Sorry! You don't have enough money left to roll!";
//}
//}
//moneyRule();
	



//if startingMoney <5 then start taking money from player2.startingMoney(bank2) and add points to totalPoints2
