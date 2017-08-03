var SpiderObject = function (game,x,y,groundref){
	Phaser.Sprite.call(this, game, x, y, 'spider');
	
	this.groundTilesRef=groundref;
	
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	
	this.animations.add('default', [1,2], 10, true);
	this.animations.add('default2', [4,5], 10, true);
	
	this.body.gravity.y = 1000;
	this.body.maxVelocity.y = 500;
	
	this.jumpTimer=Math.floor(Math.random() * (3000 - 0 + 1)) + 0;
	
	this.body.collideWorldBounds = true;
	
	this.LeftOrRight=true;
	
	this.body.onWorldBounds= new Phaser.Signal();
	this.body.onWorldBounds.add(function() {this.hitWorldBounds(1)}, this);
	
	
	
	this.update = function() {
		this.game.physics.arcade.collide(this, this.groundTilesRef,this.hitWorldBounds, null, this);
		this.move();
		this.smalljump();
	};
	
	this.move = function(){
		this.body.velocity.x = 0;
		if(this.LeftOrRight){
			this.animations.play('default2');
			this.body.velocity.x = -50;
		}
		else{
			this.animations.play('default');
			this.body.velocity.x = 50;
		}
	};
	
	this.smalljump = function(){
		if(this.jumpTimer > 0){
			this.jumpTimer=this.jumpTimer - game.time.elapsed ;
		}
		else{
			this.body.velocity.y = -100;
			this.jumpTimer=3000;
		}
	};
	
	this.hitWorldBounds = function(sprite){
		//console.log("A");
		if(this.body.blocked.left){
			this.LeftOrRight=false;
		}
		else if(this.body.blocked.right){
			this.LeftOrRight=true;
		}
	};
}

SpiderObject.prototype = Object.create(Phaser.Sprite.prototype);
SpiderObject.prototype.constructor = SpiderObject;