var turtle;
var battleturtle;
var pics = [];
var battle = 0;
var x = 0;
var y = 0;
var player;

function preload() {
  //arrays
  
    player = new myPlayer(0,0)  

}

function setup() {
    createCanvas(900, 900);


}

function draw() {
    background(120);

    //print("new length" + pics.length);
    // for (var i = 0; i < pics.length; i++) {
    //  print("you here..");
    image(player.pics[battle], player.x, player.y);
    // frameRate(15);
 
    
}
class myPlayer
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.pics = [loadImage('turtle.png'),loadImage('battle turtle.png')]
  }
}

function keyPressed() {
    if (keyCode === 87) {
      player.y = player.y - 10;
    } else if (keyCode === 83) {
     player.y = player.y + 10;
    } else if (keyCode === 65) {
      player.x = player.x - 5;
    } else if (keyCode === 68) {
      player.x = player.bax + 5;
    } else if (keyCode === 88) {
      if (battle == 1){
        battle = 0;
      } else {
        battle = 1;
      }
    }
  
    
  }