const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(260,180,30);
    stone1 = new Stone(600,88,50,60);
    iron1 = new Iron(330,240,50,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    ground.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
}