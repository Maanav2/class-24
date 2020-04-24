const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig,pig1;
var bird;
var log,log1,log2,log3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(690,300,50,50);
    box2 = new Box(810,300,50,50);
    ground = new Ground(600,height,1200,20)
    pig = new Pig(750,300,50,50);
    bird = new Bird(300,200,50,50);
    log= new Log(750,290,190,PI);
    box3 = new Box(690,230,50,50);
    box4 = new Box(810,230,50,50);
    pig2 = new Pig(750,230,50,50);
    log1 = new Log(750,210,190,PI);
    box5 = new Box(750,150,50,50);
    log2 = new Log(790,120,100,PI/4);
    log3 = new Log(710,120,100,-PI/4);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig.display();
    log.display();
    bird.display();
    box3.display();
    box4.display();
    pig2.display();
    log1.display();
    box5.display();
    log2.display();
    log3.display();
}