
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperBall;
var ground;
var box, box1, box2;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  


	 paperBall = new Paper(200, 450, 40);
   ground = new Ground(width/2,670,width,20);
   dustbinObject = new Dustbin(1200, 650);
   var render = Render.create({
     element: document.body,
     engine: engine,
     option:{
       width: 1600,
       height: 700,
       wireFrames: false,
     }
   });
   Engine.run(engine);
   Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background("white");

  
  ground.display();
  paperBall.display();
  dustbinObject.display();
  
  drawSprites();
}
  //paperBall.bounce(box);
  //paperBall.bounce(box1);
  //paperBall.bounce(box2);
  function keyPressed(){
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 22, y: -22});
  }
}