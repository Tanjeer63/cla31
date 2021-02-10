//string;
var string = "Tanjeer";
console.log(string);

//number;
var numb = 100;
console.log(numb);

//boolean values;
var bool = true;
console.log(bool);

//undefined;
var object;
console.log(object);

//reassigning the same undefined object to null;
object = null;
console.log(object);

//examlpes on array;

//an array holding same data type;
var array1 = [1,2,3,4,5];
console.log(array1);

//an array holding different types of data;
var array2 = ["Luke Fergie",123456,true];
console.log(array2);

//access first element of array;
console.log(array2[0]);

//an array storing a list of arrays;
var array3 = [[1,2],[3,4],["iFerg",5,6],[0,8]]; 
console.log(array3[2][1]);

//pushing a value inside an array;
array3.push(54155341351531);
console.log(array3);

//removing a value from an array;
array3.pop();
console.log(array3);

//removing a value from an array;
array3.pop();
console.log(array3);






const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}