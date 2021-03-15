const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball;
var basket;
var ground;
var sling;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ball=new Ball(200,50);
  basket=new Basket(1200,650);
  ground = new Ground(600,height,1200,20);
  sling = new Sling(ball.body,{x:200, y:50});

}

function draw() {
  background(0);  
  Engine.update(engine);

  drawSprites();

  ball.display();
  basket.display();
  ground.display();
  sling.display();
}

function mouseDragged(){
       Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   sling.fly();
}

function keyPressed(){
   if(keyCode === 32 && ball.body.speed<1){
       Matter.Body.setPosition(ball.body,{x:200,y:50});
       sling.attach(ball.body);
   }
}