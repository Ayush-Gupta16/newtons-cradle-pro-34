const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(height/2,width/2);
    engine = Engine.create();
    world = engine.world;
pendulum1=new Pendulum(200,400)
pendulum2=new Pendulum(400,400)
pendulum3=new Pendulum(600,400)
pendulum4=new Pendulum(800,400)
pendulum5=new Pendulum(1000,400)

   
}
function draw(){
pendulum1.display()
pendulum2.display()
pendulum3.display()
pendulum4.display()
pendulum5.display()
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(pendulum1.body, {x: mouseX , y: mouseY});
    }
}


