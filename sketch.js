var canvas;

var voterCount=0;
var allVoters;
var database;

var form, voter, game;

function setup(){
  canvas = createCanvas(500,400);
  database = firebase.database();
  game = new Game();
  game.start();
}


function draw(){
background("orange")
}
