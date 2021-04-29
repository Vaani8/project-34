class Block{
    constructor(x,y,width,heigth){
        var options={
            'restitution':0.8,
            'friction': 1.0,
            'density':20
        }
        this.body=Bodies.rectangle(x,y,width,heigth,options)
        this.width=width
        this.heigth=height
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}