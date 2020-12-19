class Sling{
constructor(bodyA,pointB){
    var options={
     bodyA:bodyA,
     pointB:pointB,
     stifness:1,
     angularStiffness:1,
     length:20
    }
    this.pointB=pointB;
    this.pointX=bodyA.x;
    this.pointY=bodyA.y-250
    this.sling = Constraint.create(options)
    World.add(world,this.sling)
}

display(){
    if(this.sling.bodyA){
        var pointA= this.sling.bodyA.position;
        var pointB=this.pointB;
        Push();
        strokeWeight(3.5)
        stroke("#fff")
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        Pop()
    }
}
}