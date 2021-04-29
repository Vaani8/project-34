const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
var ground1,superhero1,slingshot,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,monster1
function preload() {
  background1=loadImage("background.png");
}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world; 

  ground1=new Ground (600,width/2,width,10);
  superhero1=new Hero (70,20,400,200);
  slingshot =new SlingShot (superhero1.body,{x:200, y:500});
  block1=new Block(650,250,80,80);
  block2=new Block(650,280,80,80);
  block3=new Block(650,310,80,80);
  block4=new Block(650,340,80,80);
  block5=new Block(650,370,80,80);
  block6=new Block(650,400,80,80);
  block7=new Block(650,430,80,80);
  block8=new Block(750,430,80,80);
  block9=new Block(750,400,80,80);
  block10=new Block(750,370,80,80);
  block11=new Block(750,340,80,80);
  block12=new Block(750,310,80,80);
  block13=new Block(750,280,80,80);
  block14=new Block(850,170,80,80);
  block15=new Block(850,200,80,80);
  block16=new Block(850,230,80,80);
  block17=new Block(850,260,80,80);
  block18=new Block(850,290,80,80);
  block19=new Block(850,320,80,80);
  block20=new Block(850,350,80,80);
  block21=new Block(850,380,80,80);
  block22=new Block(950,420,80,80);
  block23=new Block(950,390,80,80);
  block24=new Block(950,360,80,80);
  block25=new Block(950,330,80,80);
  block26=new Block(950,300,80,80);

  monster1 = new Monster(1200,550,250,400);
}

function draw() {
  background(background1);
  Engine.update(engine);
  ground1.display();
  superhero1.display();
  slingshot.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  monster1.display();
}

function mouseDragged(){
  Matter.Body.setPosition( superhero1.body,{x : mouseX , y : mouseY});
}

function mouseReleased(){
slingshot.fly();
}