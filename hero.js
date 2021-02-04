class Hero{
    constructor(x,y,width,height){
        var options = {
            density:1,
            frictionAir:1,
            restitution:0.8
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Superhero-01.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,275,115);
        pop();
    }
}