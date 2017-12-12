"use strict"
var numberOfPlayers= prompt("How many players?");
var playerName= prompt("Enter your name");


function rollDice(){
	var die4 = document.getElementById("d4");
	var die6 = document.getElementById("d6");
	var die8 = document.getElementById("d8");
	var die10 = document.getElementById("d10");
	var die12 = document.getElementById("d12");
	var die20 = document.getElementById("d20");
	var status = document.getElementById("status");
	var d4=Math.floor(Math.random()* 4) + 1;
	var d6=Math.floor(Math.random()* 6) + 1;
	var d8=Math.floor(Math.random()* 8) + 1;
	var d10=Math.floor(Math.random()* 10) + 1;
	var d12=Math.floor(Math.random()* 12) + 1;
	var d20=Math.floor(Math.random()* 20) + 1;
	var dieResult = ("d4","d6","d8","d10","d12","d20");
	die4.innerhtml = d4;
	die6.innerhtml = d6;
	die8.innerhtml = d8;
	die10.innerhtml = d10;
	die12.innerhtml = d12;
	die20.innerhtml = d20;
	status.innerhtml="You rolled '+dieResult+'";

}


