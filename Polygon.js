class Polygon{
    constructor(x, y, width, height){
    var options = {
    isStatic:false
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,this.width,this.height, options);
    this.image  =loadImage("polygon.png")
    World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y)
    imageMode(CENTER);
    image(this.image,0,0,this.width, this.height)
    pop()
    }
    }