//I originally intended a decision to be made from the beginning so you had to choose a side and only get half of the world available to you but decided to just have it all for everyone
//Clicking each of the icons on the map should pull up a little blurb about each one and one they're significant


M = 1; //The main variable I have to change the page
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
	TB2 = loadImage('Thunder_Bluff2.jpg');
	SW = loadImage('Stormwind_Front.png');
	SWMap = loadImage('Stormwind_Map.jpeg');
	IFFront = loadImage('Ironforge_Front.jpg');
	IFMap = loadImage('Ironforge_Map.jpg');
	Ratch = loadImage('Ratchet.jpg');
	BB = loadImage('Booty_Bay.jpg');
	UC = loadImage('Undercity.jpg');
	UCMap = loadImage('Undercity_Map.jpg');
}

function setup() {
	createCanvas(800, 400);
}

function draw() {
	if(M ==0){ //I decided that 0 would be the menu for people to get a quick glimpse of whos on which side
		background(255);
		fill(0, 0, 120);
		textSize(32);
		textStyle(BOLD);
		text('Alliance', 175, 80);
		rect(100, 100, 250, 250);
		fill(160, 0, 0);
		textSize(32);
		text('Horde', 575, 80);
		rect(500, 100, 250, 250);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
		fill(217, 168, 0);
		textStyle(NORMAL);
		text('Human', 160, 150);
		text('Dwarf', 160, 200);
		text('Gnome', 160, 250);
		text('Night Elf', 160, 300);
		fill(0);
		text('Orc', 575, 150);
		text('Troll', 575, 200);
		text('Tauren', 575, 250);
		text('Forsaken', 575, 300);
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
		textSize(24);
		fill(255);
		text('Factions', 603, 35);
		//Drew a black arrow to get to the other side of the world, use Ratchet to get to there now
		//fill(0);
		//triangle(800, 375, 765, 360, 765, 390);
		//rect(735, 370, 30, 10);
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
		textSize(24);
		fill(255);
		text('Factions', 603, 35);
		//This drew a black triangle to get to the other side of the map, use Booty Bay to get there now
		//fill(0);
		//triangle(0, 375, 35, 360, 35, 390);
		//rect(35, 370, 30, 10);
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
		image(Orc, 0, 0, 200, 250);
		image(Org, 550, 150, 250, 250);
		fill(0);
		textSize(32);
		text('Orgrimmar', 300, 50);
		textSize(20);
		text('Although built more recently than other capitals,', 210, 75);
		text('Orgrimmar stands as the homefront for almost all Horde', 210, 95);
		text('operations. Having moved here during the second demon invasion,', 210, 115);
		text('the orcs and trolls have build this city as symbol of hope', 210, 135);
		text('and salvation for all native born orc.', 210, 155);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 5){//Thunder Bluff Page
		clear();
		background(141, 168, 201);
		image(TB, 0, 0, 200, 200);
		image(TB2, 500, 250, 300, 200);
		fill(0);
		textSize(32);
		text('Thunder Bluff', 300, 50);
		textSize(20);
		text('It is unclear as for how long the Tauren have lived here,', 210, 75);
		text('but they"re fiercly loyal to mother earth and although', 210, 95);
		text('might think they"re traditions and buildings are primitive,', 210, 115);
		text('Thunder Bluff is not be trifiled with. ', 210, 135);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 6){ //Ratchet Page
		clear();
		background(114, 159, 73);
		image(Ratch, 0, 0, 200, 200);
		fill(0);
		textSize(32);
		text('Ratchet', 300, 50);
		textSize(20);
		text('Even though Goblins have remaind mostly neutral,', 210, 75);
		text('Ratchet stands as one of the Orgrimmars most important ports.', 210, 95);
		text('Mainly used for its direct route to Booty Bay, The Alliance', 210, 115);
		text('has not shyed from using this port to invade the Horde.', 210, 135);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
		rect(600, 300, 200, 100);
		fill(255);
		textSize(32);
		text('To Booty Bay', 600, 360);
	}
	if(M == 7){ //Undercity Page
		clear();
		background(150);
		image(UC, 0 , 0, 200 ,200);
		image(UCMap, 600, 200, 200, 200);
		fill(255);
		textSize(32);
		text('Undercity', 300, 50);
		textSize(20);
		text('Lorderan was once one of the biggest human capitals in the world.', 215, 70);
		text('But after the second demon invasion and a massive plague, it was', 215, 85);
		text('reduced to dust and ruins. Now the ruins of the city serve as the', 215, 100);
		text('capital of the Forsaken, and it is fitting given that the city houses', 215, 115);
		text('some of the most abominable creatures in existence. Unluckily for,', 215, 130);
		text('the Alliance, this city serves the Horde.', 215, 145);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
	}
	if(M == 8){ //Ironforge Page
		clear();
		background(251, 110, 73);
		image(IFMap, 0, 0, 300, 300);
		image(IFFront, 400, 200, 200, 200);
		textSize(32);
		text('Ironforge', 375, 50);
		textSize(20);
		text('The ancient home of the Dwarves and Gnomes.', 300, 75);
		text('A city of wonderand brutal winters. Thanks', 300, 95);
		text('to the technical prowess of the gnomes and', 300, 115);
		text('the handywork of the dwarves, Ironforge has', 300, 135);
		text('stood the test of time and remains one of', 300, 155);
		text('the longest standing capitals of the Alliance.', 300, 175);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
		rect(600, 300, 200, 100);
		fill(255);
		textSize(32);
		text('To Stormwind', 600, 360);
	}
	if(M == 9){ //Stormwind Page
		clear();
		background(0, 0, 120);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
		rect(200, 200, 200, 100);
		fill(217, 168, 0);
		textSize(32);
		text('Stormwind', 280, 50);
		text('To Ironforge', 210, 260);
		textSize(20);
		text('The Capital for humans and the forefront of Alliance operations,', 230, 75);
		text('Stormwind stands as one the longest lasting human cities.', 230, 95);
		text('Because of it"s close proximity to Ironforge, even the dwarves', 230, 115);
		text('have set up shop in one of the districts, and an underground', 230, 135);
		text('tram allows quick travel between the two cities.', 230, 155);
		image(SW, 0, 0, 200, 200);
		image(SWMap, 500, 200, 200, 200); 
	}
	if(M == 10){ //Booty Bay Page
		clear();
		background(114, 159, 73);
		image(BB, 500, 200, 300, 200);
		fill(255);
		textSize(32);
		text('Booty Bay', 100, 50);
		textSize(20);
		text('Thanks to the neutral stance goblins have taken in the conflict,', 50, 75);
		text('Booty Bay thrives as one of biggest commercial cities in the world.', 50, 95);
		text('The fishing scene is said to be the best, but it doesn"t help', 50, 115);
		text('defend the city from the encroaching Bloodsail Buccaneers.', 50, 135);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
		rect(200, 200, 200, 100);
		fill(255);
		textSize(32);
		text('To Ratchet', 220, 250);
	}
	if(M == 11 ){ //I needed another page for when you're in map 2 so that you dont get booted to map 1 again
		background(255);
		fill(0, 0, 120);
		textSize(32);
		textStyle(BOLD);
		text('Alliance', 175, 80);
		rect(100, 100, 250, 250);
		fill(160, 0, 0);
		textSize(32);
		text('Horde', 575, 80);
		rect(500, 100, 250, 250);
		fill(0);
		triangle(0, 375, 35, 360, 35, 390);
		rect(35, 370, 30, 10);
		fill(217, 168, 0);
		textStyle(NORMAL);
		text('Human', 160, 150);
		text('Dwarf', 160, 200);
		text('Gnome', 160, 250);
		text('Night Elf', 160, 300);
		fill(0);
		text('Orc', 575, 150);
		text('Troll', 575, 200);
		text('Tauren', 575, 250);
		text('Forsaken', 575, 300);
		
	}
}
function mousePressed(){
	if(M == 0){
		if(mouseX < 50){//Click to get the player back to the map
			if(mouseY > 350){
				M = 1;
			}
		}
	}
	if(M == 1){
		if(mouseX > 600){ //accessing the menu
			if(mouseX < 700){				
				if(mouseY < 100){
					clear();
					M = 0;
			}
		}
	} 
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
		//This changed to the East side, very useful when making the map, but exploration is fun!
		//if(mouseX > 700){ //for the player to change to the East side
			//if(mouseY >50){
				//M = 2;
			//}
		//}
	}
	if(M == 2){
		if(mouseX > 600){ //accessing the menu
			if(mouseX < 700){				
				if(mouseY < 100){
					clear();
					M = 11;
				}
			}
		} 
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
		//Same as before, exploration is more fun than just clicking an arrow to get to the other side of the world
		//if(mouseX < 100){//For the player to get to the West Side
			//if(mouseY > 350){
				//M = 1;
			//}
		//}
	}

	if(M == 3){//Darnassus
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 4){//Orgrimmar
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 5){//Thunder Bluff
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 6){//Ratchet
		if(mouseX > 600){//Boat to Booty Bay
				if(mouseY > 300){
						M = 10;
			}
		}
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 1;
				}
			}
	}
	if(M == 7){//Undercity
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 2;
				}
			}
	}
	if(M == 8){//Ironforge
		if(mouseX > 600){//Tram to Stormwind
			if(mouseX < 800){
				if(mouseY > 300){			
						M = 9;
				}
			}
		}
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 2;
				}
			}
	}
	if(M == 9){//Stormwind
		if(mouseX > 200){//Tram to Ironforge
			if(mouseX < 400){
				if(mouseY > 200){
					if(mouseY < 300){
						M = 8;
					}
				}
			}
		}
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 2;
				}
			}
		}
	if(M == 10){ //Booty Bay
		if(mouseX > 200){//Boat to Ratchet
			if(mouseX< 400){
				if(mouseY > 200){
					if(mouseY < 300){
						M = 6;
					}
				}
			}
		}
		if(mouseX < 50){//click to get the player back to the map
				if(mouseY > 350){
					M = 2;
				}
			}
		}
	if(M == 11){
		if(mouseX < 50){//Click to get the player back to the map
			if(mouseY > 350){
				M = 2;
			}
		}
	}
	}
	