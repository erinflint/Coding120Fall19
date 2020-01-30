
var bounce = 2;
var shapes = [];
//display mode changes everytime counter hits mult. of 1000
var currentDisplayMode = -1;

function setup() {

  createCanvas(400, 400);

  shapes[0] = new myShape(245,100,100,21,44,139,90);
  shapes[1] = new myShape(50,75,20,100,12,139,45);  
  shapes[2] = new myShape(100,10,320,139,44,21,10);  
  shapes[3] = new myShape(200,300,100,21,64,50,75);  
  shapes[4] = new myShape(300,250,100,99,4,79,38);  
  shapes[5] = new myShape(175,160,100,77,110,20,63);


}



function draw() {

  background(220);
  print(frameCount);
  //if frameCount is mult. of 1000 then change shapes/colors
  if((frameCount % 1000) == 0)
  {
    //jump to random shape/color in array
    currentDisplayMode *= -1;
  }
 

  for(var i = 0; i < shapes.length; i++)
 

  {

     shapes[i].display(currentDisplayMode);
     shapes[i].move();

  }
}
  class myShape
{

  constructor(x,y,diameter,red,green,blue,opacity)
  {
     this.x = x;
     this.y = y;
     this.diameter = diameter;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.opacity = opacity;
    this.speed = 10;
  }
  move()
  {
    if(this.x == 400) {
        bounce *=- 1;
    }
    if(this.x <= 1) {
        bounce *=- 1;
    }
    this.x += bounce;
 }
  //mode=parameter
  display(mode)
  {
     fill(this.red,this.green,this.blue,this.opacity);
    if(mode == -1)
    {
     circle(this.x,this.y, this.diameter);
  }
    else {
      square(this.x, this.y, this.diameter);
  }

}
}
