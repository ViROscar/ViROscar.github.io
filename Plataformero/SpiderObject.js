var SpiderObject = function (game,x,y){
	Phaser.Sprite.call(this, game, x, y, 'spider');
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	
	this.animations.add('default', [1,2], 10, true);
	this.animations.add('default2', [4,5], 10, true);
	
	
	this.body.gravity.y = 1000;
	this.body.maxVelocity.y = 500;
	
	this.body.collideWorldBounds = true;
	
	this.LeftOrRight=0;
	
	this.update = function() {
		this.animations.play('default2');
		//this.playerMove();
	};
	
	//this.playerMove = function(){
		
	//};
}

SpiderObject.prototype = Object.create(Phaser.Sprite.prototype);
SpiderObject.prototype.constructor = SpiderObject;