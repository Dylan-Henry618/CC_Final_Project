let R = 1;
let M = 1;
var player;
pathing = [];

function preload(){
	Map1 = loadImage('Map1.jpg');
	Map2 = loadImage('Map2.jpg');

	
}
function setup() {
	createCanvas(800, 400);
	player = new Player(400, 200);
	
	//if(keyPressed){
		//if(keyCode === 'e'){
			//R += 1
		//}
	//}
	//background(mapArray[0]);

}


function draw(){
	player.show();
	switch(R) {//Going to keep it simple but with more detail in each map for players to explore
	case 1:
		background(Map1);
		break;
	
	case 2:
		background(Map2);
		break;
	}
	
	//background();
	//ellipse(mouseX, mouseY, 20, 20);
	fill(0);
	line(100, 0, 100, height);
	line(700, 0, 700, height);
	/*if(mouseX = width){
		R += 1;
	}
	if(mouseX = 0){
		R -= 1;
	}
	if(R > 2){
		R = 2;
	}
	if(R < 1){
		R = 1;
	}
}
*/
}
function mousePressed(){
	if(mouseX > 700){
		R +=1;
		//print(R);
	}
	if(mouseX < 100){
		R -= 1;
		//print(R);
	}
	if(R > 2){
		R = 2;
	}
	if(R < 1){
		R = 1;
	}
}
function keyPressed(){
	for(var i =0; i< pathing.length; i++){
		if(keyCode === 'd'){
			pathing[i].right();
			pathing[i].show();
		}
		if(keyCode === 'w'){
			pathing[i].up();
			pathing[i].show();
		}
		if(keyCode === 'a'){
			pathing[i].left();
			pathing[i].show();
		}
		if(keyCode === 's'){
			pathing[i].down();
			pathing[i].show();
		}
	}
}