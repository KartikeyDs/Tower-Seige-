class Pink_Box{
constructor(x, y, width, height){
var options = {
isStatic:false
}
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.body = Bodies.rectangle(x,y,this.width,this.height, options)
World.add(world, this.body);
}
display(){
var pos = this.body.position;
push();
translate(pos.x, pos.y)
rectMode(CENTER);
fill(255,192,203);
rect(0,0,this.width, this.height)
pop();
}
}
