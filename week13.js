var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;
    var ts = 18;
    var s = 25;
    var myXs = []; // create an array for the x coordinate
    var myYs = []; // create an array for the y coordinate
    var myDiameters = []; // create array for the diameter of circles

    function setup() 
    {
      createCanvas(800, 600);
      // create a for loop here to create the circles
        for(var i = 0; i < 7; i++)
        {
            // get all the random numbers to create a circle
            myXs[i] = getRandomX(800);
            myYs[i] = getRandomY(600);
            myDiameters[i] = getRandomDiameter(100);

        }
    }

    function draw() 
    {
      background(0);
      
      fill(14, 69, 198);
      circle(x, y, diameter);
      textSize(ts);

      square(600, 500, 50);
      fill(255, 80, 60);
      text('exit', 600, 500);

      // call the function created
      controlCircle();

      circle(mousex, mousey, 30);

      for(var i = 0; i < myXs.length; i++)
      {
            fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
            circle(myXs[i], myYs[i], myDiameters[i]);
            myXs[i]+=3;
            if  (myXs[i] >= 600)
            {
                myXs[i] = 0;
            }


      }
      youWon();
      function youWon()
      {
        if (y >= 500 && y <= 600 && x >= 600 && x <= 800)
        {
            alert("You won!");
        }
      }
      movingSquare();
      function movingSquare()
      {
      square(s, 200, 60);
      fill(90, 40, 60);
      }
     
    }
    
    function exitSquare()
    {
      square(600, 500, 50);
      fill(30, 80, 60);
      text('exit', 600, 500);
    }
    /* This function controls all the variables of the circle */
    function controlCircle()
    {
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

        if (y >= 600) 
        {
            y = 50;
        }
        if (s < 600)
        {
            s += 5;
        }
        if (s >= 600)
        {
            s = 30;
        }
        
        // we call the function here.
        changeDiameter();

    }

    // This function updates the size of the circle
    function changeDiameter()
    {
        if (diameter < 200) 
        {
            diameter += 2;
        } 
        else if (diameter >= 200) 
        {
            diameter = 25;
        }

    }
    function keyPressed() 
    {
      if (key == 'd') 
      {
        x += 10;
      } 
      else if (key == 'a') 
      {
        x -= 10;
      }
    }

    function mouseMoved() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }


    function getRandomX(x)
    {
        return Math.floor(Math.random()*x)+10;
    }

    function getRandomY(y)
    {
        return Math.floor(Math.random()*y)+ 10;
    }

    function getRandomDiameter(diameter)
    {
        return Math.floor(Math.random()*diameter)+10
    }

