function Player(x,y){
	this.x = x;
	this.y = y;
	this.temphistory = [];
	this.totalhistory= [];

	//this.update = function(){
		//this.x += 5;
		//this.y += 5;
		
	this.up = function(){
		this.y -= 5;
		var v = createVector(this.x, this.y);
		this.temphistory.push(v);
		this.totalhistory.push(v);
		
		if(this.temphistory.length > 25){
			this.temphistory.splice(0, 1);
		
		}
	}
	this.down = function(){
		this.y += 5;
		var v = createVector(this.x, this.y);
		this.temphistory.push(v);
		this.totalhistory.push(v);
		
		if(this.temphistory.length > 25){
			this.temphistory.splice(0, 1);
		
		}
	}
	this.left = function(){
		this.x -= 5;
		var v = createVector(this.x, this.y);
		this.temphistory.push(v);
		this.totalhistory.push(v);
		
		if(this.temphistory.length > 25){
			this.temphistory.splice(0, 1);
		
		}
	}
	this.right = function(){
		this.x += 5;
		var v = createVector(this.x, this.y);
		this.temphistory.push(v);
		this.totalhistory.push(v);
		
		if(this.temphistory.length > 25){
			this.temphistory.splice(0, 1);
		
		}
	}
	this.show = function(){
		stroke(0);
		fill(0,150);
		ellipse(this.x, this.y, 24, 24);
		
		
		for(var i = 0; i < this.temphistory.length; i++){
			var pos = this.temphistory[i];
			fill(random(255));
			ellipse(pos.x, pos.y, 8, 8);
		}
	}
}