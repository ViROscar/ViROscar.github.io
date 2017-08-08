var ArrowBulletObject = function (game,x,y,groundref,posleftright){
	Phaser.Sprite.call(this, game, x, y, 'arrowbullet');
	
	this.groundTilesRef=groundref;
	
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	
	this.animations.add('default', [0,1], 15, true);
	this.animations.add('default2', [2,3], 15, true);
	
	this.body.gravity.y = 1000;
	this.body.maxVelocity.y = 10;
		
	this.body.collideWorldBounds = true;
	
	this.LeftOrRight=posleftright;
	
	this.body.onWorldBounds= new Phaser.Signal();
	this.body.onWorldBounds.add(function() {this.hitWorldBounds(1)}, this);
	
	
	
	this.update = function() {
		this.game.physics.arcade.collide(this, this.groundTilesRef,this.hitWorldBounds, null, this);
		if(this.alive){
			this.move();
		}
		else{
			console.log("destroyed");
			this.destroy();
		}
		
		
	};
	
	this.move = function(){
		this.body.velocity.x = 0;
		if(this.LeftOrRight){
			this.animations.play('default2');
			this.body.velocity.x = -200;
		}
		else{
			this.animations.play('default');
			this.body.velocity.x = 200;
		}
	};
	
	
	this.hitWorldBounds = function(sprite){
		this.kill();
	};
}

ArrowBulletObject.prototype = Object.create(Phaser.Sprite.prototype);
ArrowBulletObject.prototype.constructor = ArrowBulletObject;