var x = 50;
var y = 50;
var diameter = 25;
var dia = 15;
var mousex = 0;
var mousey = 0;
var ts = 18;
var s = 300;
function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(0);
  textSize(ts);
  fill(10, 100, 200);
  circle(x, y, 60);
  square(s, 200, 60);
  fill(90, 40, 60);
  circle(500, 400, dia);
  fill(255, 255, 255);
  square(600, 500, 50);
  fill(30, 80, 60);
  text('exit', 600, 500);


if (s < 800)
{
    s += 5;
}
else if (s >= 800)
{
    s = 30;
}
  if (x >= 800) 
  {
    x = 50;
  }

  if (keyIsDown(83)) 
  {
    y += 10;
  } 
  else if (keyIsDown(87)) 
  {
    y -= 10;
  }
  else if (keyIsDown(65))
  {
      x -= 10;
  }
  else if (keyIsDown(68))
  {
      x += 10;
  }

  if (y >= 600) 
  {
    y = 50;
  }

  if (diameter < 100) 
  {
    diameter += 1;
  } 
  else if (diameter >= 100) 
  {
    diameter = 25;
  }
  if (dia < 100)
  {
      dia +=1;
  }
  else if (dia >= 100)
  {
      dia = 10;
  }
  if (y >= 500 && y <= 600 && x >= 600 && x <= 800)
  {
      alert("You won!");
  }

  circle(mousex, mousey, 30);
}

function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY;
    

}