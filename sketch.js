var cat;
var pics = [];
var shoot = [];
var i = 0;
var x = 0,
    y = 100;
var j = 0;
var hit = false;
let result = [];
var direction;
var rock;
var rockX = 50;
var rockY = 50;
var rockW = 20;
var rockH = 20;
var isShooting = false;
var isJumping = false;
var speed = -5;
var obstl;
var badguy;
var obs1, obs2, obs3, obs4, obs5;
var obstacleArray = [];

// load Idle images from text file
function addImages(data) {
    for (var i = 0; i < data.length; i++) {
        cat = loadImage(data[i]);
        console.log('assets/' + data[i])
        pics[i] = cat;
    }
}

// load shooting images from text file
function addShoot(data) {
    for (var i = 0; i < data.length; i++) {
        cat = loadImage(data[i]);
        console.log('assets/' + data[i])
        shoot[i] = cat;
    }
}

// does this..
function preload() {
    loadStrings('assets/Idle.txt', addImages);
    loadStrings('assets/shoot.txt', addShoot);
}

// this this..
function setup() {
    createCanvas(600, 600);
    obs1 = new obstacle(0, 0, 20, 25, "assets/rock.jpg");
    obs2 = new obstacle(350, 300, 20, 25, "assets/rock.jpg");
    obs3 = new obstacle(400, 100, 20, 25, "assets/rock.jpg");
    obs4 = new obstacle(150, 300, 20, 25, "assets/rock.jpg");
    obs5 = new obstacle(150, 400, 20, 25, "assets/rock.jpg");
    obstacleArray[0] = obs1;
    obstacleArray[1] = obs2;
    obstacleArray[2] = obs3;
    obstacleArray[3] = obs4;
    obstacleArray[4] = obs5;
    // create our own enemy
    badguy = new badGuy(300, 400, 120, 100, "assets/bad guy.png");
    // create the player with array of idle and shooting images
    goodGuy = new goodGuy(100,25,90,80,pics,shoot);
}

function draw() {
    background(120);
    
    // display both players
    badguy.display();
    goodGuy.display();

    // display all the rocks
    for(var i = 0; i < obstacleArray.length; i++){
        obstacleArray[i].display();
    }
    
    // move player if they dont collide with rocks
    goodGuy.move(obstacleArray,badguy);

    // move the bad guy if he doesnt collide with rocks
    badguy.creep(goodGuy,obstacleArray);

    // health bars
    rect(5,575,goodGuy.health*2,25);
    rect(395,575,badguy.health*2,25);
} 


class obstacle
{
    constructor(x,y,w,h,imagePath)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imagePath = imagePath;
        this.rock = loadImage(this.imagePath);
        this.rock.resize(w,h);
    }
    display() {
        image(this.rock, this.x, this.y);
    }
    collision(playerX,playerY,playerW,playerH) {
        var hit = collideRectRect(playerX,playerY,playerW,playerH,this.x,this.y,this.w,this.h);
        return hit;
    }
}

class badGuy
{
    constructor(x,y,w,h,imagePath)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imagePath = imagePath;
        this.badguy = loadImage(this.imagePath);
        this.badguy.resize(w,h);
        this.health = 100;
    }

    display() {
        image(this.badguy, this.x, this.y);  
    }

    creep(goodGuy,rocks){
        var x = 0; 
        var y = 0;
        var sameX = false;

        // is player to left or right?
        if (goodGuy.x > this.x){
            x += 1;
        } else if (goodGuy.x == this.x){
            sameX = true;
        } else {
            x -= 1;
        }
        
        // is player above or below?
        if (goodGuy.y > this.y){
            y += 1;
        } else if (goodGuy.y == this.y && sameX == true){
            goodGuy.health -= 1;
        } else {
            y -= 1;
        }

        // would this movement hit a rock?
        var collisions = false;
        var collided = false;
        for(var i = 0; i < rocks.length; i++){
            collided = rocks[i].collision(this.x + x, this.y + y, this.w, this.h);
            if (collided == true){
                collisions = true;
            }
        }

        // move if no collisions, move back diagonally if collision
        if(collisions == false){
            this.x += x;
            this.y += y;
        } else {
            this.x -= x*2;
            this.y -= y*4;
        }
    }

    collision(playerX,playerY,playerW,playerH) {
        var hit = collideRectRect(playerX,playerY,playerW,playerH,this.x,this.y,this.w,this.h);
        return hit;
    }
}

class goodGuy
{
    constructor(x,y,w,h,idlepics,shootpics)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.i = 0;
        this.j = 0;
        this.isShooting = false;
        this.health = 100;
        this.images = idlepics;
        this.shooting = shootpics;
        // resize all the idle images
        for(var i = 0; i < this.images.length; i++){
            this.images[i].resize(w,h);
        }
        // resize all the shooting images
        for(var i = 0; i < this.shooting.length; i++){
            this.shooting[i].resize(w,h);
        }
    }

    display() {
        if(this.isShooting == false){
            image(this.images[this.i], this.x, this.y);
        } else {
            image(this.shooting[this.j], this.x, this.y);
            this.j += 1;
            if (this.j >= this.shooting.length - 1){
                this.j = 0;
                this.isShooting = false;
            }
        }

        this.i += 1;
        if (this.i >= this.images.length){
            this.i = 0;
        }
    }

    shoot(badguy) {
        this.isShooting = true;
        if (badguy.x >= this.x && ((this.y >= badguy.y - 50) && (this.y <= badguy.y + 50))){
            badguy.health -= 10;
            console.log("Shot hit!");
        } else {
            // show coordinates for accuracy improvements
            console.log("Shot missed! bad: x: " + badguy.x + " y " + badguy.y + " good: x: " + this.x + " y: " + this.y);
        }
    }

    // figure out which key was pressed, then check for collisions
    move(rocks, badguy) {

        var x = 0; // direction to move left or right
        var y = 0; // direction to move up or down

        if (keyIsDown(LEFT_ARROW)) {
            direction = "left";
            x = -5;
        } else if (keyIsDown(RIGHT_ARROW)) {
            direction = "right";
            x = 5;
        } else if (keyIsDown(UP_ARROW)) {
            direction = "up";
            y = -5;
        } else if (keyIsDown(DOWN_ARROW)) {
            direction = "down";
            y = 5;
        }

        // if any rock is hit, goodGuyHit will be true
        var goodGuyHit = false;
        for(var i = 0; i < rocks.length; i++){
            var collided = rocks[i].collision((this.x + x),(this.y + y),this.w,this.h);
            if (collided == true){
                goodGuyHit = true;
            }
        }

        // only move if nothing was hit
        if (goodGuyHit == false){
            this.x += x;
            this.y += y;
        } 
        
        // F key was hit, send badguy to the shoot function
        if (keyIsDown(70)){
            this.shoot(badguy);
        }
    }

    // use to check if something hit this
    collision(x,y,w,h) {
        var hit = collideRectRect(x,y,w,h,this.x,this.y,this.w,this.h);
        return hit;
    }
}