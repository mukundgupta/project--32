const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box18,box17,box19,box20,box21,box22,box23,box24,box25,box26;
var polygon;
var sling;
var stone1;
var score = 0;
var bg;
var backImage;

function preload(){
  getBackGroundImage();
}

function setup() {
  createCanvas(1500,800);
  engine = Engine.create();
  world = engine.world;

  platform1 = new Ground(500,650,350,10)
  platform2 = new Ground(1000,400,350,10)
  ground = new Ground(700,height,2000,20)

 // PLATFORM 1:

  // stack 1, level 1
  stone1 = new BoxB(200,530,80,80)
  box1 = new Box(450,630,100,120)
  box2 = new Box(490,630,100,120)
  box3 = new Box(550,630,100,120)
  box4 = new Box(590,630,100,120)
  box5 = new Box(395,630,100,120)
 fill(255,157,243)
 //stack1, level 2
  box6 = new Box(560,550,100,120)
  box7 = new Box(510,550,100,120)
  box8 = new Box(460,550,100,120)
  box9 = new Box(410,550,100,120)
  //stack1, level 3
  box10 = new Box(440,500,100,120)
  box11 = new Box(490,500,100,120)
  box12 = new Box(540,500,100,120)
  // stack1, top level
  box13 = new Box(490,450,100,120)

  //PLATFORM 2:

//stack 2, level 1
box14 = new Box(990,380,100,120)
box15 = new Box(940,380,100,120)
box16 = new Box(890,380,100,120)
box17= new Box(1040,380,100,120)
box18 = new Box(1090,380,100,120)
fill(255,157,243)
//stack 2, level 2
box19 = new Box(965,300,100,120)
box20 = new Box(1015,300,100,120)
box21= new Box(915,300,100,120)
box22 = new Box(1065,300,100,120)
//stack 2, level 3
box23 = new Box(1045,240,100,120)
box24 = new Box(995,240,100,120)
box25 = new Box(945,240,100,120)
//stack 2, top level
box26 = new Box(1000,170,100,120)
console.log(box26.x,box26.y,)

sling = new SlingShot(stone1.body,{x: 200,y: 550})


}

Engine.run(engine)
function draw() {
  Engine.update(engine)
  if(backImage)
  background(backImage)
  
  noStroke();
  textSize(35)
  fill("red")
  text("score "+ score,width-300,50)
  platform1.display();
  platform2.display();
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
  stone1.display();
  ground.display();
  sling.display();
}


function keyPressed(){
      if(keyCode === 32){
     sling.attach(stone1.body)
      }
  }
  


function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

async function getBackGroundImage(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json()
  var dateTime = responseJSON.datetime
  var hour = dateTime.slice(11,13)
  if (hour>=06 & hour<=18){
      bg = "bg1.png"
  }else{
      bg = "bg2.png"
  }
  backImage = loadImage(bg)
  console.log(backImage)
}