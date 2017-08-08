var RedThiefAObject = function (game,x,y,groundref,mapref,enegroupref){
	Phaser.Sprite.call(this, game, x, y, 'redthiefa');
	
	this.groundTilesRef=groundref;
	this.tileMapRef=mapref;
	this.enemyGroupRef=enegroupref;
	
	
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	
	this.animations.add('default', [1,2], 10, true);
	this.animations.add('default2', [4,5], 10, true);
	
	this.body.gravity.y = 1000;
	this.body.maxVelocity.y = 500;
	
	
	this.body.collideWorldBounds = true;
	
	this.LeftOrRight=true;
	this.shootTimer=3000;
	
	this.body.onWorldBounds= new Phaser.Signal();
	this.body.onWorldBounds.add(function() {this.hitWorldBounds(1)}, this);
	
	this.update = function() {
		this.game.physics.arcade.collide(this, this.groundTilesRef,this.hitWorldBounds, null, this);
		this.move();
		
		this.shoot();
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
		this.cliffDetect();
	};
	
	this.shoot = function(){
		if(this.shootTimer <= 0){
			this.enemyGroupRef.add(new ArrowBulletObject(game, this.body.x, this.body.y, this.groundTilesRef,this.LeftOrRight));
			this.shootTimer =3000;
		}
		else{
			this.shootTimer=this.shootTimer-game.time.elapsed;
		}
	}
	
	this.cliffDetect = function(){
		var xx;
		var tilefind;
		if(this.LeftOrRight){
			xx=this.body.x - 4;
		}
		else{
			xx=this.body.x + this.body.width + 4;
		}
		tilefind=this.tileMapRef.getTileWorldXY(xx,(this.body.y + this.body.height),16,16,'GroundLayer' );
		if(this.body.onFloor() && !tilefind){
			this.LeftOrRight=!(this.LeftOrRight);
			
			this.hitWorldBounds();
		}
	}
	
	this.hitWorldBounds = function(sprite){
		if(this.body.blocked.left){
			this.LeftOrRight=false;
		}
		else if(this.body.blocked.right){
			this.LeftOrRight=true;
		}
	};
}

RedThiefAObject.prototype = Object.create(Phaser.Sprite.prototype);
RedThiefAObject.prototype.constructor = RedThiefAObject;