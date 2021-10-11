const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var conon;
var angle

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  angle = -PI/4

  tower = new Tower(150, 250, 160, 310);
  canon = new Canon(180,30,100,50,angle)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(backgroundImg);
  Engine.update(engine);
    tower.display();
canon.show()
 
}

