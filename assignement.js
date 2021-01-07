		// starting position of player
		var snake = {
		    // x is the starting position for the snake
			x: 0,
			// y is the starting position for the snake		   
		   y: 0,
			// dx is a step move the snake left or right. it all depends if the number is positive or negative
			dx: 1,
			// dy is to is a step move the snake up or down. it all depends if the number is positive or negative
			dy:  0,
		    lastKeyPressed: 0
		};
		var food_paint = {
			x:5,
			y:5
		};

		var score = 0;
	
		var radius = 30;
		var snake_array;
		$(document).ready(function() {

		    requestAnimationFrame(draw);
		    $("body").keydown(function(event) {
		        snake.lastKeyPressed = event.which
		        move();
		    });
			set_snake();
		});

		$("body").keydown(function(event) {
		    snake_array.push({
		        x: snake.X,
		        y: snake.Y

		    });

		});
		
		// This function will create the snake
		function set_snake() {
		// length of the snake
		    var length = 4;
			// assigning snake_array to an array
		  snake_array = [];
		// for loop to define the length at the starting point
		    for (var i = length - 1; i >= 0; i--) 
			{ 
			   snake_array.unshift({x: i,y: 0});
		    }
		}

	function collision ()
	{
		if (snake.x == food_paint.x && snake.y == food_paint.y)
		{
			score++;
			console.log("hit");
		var tail = snake_array.unshift();
			snake_array.unshift(tail);
			
			food_paint.x = Math.round(Math.random()*(25));
			food_paint.y =  Math.round(Math.random()*(25));
			
			console.log(food_paint.x);
			console.log(food_paint.y);
		}
	}
	
	function ResetGame()
	{
		score = 0;
		set_snake;
		
	}
	// paint the score
	var score_show = "SCORE; " + score;
	
	
		function move() {
		    // left keypress function and not going to the right
		    if (snake.lastKeyPressed == 37 && snake.dx !=1 ) {
		        console.log("Left Arrow");
		        snake.dx = -1;
				snake.dy = 0;
				
				
		    } 
		    // right keypress function and not going to the left
		    if (snake.lastKeyPressed == 39 && snake.dx !=-1) {
		        console.log("Right Arrow");
				snake.dx = 1;
				snake.dy = 0;
				
		    } 
		    // up keypress function and not going to down
		    if(snake.lastKeyPressed == 38 && snake.dy !=1) {
		        console.log("Up Arrow");
		        snake.dy = -1;
				snake.dx = 0;
		
			
		    } 
		    // down keypress function and not going up
		    if(snake.lastKeyPressed == 40 && snake.dy !=-1) {
		        console.log("Down Arrow");
		        snake.dy = 1;
				snake.dx = 0;
				
				
		    }
			
		}	
		    // $("document").mousemove(function(event){ // checks where the cursor movement is on the screen
		    // player.x = event.pageX; // the player will follow the cursor
		    // player.y = event.pageY;
		    // });
		
		// requestAnimationFrame(move);
		// speed of the player movement (frames per second)
		var fps = 10;
		// the amount of rows and column cells in the canvas
		var cells = 50;

		// function to draw the player 	
		function draw() {
		    setTimeout(function() {
		        var cvs = $("canvas").get(0);
		        var ctx = cvs.getContext("2d");
		        ctx.clearRect(0, 0, cvs.width, cvs.height); // clear the canvas
		        ctx.fillRect(snake.x * cvs.width / cells, 
						snake.y * cvs.height / cells,
						cvs.width / cells, 
						cvs.height / cells);
		// drawing the food 
					ctx.fillRect(food_paint.x * cvs.width / cells, 
						food_paint.y * cvs.height / cells,
					//	ctx.fillStyle = "red",
						cvs.width / cells, 
						cvs.height / cells);
		
						
		        for (var i = 0; i < snake_array.length; i++) {
		            var ab = snake_array[i];
							ctx.fillStyle = "blue";
							ctx.strokeStyle = "white";
							ctx.strokeRect(snake_array[i].x * cvs.width / cells, 
							snake_array[i].y * cvs.height / cells,
							cvs.width / cells,
							cvs.height / cells);
							ctx.fillRect(snake_array[i].x * cvs.width / cells, 
							snake_array[i].y * cvs.height / cells,
							cvs.width / cells,
							cvs.height / cells);
				}
					// displaying the score
							ctx.fillText(.,1,500);
		            requestAnimationFrame(draw);
				snake.x += snake.dx; // move to what according dx is assigned to
				snake.y += snake.dy; // move to what according dy is assigned to
				
				// adding the new position to the array
				snake_array.push({
				x: snake.x,
				y: snake.y
			
				});
				
				collision();
				// takes away the oldest position from the array 
				var x = snake_array.shift();
		            //  function for player colliding with canvas  
		            //  starts from a specific position which is the top left corner after collison
		            if (snake.x > 49) {
		            snake.x = 0;
		                snake.y = 0;
					snake.dx = 1;
						snake.dy = 0;
				
						ResetGame();
					
		            }
					if (snake.x < 0) {
		            snake.x = 0;
		                snake.y = 0;
					snake.dx = 1;
						snake.dy = 0;
				
						ResetGame();
						
		            }
		            if (snake.y > 49) {
		            snake.y = 0;
		                snake.x = 0;
					snake.dx = 1;
						snake.dy = 0;
				
						ResetGame();
						
		            }
		            if (snake.y < 0) {
					snake.y = 0;
		                snake.x = 0;
					snake.dx = 1;
						snake.dy = 0;
				
						ResetGame();
					
		            }
		        
		    }, 1000 / fps);
		}