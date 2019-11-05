var x = 175;
var z = 160;
var y = 64;
var lx = 200;
var ly = 230;
var g = 100;
var m = 175;
var n = 115;
var ts = 32;
var growth = 2;
var grown = 0;
var xmovement = 4;
var zmovement = 6;
var ymovement = 2;
var lxmovement = 12;
var lymovement = 10;
var gmovement = 1;
var nmovement = 4;
var mmovement = 5;
function setup() {
  createCanvas(400, 400);
  movement = Math.floor(Math.random() * 10);
}

function draw() {
  background(220);
  textSize(ts);
 text('Hi, I am an iteration of Erin!', 10, 30);
 square(150,y,80);
 circle(x,100,20);
 circle(205,g,20);
 line(185,100,195,100);
 triangle(185,110,190,105,195,110);
 rect(m,n,30,15);
 triangle(150,230,190,145,230,230);
 line(lx,ly,200,270);
 line(180,230,180,270);
 line(130,180,168,190);
 line(z,180,198,190);
 point(200,100);
 point(180,100);
 textSize(10);
 text('Erin Flint',10,390);
 if(x >= 399 || x <= 0)
 {
   xmovement*=-1;
 }
 x += xmovement;
 if(z >= 400 || z <= 0)
 {
   zmovement*=-1;
 }
 z += zmovement;
 if(y >= 400 || y <= 0)
 {
   ymovement*=-1;
 }
 y += ymovement;
if(lx >= 400 || lx <=0)
{
  lxmovement*=-1;
}
lx += lxmovement;
if(ly >= 400 || ly <=0)
{
  lymovement*=-1;
}
ly += lymovement;
if(g >= 400 || g <=0)
{
  gmovement*=-1;
}
g += gmovement;
if(m >= 400 || m <=0)
{
  mmovement*=-1;
  nmovement*=-1;
}
m += mmovement;
n += nmovement;
if(grown == 5) 
{
  growth*=-1;
  grown = 0;
}
ts += growth;
grown += 1;
}


