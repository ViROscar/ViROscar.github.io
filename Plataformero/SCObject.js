var SCObject = function (game,x,y,groundref){
	Phaser.Sprite.call(this, game, x, y, 'scarecrown');
	
	this.groundTilesRef=groundref;
	
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	
	this.animations.add('default', [0,1], 8, true);
	this.animations.add('default2', [2,3], 8, true);
	
	this.body.gravity.y = 1000;
	
	this.body.collideWorldBounds = true;
	
	this.LeftOrRight=true;
	
	this.body.onWorldBounds= new Phaser.Signal();
	//this.body.onWorldBounds.add(function() {this.hitWorldBounds(1)}, this);
	
	
	
	this.update = function() {
		this.game.physics.arcade.collide(this, this.groundTilesRef);
		this.move();
	};
	
	this.move = function(){
		this.body.velocity.x = 0;
		if(this.LeftOrRight){
			this.animations.play('default2');
		}
		else{
			this.animations.play('default');
		}
	};
	
}

SCObject.prototype = Object.create(Phaser.Sprite.prototype);
SCObject.prototype.constructor = SpiderObject;