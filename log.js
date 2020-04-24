class Log{
    constructor(x,y,w,a){
        var options={
            restitution:0.9,
            friction:1,
            density:1,
            angle:a
        }
        this.body=Bodies.rectangle(x,y,w,20,options)
        this.width=w;
        this.height=20
        //Matter.Body.setAngle(this.body,a)
        World.add(world,this.body)
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("Brown");
        stroke("black");
        strokeWeight(1);
        rect(0, 0, this.width, this.height);
        pop();
     }
}