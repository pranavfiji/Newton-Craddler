class chain{
    constructor(bodyAObjectA,bodyBObjectB){
        var Newton={
            bodyA:bodyAObjectA,
            bodyB:bodyBObjectB,
            stiffness:0.02,
            length:100

        }
        this.Ball=Matter.Constraint.create(Newton);
        World.add(world,this.Ball);
        this.bodyA=bodyAObjectA;
        this.bodyB=bodyBObjectB;
        

    }
   display(){
    strokeWeight(5);
    line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y);
   }
   

}