const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var ground1;
var dustbin1;
var paper1;
var world;
var dustbin1,dustbin2,dustbin3;
var bin1;


function setup() {
createCanvas(1200, 400);
engine = Engine.create();
world = engine.world;


ground1 = new ground(230,388,2000,30);
paper1 = new paper(100,200,60);
dustbin1= new dustbin(1090,340,20,200);
dustbin2= new dustbin(890,340,20,200);   
dustbin3= new dustbin(990,380,190,20);
bin1= new garbage(990,355);

	
}

function draw() {

 background(0);
 Engine.update(engine);

 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
  bin1.display();
  
  ground1.display();

  drawSprites();
}
 function keyPressed() {
			
if (keyCode === UP_ARROW) {
		
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:175,y:-150});
		   
 };
}
