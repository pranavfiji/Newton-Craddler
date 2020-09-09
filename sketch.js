
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  ball1,ball2,ball3,ball4,ball5;
var constraint1,constraint2,constraint3,constraint4,constraint5;
var holder;
var platform;



function setup() {
	
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

  ball1=new Ball (200,550,70,70);
  ball2=new Ball(250,550,70,70);
  ball3=new Ball (300,550,70,70);
  ball4=new Ball (330,550,70,70);
  ball5=new Ball (400,550,70,70);
  platform= new Ground(300,200,400,50);
 
constraint1=new chain(platform.body,ball1.body);
constraint2=new chain(platform.body,ball2.body);
constraint3=new chain(platform.body,ball3.body);
constraint4=new chain(platform.body,ball4.body);
constraint5=new chain(platform.body,ball5.body);

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(270);
  
  drawSprites();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  platform.display();
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();
 
}



