class bird{ 
    constructor (x,y){
    var options = {
        restitution: 0.5, 
        friction: 1.0, 
        density: 1.5 

    }  
    this.body = Bodies.rectangle (x,y,40,40,options) 
    this.width = 40; 
    this.height = 40;  
    World.add(world,this.body); 



    } 
    display() { 
        var pos = this.body.position 
        var angle = this.body.angle 
        pos.x = mouseX; 
        pos.y = mouseY;  
     
    push(); 
    translate(pos.x,pos.y);  
    rotate(angle); 
    fill("red");  
    rectMode(CENTER) 
    rect(0,0,this.width,this.height)
    pop();
    }          
}