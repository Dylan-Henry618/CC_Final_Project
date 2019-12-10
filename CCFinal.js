//I originally intended a decision to be made from the beginning so you had to choose a side and only get half of the world available to you but decided to just have it all for everyone
//Clicking each of the icons on the map should pull up a little blurb about each one and one they're significant


M = 1;
function preload(){ //lots of image for this map
	map1 = loadImage('Map1.jpg');
	map2 = loadImage('Map2.jpg');
	Alliance = loadImage('Alliance.png');
	Horde = loadImage('Horde.jpg');
	NE = loadImage('Night_Elf.png');
	Lo = loadImage('Undercity.png');
	Iron = loadImage('Ironforge.png');
	Storm = loadImage('Stormwind.jpg');
	Thunder = loadImage('Thunder_Bluff.jpg');
	Goblin = loadImage('Goblin_Banner.png');
	NEMap = loadImage('Darnassus_Map.jpg');
	Darn = loadImage('Darnassus.jpg');
	Orc = loadImage('Orc_Picture.jpeg');
	Org = loadImage('Orgrimmar_Map.jpg');
	TB = loadImage('Thunder_Bluff_Map.jpg');
	
}

function setup() {
	createCanvas(800, 400);
}

function draw() {
	if(M ==0){ //I decided that 0 would be the menu for people to get a quick glimpse of whos on which side
		background(255);
		fill(0, 0, 120);
		textSize(32);
		text('Alliance', 175, 80);
		rect(100, 100, 250, 250);
		fill(160, 0, 0);
		textSize(32);
		text('Horde', 575, 80);
		rect(500, 100, 250, 250);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
		fill(255);
		text('Human', 160, 150);
		text('Dwarf', 160, 200);
		text('Gnome', 160, 250);
		text('Night Elf', 160, 300);
		text('Orc', 575, 150);
		text('Troll', 575, 200);
		text('Tauren', 575, 250);
		text('Undead', 575, 300);
		
	}
	if(M == 1){ //1 is the West side of the map that loads for people to explore
		clear();
		background(map1);
		image(NE, 315, 30, 30, 30);
		image(Horde, 450, 170, 30, 30);
		image(Thunder, 350, 200, 30, 30);
		image(Goblin, 440, 190, 30, 30);
		fill(0);
		rect(600, 0, 100, 50);
		textSize(32);
		fill(255);
		text('Races', 603, 35);
		
	}
	
	if(M == 2){ //2 for the East side
		clear();
		background(map2);
		image(Lo, 325, 115, 30, 30);
		image(Iron, 360, 210, 30, 30);
		image(Storm, 330, 290, 30, 30);
		image(Goblin, 330, 360, 30, 30);
		fill(0);
		rect(600, 0, 100, 50);
		textSize(32);
		fill(255);
		text('Races', 603, 35);
	}
	if(M == 3){ //Darnassus Page
		clear();
		background(191, 0, 291);
		image(NEMap, 0, 0, 250, 250);
		image(Darn, 500, 200, 250, 250);
		fill(255);
		textSize(32);
		text('Darnassus', 300, 50);
		textSize(20);
		text('Night Elves live in partial seclusion from the rest of world.', 270, 70);
		text('Dedicated to the well being of the world tree, Night Eleves', 270, 85);
		text('used to have immortal lives but now struggle with the rest of', 270, 100);
		text('the mortal races. They band with the Alliance due to aid that', 270, 115);
		text('humans have given the Night Elves over the course of', 270, 130);
		text('History.', 270, 145);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);

	}
	if(M == 4){ //Orgrimmar Page
		clear();
		background(160, 0, 0);
		image(Orc, 0, 0, 250, 250);
		image(Org, 500, 100, 250, 250);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 5){//Thunder Bluff Page
		clear();
		background(141, 168, 201);
		image(TB, 0, 0, 300, 300);
		
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 6){ //Ratchet Page
		clear();
		background(114, 159, 73);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 7){ //Undercity Page
		clear();
		background(150);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 8){ //Ironforge Page
		clear();
		background(251, 110, 73);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 9){ //Stormwind Page
		clear();
		background(0, 0, 120);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 10){ //Booty Bay Page
		clear();
		background(114, 159, 73);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
}
function mousePressed(){
	if(M == 0){
		if(mouseX < 50){//click to get the player back to the map
			if(mouseY > 350){
				M = 1;
			}
		}
	}
	if(M == 1){
		if(mouseX < 345){//Darnassus Code
			if(mouseX > 315){
				if(mouseY < 60){
					if(mouseY > 30){
						M = 3;
					}
				}
			}
		}	
		if(mouseX < 480){ //Orgrimmar Code
			if(mouseX > 450){
				if(mouseY < 200){
					if(mouseY > 170){
						M = 4;
					}
				}
			}
		}
		if(mouseX < 380){ //Thunder Bluff Page
			if(mouseX > 350){					
				if(mouseY < 230){
					if(mouseY > 200){
						M = 5;
					}
				}
			}
		}
		if(mouseX < 470){ //Ratchet Page
			if(mouseX > 440){
				if(mouseY < 220){
					if(mouseY > 190){
						M = 6;
					}
				}
			}
		}
		if(mouseX > 700){// for the player to change to the East side
			M = 2;
		}
	}
	if(M == 2){
		if(mouseX < 355){//Undercity Code
			if(mouseX > 325){
				if(mouseY < 145){
					if(mouseY > 115){
						M = 7;
					}
				}
			}
		}
		if(mouseX < 390){ //Ironforge Code
			if(mouseX > 360){
				if(mouseY < 245){						
					if(mouseY > 215){
						M = 8;
					}
				}
			}
		}
		if(mouseX < 360){ //Stormwind Page
			if(mouseX > 330){
				if(mouseY < 320){						
					if(mouseY > 290){
						M = 9;
					}
				}
			}
		}
		if(mouseX < 360){ //Booty Bay Page
			if(mouseX > 330){
				if(mouseY < 390){
					if(mouseY > 360){
						M = 10;
					}
				}
			}
		}	
		if(mouseX < 100){//For the player to get to the West Side
			M = 1;
		}
	}
	if(mouseX > 600){ //accessing the menu from either side map
		if(mouseX < 700){				
			if(mouseY < 100){
				clear();
				M = 0;
			}
		}
	} //Accessing the Menu
	if(M == 3){
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 4){
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 5){
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 6){
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 7){
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 8){
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 9){
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
		}
	if(M == 10){
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
		}
	}
	