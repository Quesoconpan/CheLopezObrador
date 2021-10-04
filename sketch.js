var gameState=0
var playerCount
var database
var Form1,AllPlayers,Game1

function setup(){

database=firebase.database();

createCanvas(500,500);

Game1 = new Game();
Game1.gameState();
Game1.start();

}

function draw(){

background("blue");

}
