var shapes = [];


function setup() {

  createCanvas(400, 400);
//arrays
  shapes[0] = new myShape(245,100,100,21,44,139,90);
  shapes[1] = new myShape(50,75,20,100,12,139,45);  
  shapes[2] = new myShape(100,10,320,139,44,21,10);  
  shapes[3] = new myShape(200,30,100,21,64,50,75);  
  shapes[4] = new myShape(200,250,100,99,4,79,38);  
  shapes[5] = new myShape(175,160,180,77,110,20,63);
  shapes[6] = new myShape(300,140,60,45,90,35,25);
  shapes[7] = new myShape(60,250,150,180,80,65,100);
  shapes[8] = new myShape(300,200,100,25,80,120,45);
  shapes[9] = new myShape(350,300,50,35,80,120,45);
  shapes[10] = new myShape(200,350,120,25,70,90,18);
  shapes[11] = new myShape(75,340,70,35,18,200,45);


}



function draw() {

  background(220);
  stroke("none");
  fill("black");
  text('Bubble Time',10,40);
  textSize(16);
  fill("black");
  text('Erin Flint',300,380);
  textSize(22);
   

for(var i = 0; i < shapes.length; i++) 

  {
     shapes[i].display();
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
  }

  //mode=parameter
  display()
  {
     fill(this.red,this.green,this.blue,this.opacity);
     circle(this.x,this.y, this.diameter);
    
}
}
