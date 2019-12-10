M = 1;
function preload(){
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
}

function setup() {
	createCanvas(800, 400);
}

function draw() {
	if(M ==0){
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
	if(M == 1){
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
	
	if(M == 2){
		clear();
		background(map2);
		image(Lo, 325, 115, 30, 30);
		image(Iron, 360, 210, 30, 30);
		image(Storm, 330, 290, 30, 30);
		fill(0);
		rect(600, 0, 100, 50);
		textSize(32);
		fill(255);
		text('Races', 603, 35);
	}
}
function mousePressed(){
	if(M == 0){
		if(mouseX < 50){
			if(mouseY > 350){
				M = 1;
			}
		}
	}
	if(M == 1){
		if(mouseX > 700){
			M = 2;
		}
	}
	if(M == 2){
		if(mouseX < 100){
			M = 1;
		}
	}
	if(mouseX > 600){
		if(mouseX < 700){				
			if(mouseY < 100){
				clear();
				M = 0;
			}
		}
	}
}