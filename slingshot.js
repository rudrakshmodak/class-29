class slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.4
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options)
        World.add(world,this.sling);
    }
    display(){
      line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y);
    }

    fly(){
        this.sling.bodyA=null;
    }
}