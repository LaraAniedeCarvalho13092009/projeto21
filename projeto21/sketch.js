
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_opitions;
var maxSides;
var world;
var lixo;

function preload()
{
	Matter.Bodies.circle(125, 300, 78, [ball_opitions], [maxSides]);
	World.add(world,ball);

	lixo = loadImage("2c461dd4bbcf8480be0d74b03163008f.jpg");

	
}

function setup() {
	createCanvas(1364, 645);

	lixo = createSprite(20, 120);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_opitions ={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}



	Matter.Bodies.circle(x, y, radius, [opitions], [maxSides]);
	World.add(world,ball);
	
	
	Engine.run(engine);

}


function keyPressed(){
	if(keyCode === UP_ARROW){
		ball.velocityY = -10

	}


}


function draw() {
	rectMode(CENTER);
	background("yellow");

	ground =new Ground(200,390,400,20);

	drawSprites();

}



