var player;

eventArray = []; //ideally this array will only be 4-5 units big since i think most decisions will be

function setup(){
	//loadImage('Test_Map.jpg');
	createCanvas(800, 400);
	
}

function draw(){
	//image('Test_Map.jpg', 0, 0)
	player = createSprite(400, 200, 50, 100); //not sure why it's rainbow colored but definitely will change that when i decide what the object will be
	
	
	camera.position.x = player.position.x;
	camera.position.y = player.position.y;
	
	fill(150);
	if(eventArray[0] == 1){ //trying to make test if I can change rectangle color based on "decision"
		fill(color(255));
	}
	if(eventArray[0] == 0){ //testing color change for other chose color
		fill(color(0));
	}
	rect(windowWidth/2, windowHeight/2, 20, 20); //really just a placeholder until the rest of the code is written
		
	drawSprite(player);
	
	print(eventArray.length); //just making sure the array is being apended to
	
	print(player.velocity.x); //until i get my official starting background, i wanted to make sure it was moving
	print(player.velocity.y);
	
}

function keyPressed(){ //Movement will be based on the arrow keys
	if(keyCode === LEFT_ARROW){
		player.velocity.x = -10;
	}
	if(keyCode === RIGHT_ARROW){
		player.velocity.x = 10;
	}
	if(keyCode === UP_ARROW){
		player.velocity.y = -10;
	}
	if(keyCode === DOWN_ARROW){
		player.velocity.y = 10;
		
	}
	else{
		player.velocity.x = 0;
		player.velocity.y = 0;
	}
}

function keyTyped(){ //Testing adding to an array so that 0 will be one outcome and 1 will be the other
	if(key === 'e' ||key === 'E'){
		eventArray.push('1');
	}
	if(key === 'r' || key === 'R'){
		eventArray.push('0');
	}
}

function keyPressed(){
	
}