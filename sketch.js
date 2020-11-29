
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImage, boyImage, sunImage;
function preload() {
	treeImage=loadImage("Plucking mangoes/tree.png");
	boyImage=loadImage("Plucking mangoes/boy.png");
	sunImage=loadImage("Plucking mangoes/sun.png");
}

function setup() {
	createCanvas(850, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(425,550,850,20);

	mango1 = new Mango(650,300,40);
	mango2 = new Mango(630,200,50);
	mango3 = new Mango(700,200,40);
	mango4 = new Mango(800,300,60);
	mango5 = new Mango(750,250,40);
	mango6 = new Mango(550,290,40);
	mango7 = new Mango(680,250,50);
	mango8 = new Mango(600,250,45);
	mango9 = new Mango(730,300,50);
	mango10 = new Mango(600,300,40);

	stone = new Stone(130,380,30);
	sling = new Slingshot(stone.body,{x:150,y:420});
	base = new Ground(190,530,50,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  image (boyImage,130,390,130,180);
  image (treeImage,500,150,350,400);
  image(sunImage,100,50,100,100);
  mango1.display();
  mango2.display();
  mango3.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone.display();
  ground.display();
  sling.display();
base.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
}
function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
	sling.fly();
}

function detectCollision(stone,mango) {
	mangoPosition=mango.body.position;
	stonePosition=stone.body.position;

	var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);
	if (distance<=mango.radius+stone.radius) {
		Matter.Body.setStatic(mango.body,false);
	}
}