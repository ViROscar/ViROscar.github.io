var PlayerObject = function (game,x,y){
	Phaser.Sprite.call(this, game, x, y, 'player');
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	
	this.animations.add('default', [0], 10, true);
	this.animations.add('default2', [3], 10, true);
	this.animations.add('left', [4, 5], 10, true);
	this.animations.add('right', [1, 2], 10, true);
	
	this.body.gravity.y = 1000;
	this.body.maxVelocity.y = 500;
	
	this.body.collideWorldBounds = true;
	
	this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	this.key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	this.key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
	this.LeftOrRight=0;
	
	this.update = function() {
		this.playerMove();
	};
	
	this.playerMove = function(){
		this.body.velocity.x = 0;
		if (this.key1.isDown){
			this.LeftOrRight=1;
			this.animations.play('left');
			this.body.velocity.x = -150;
		}
		else if (this.key2.isDown){
			this.LeftOrRight=0;
			this.animations.play('right');
			this.body.velocity.x = 150;
		}
		else {
			if(this.LeftOrRight==0){
				this.animations.play('default');
			}
			else{
				this.animations.play('default2');
			}
			
		}
		/*if (this.key3.isDown && this.customOnFloor && game.time.now > this.jumpTimer){ //  this.body.onFloor()
			this.body.velocity.y = -250;
			this.jumpTimer = game.time.now + 750;
		}*/
		if (this.key3.isDown && this.body.onFloor() ){ //  this.body.onFloor()
			this.body.velocity.y = -270;
			//this.jumpTimer = game.time.now + 750;
		}
	};
}

PlayerObject.prototype = Object.create(Phaser.Sprite.prototype);
PlayerObject.prototype.constructor = PlayerObject;