var x = 50;
var y = 50;
var diameter = 25;
var dia = 15;
var mousex = 0;
var mousey = 0;
var ts = 18;
var s = 300;
var r = 200;
function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(0);
  fill(24, 200, 29);

  textSize(ts);
  circleCircle();
  function circleCircle()
  {
  fill(r, 100, 200);
  circle(x, y, 60);
  }
  movingSquare();
  function movingSquare()
  {
  square(s, 200, 60);
  fill(90, 40, 60);
  }
  circleCirclew();
  function circleCirclew()
  {
  circle(500, 400, dia);
  fill(255, 255, 255);
  }
exitSquare();
function exitSquare()
{
  square(600, 500, 50);
  fill(30, 80, 60);
  text('exit', 600, 500);
}
  controlCircle();
 
function controlCircle()
{
if (s < 800)
{
    s += 5;
}
else if (s >= 800)
{
    s = 30;
}
  if (x >= 600) 
  {
    x = 50;
  }
  if (r < 600)
  {
      r += 3;
  }
  else if (r >= 600)
  {
      r = 20
  }
movePlayer();
  
  function movePlayer()
  {
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
  }
  if (y >= 600) 
  {
    y = 50;
  }
  changeDiameter();
function changeDiameter()
{
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
}
youWon();
}
function youWon()
{
  if (y >= 500 && y <= 600 && x >= 600 && x <= 800)
  {
      alert("You won!");
  }
}
  circle(mousex, mousey, 30);

mouseMouse();
}
function mouseMouse()
{
    mousex = mouseX;
    mousey = mouseY;
    

myCircle();
}
function myCircle(x,y)
{
    fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
    circle(Math.floor(Math.random()*x)+10,Math.floor(Math.random()*y),Math.floor(Math.random()*100)+10)
}