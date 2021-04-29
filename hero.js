class Hero{
  constructor(x,y,width,height)
{
  var options = {
    density : 1,
    frictionAir :1
  };
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
 
  this.body=Bodies.rectangle(x ,y ,width,height,options);
  this.image = loadImage("Superhero1.png");
  World.add(world,this.body);
}
display(){
  var pos=this.body.position;
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,this.width,this.height);
}
  };