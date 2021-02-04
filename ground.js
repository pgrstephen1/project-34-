class Ground {
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    
    display()
    {
    rectMode(CENTER);
    rect(400, 550, this.width,this.height);
    }
}