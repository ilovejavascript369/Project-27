class Roof{
    constructor(x,y){
        var options = {
            restitution: 1,
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        width = 300;
        height = 25;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        stroke("white");
        
        rect(0,0,width,height);
        //imageMode(CENTER);
        //this.image(this.image, 0, 0, this.width, this.height);
        
        pop();
    }
    
}