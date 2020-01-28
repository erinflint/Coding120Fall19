var x = 113;
var diameter = 75;
var speed = 3;
let theCircle,theCircle2;
function setup() 
{
  createCanvas(400, 400);
 
  theCircle = new myCircle(150,60,90,255,0,0,100);
  theCircle2 = new myCircle(220,85,80,130,0,0,85);
  theCircle3 = new
myCircle(0,0,300,90,0,0,200);
  theCircle4 = new
myCircle(340,240,90,0,0,75,205);
  theCircle5 = new
myCircle(290,150,130,20,0,0,68);
  theCircle6 = new
myCircle(380,380,300,0,200,0,100);
  theCircle7 = new 
myCircle(240,340,90,0,100,0,100);
  theCircle8 = new
myCircle(150,290,140,25,25,0,30);
  theCircle9 = new
myCircle(60,150,90,0,75,140);
  theCircle10 = new
myCircle(85,220,80,0,100,0,80);
  
  
}

function draw() 
{
  background(220);
  stroke("none");
  fill("black");
  text('Overlapping Arches',10,40);
  textSize(16);
  fill("black");
  text('Erin Flint',300,380);
  textSize(22);
   
  theCircle.display();
  theCircle2.display();
  theCircle3.display();
  theCircle4.display();
  theCircle5.display();
  theCircle6.display();
  theCircle7.display();
  theCircle8.display();
  theCircle9.display();
  theCircle10.display();
  theCircle.move();
  theCircle7.move();
}


// classes and objects
class myCircle 
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
      this.x++;
  }
  display()
  {
     fill(this.red,this.green,this.blue,this.opacity);
     circle(this.x,this.y, this.diameter); 
  }
  
 
  

}
