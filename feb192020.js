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
var obs1, obs2, obs3, obs4, obs5;
var obstacleArray = [];
function addImages(data) {

    for (var i = 0; i < data.length; i++) {
        cat = loadImage(data[i]);
        console.log('assets/' + data[i])
        pics[i] = cat;
    }
}

function addShoot(data) {

    for (var i = 0; i < data.length; i++) {
        cat = loadImage(data[i]);
        console.log('assets/' + data[i])
        shoot[i] = cat;
    }
}

function preload() {
    loadStrings('assets/Idle.txt', addImages);
    loadStrings('assets/shoot.txt', addShoot);
    obstl = new obstacle(rockX,rockY,rockW,rockH,"assets/Rock.jpg");
}

function setup() {
    createCanvas(600, 600);
    obs1 = new obstacle(0, 0, 20, 25, "assets/rock.jpg");
    obs2 = new obstacle(300, 200, 20, 25, "assets/rock.jpg");
    obs3 = new obstacle(400, 300, 20, 25, "assets/rock.jpg");
    obs4 = new obstacle(200, 300, 20, 25, "assets/rock.jpg");
    obs5 = new obstacle(100, 400, 20, 25, "assets/rock.jpg");
    obstacleArray[0] = obs1;
    obstacleArray[1] = obs2;
    obstacleArray[2] = obs3;
    obstacleArray[3] = obs4;
    obstacleArray[4] = obs5;
}

function draw() {
    background(120);
    square(500, 100, 20);
    obstacleArray[0].display();
    obstacleArray[1].display();
    obstacleArray[2].display();
    obstacleArray[3].display();
    obstacleArray[4].display();
    shoot[j].resize(160, 135);
    ///////////////////////////////////////
    // shoot key...
    if (keyIsDown(32)) {
        image(shoot[j], x, y);
        isShooting = true;

    } else {
        image(pics[i], x, y); // idle
    }

    if (keyIsDown(88)) {
        isJumping = true;
    }

    if (isJumping) {
        y += speed;
        //x += 13;
        if (y <= 20) {

            speed *= -1;
            //  x -= 13;

        } else if (y > 95) {
            y = 95;
            isJumping = false;
            speed *= -1;
        }


        //  image(pics[j], x, y); -- this is where the jumping animation would be
    }


    if (isShooting) {
        obstl.x += 5;
    }

    pics[i].resize(160, 135);
    obstacleArray[0].collision(x,y,pics[i].width, pics[i].height);
    obstacleArray[1].collision(x,y,pics[i].width, pics[i].height);
    obstacleArray[2].collision(x,y,pics[i].width, pics[i].height);
    obstacleArray[3].collision(x,y,pics[i].width, pics[i].height);
    obstacleArray[4].collision(x,y,pics[i].width, pics[i].height);
    /////////////////////
    //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
    var hit = collideRectRect(x, y, pics[i].width, pics[i].height, 500, 100, 20, 20);
    ///////////////////
    // print("hit: " + hit);
    ///////////////////////////
    //if (hit) {
    //     x -= 10;
    //   }
    ////////////////////////////
    // frameRate(15);

    if (keyIsDown(LEFT_ARROW)) {
        direction = "left";
        if (hit == true) {
            x -= 5;
        } else {
            x += 5;
        }
    } else if (keyIsDown(RIGHT_ARROW)) {
        direction = "right";
        if (hit == true) {

            x += 5;
        } else {
            x -= 5;
        }

    } else if (keyIsDown(UP_ARROW)) {
        direction = "up";
        if (hit == true) {
            y += 5;
        } else {
            y -= 5;
        }
    } else if (keyIsDown(DOWN_ARROW)) {
        direction = "down";
        // if rock is hit then move away, if not keep going
        if (hit == true) {
            y -= 5;
        } else {
            y += 5;
        }
    }


    i++;
    if (i >= pics.length) {
        i = 0;
    }

    j++;
    if (j >= shoot.length) {
        j = 0;
    }

    var isHit = obs1.collision(this.x, this.y, pics[i].width, pics[i].height);
    var isHit2 = obs2.collision(this.x, this.y, pics[i].width, pics[i].height);
    var isHit3 = obs3.collision(this.x, this.y, pics[i].width, pics[i].height);
    var isHit4 = obs4.collision(this.x, this.y, pics[i].width, pics[i].height);
    var isHit5 = obs5.collision(this.x, this.y, pics[i].width, pics[i].height);
    if(isHit || isHit2 || isHit3 || isHit4 || isHit5)
    {
        if(direction = "right")
        {
            x += 5;
        }
        else if(direction = "left")
        {
            x -= 5;
        }
        else if(direction = "up")
        {
            y += 5;
        }
        else if(direction = "down")
        {
            y -= 5;
        }
        
    }
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
    }
    display() {
        image(this.rock, this.x, this.y);
    }
    collision(playerX,playerY,playerW,playerH) {
        var hit = collideRectRect(playerX,playerY,playerW,playerH,this.x,this.y,this.w,this.h);
        print (hit);
       return hit;
    }
}