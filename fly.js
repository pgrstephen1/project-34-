class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.02,
            length : 25
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(0);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}