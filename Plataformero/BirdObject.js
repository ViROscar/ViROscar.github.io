var BirdObject = function (game,x,y,groundref){
	Phaser.Sprite.call(this, game, x, y, 'bird');
	
	this.groundTilesRef=groundref;
	
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	
	this.animations.add('default', [0,1], 10, true);
	this.animations.add('default2', [2,3], 10, true);
	
	//this.body.gravity.y = 1000;
	this.body.maxVelocity.y = 100;
	this.smallFlyTimer= Math.floor(Math.random() * (200 - 0 + 1)) + 0; //200;
	this.UpOrDown=true;
	
	this.body.collideWorldBounds = true;
	
	this.LeftOrRight=true;
	
	this.body.onWorldBounds= new Phaser.Signal();
	this.body.onWorldBounds.add(function() {this.hitWorldBounds(1)}, this);
	
	this.update = function() {
		this.game.physics.arcade.collide(this, this.groundTilesRef,this.hitWorldBounds, null, this);
		this.move();
		this.smallFlyEfect();
	};
	
	this.move = function(){
		this.body.velocity.x = 0;
		//this.body.velocity.y = 0;
		if(this.LeftOrRight){
			this.animations.play('default2');
			this.body.velocity.x = -50;
		}
		else{
			this.animations.play('default');
			this.body.velocity.x = 50;
		}
	};
	
	this.smallFlyEfect = function(){
		
		if(this.UpOrDown){
			this.smallFlyTimer = this.smallFlyTimer - game.time.elapsed;
			this.body.velocity.y = this.smallFlyTimer; //this.body.velocity.y - game.time.elapsed;
			if(this.smallFlyTimer <= -200){
				this.smallFlyTimer=-200;
				this.UpOrDown=false;
			}
		}
		else{
			this.smallFlyTimer = this.smallFlyTimer + game.time.elapsed;
			this.body.velocity.y = this.smallFlyTimer; //this.body.velocity.y + game.time.elapsed;
			if(this.smallFlyTimer >= 200){
				this.smallFlyTimer=200;
				this.UpOrDown=true;
			}
		}
		/*
		if(this.smallFlyTimer >= 0){
			this.smallFlyTimer = this.smallFlyTimer - game.time.elapsed;
			
			if(this.smallFlyTimer <= 0){
				this.smallFlyTimer=-900;
			}
		}
		else{
			this.smallFlyTimer = this.smallFlyTimer + game.time.elapsed;
			this.body.velocity.y = -60;
			if(this.smallFlyTimer > 0){
				this.smallFlyTimer=900;
			}
		}
		*/
	};
	
	this.hitWorldBounds = function(sprite){
		if(this.body.blocked.left){
			this.LeftOrRight=false;
		}
		else if(this.body.blocked.right){
			this.LeftOrRight=true;
		}
	};
}

BirdObject.prototype = Object.create(Phaser.Sprite.prototype);
BirdObject.prototype.constructor = BirdObject;