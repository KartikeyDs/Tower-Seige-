const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground1, ground2;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16,box17,box18;
var box19,box20;
var box21;
var box22,box23,box24,box25;
var box26,box27,box28;
var box29;
var thrower;

var ground3;
//var ground4;


function setup() {
	createCanvas(1200, 400);
    
    engine = Engine.create();
	world = engine.world;
    
    ground1 = new Ground(500,370,300,20);
    ground2 = new Ground(900,200,200,20);
    ground3 = new Polygon(100,300,40,40);
  //  ground4 = new Ground(100,200,30,30);

    box1 = new Cyan_Box(400,350,33,33);
    box2 = new Cyan_Box(427,350,33,33);
    box3 = new Cyan_Box(454,350,33,33);
    box4 = new Cyan_Box(481,350,33,33);
    box5 = new Cyan_Box(508,350,33,33);
    box6 = new Cyan_Box(535,350,33,33);
    box7 = new Cyan_Box(562,350,33,33); 
    box8 = new Cyan_Box(589,350,33,33); 

    box9 = new Pink_Box(420,320,33,33);
    box10 = new Pink_Box(447,320,33,33);
    box11 = new Pink_Box(476,320,33,33);
    box12 = new Pink_Box(503,320,33,33);
    box13 = new Pink_Box(530,320,33,33);
    box14 = new Pink_Box(557,320,33,33);

    box15 = new Blue_Box(447,300,33,33);
    box16 = new Blue_Box(476,300,33,33);
    box17 = new Blue_Box(503,300,33,33);
    box18 = new Blue_Box(530,300,33,33);

    box19 = new Pink_Box(476,270,33,33);
    box20 = new Pink_Box(503,270,33,33);

    box21 = new Black_Box(490,250,33,33);

    box22 = new Cyan_Box(860,180,33,33);
    box23 = new Cyan_Box(880,180,33,33);
    box24 = new Cyan_Box(900,180,33,33);
    box25 = new Cyan_Box(920,180,33,33);
     
    box26 = new Blue_Box(870,160,33,33);
    box27 = new Blue_Box(890,160,33,33);
    box28 = new Blue_Box(910,160,33,33);

    box29 = new Pink_Box(890,140,33,33);

    thrower = new Chain(ground3.body,{x:100,y:310})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(105,105,105);
  Engine.update(engine);

  ground1.display();

  ground2.display();

  box1.display();
  box2.display(); 
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box26.display();
  box27.display();
  box28.display();

  box29.display();

  ground3.display();
 // ground4.display();
  thrower.display();

  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(ground3.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
thrower.fly();
}

function keyPressed(){
if(keyCode === 32) {
Matter.Body.setPosition(ground3.body,{x:100,y:310})
thrower.attach(ground3.body)
}
}