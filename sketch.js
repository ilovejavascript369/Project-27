
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(325,500);
  	bobObject2 = new Bob(365,500);
  	bobObject3 = new Bob(405,500);
  	bobObject4 = new Bob(445,500);
  	bobObject5 = new Bob(485,500);
	roof1 = new Roof(405,200);
	rope1 = new Rope(bobObject1.body,{x:325,y:200});
	rope2 = new Rope(bobObject2.body,{x:365,y:200});
	rope3 = new Rope(bobObject3.body,{x:405,y:200});
	rope4 = new Rope(bobObject4.body,{x:445,y:200});
	rope5 = new Rope(bobObject5.body,{x:485,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  
  
  drawSprites();
  keyPressed();
}
//function mouseDragged(){
	//if(keyCode(UP_ARROW)){
		//Matter.Body.setPosition(rope1.body,{x:300,y:150});
	//}
//}
//function mouseReleased(){
	//if(mouseDragged()){
    //Matter.Body.setPosition(rope1.body,{x:350,y:200});
//}
//}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1,bobObject1.position,{x:-50,y:-45});
	}
}

