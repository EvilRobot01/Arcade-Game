// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y + 55;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;
};

// Update the enemy's position, required method for game
Enemy.prototype.update = function(dt) {
    if(this.x < this.boundary){
        this.x += this.speed * dt;
    }else{
        this.x = this.resetPos;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
class Hero{
    constructor(){
        this.sprite = 'images/char-boy.png';
        this.step = 101;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = (this.jump * 4) - 55;
        this.x = this.startX;
        this.y = this.startY;
        this.victory = false;
    }
    render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
    handleInput(input){
        switch(input){
            case 'left':
                if(this.x > 0){
                this.x -= this.step;}
                break;
            case 'up':
                if(this.y > 0){
                this.y -= this.jump;}
                break;
            case 'right':
                if(this.x < this.step * 4){
                this.x += this.step;}
                break;
            case 'down':
                if(this.y < this.jump * 4){
                this.y += this.jump;
                break;
        }

    }
}
update(){
    for(let enemy of allEnemies){
        if(this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)){
            this.reset();
        }
    }
    if(this.y === 55){
        this.victory = true;
    }
}
reset(){
    this.y = this.startY;
    this.x = this.startX
}
}

// Now instantiate your objects.
const player = new Hero();
const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy((-101*2.5), 83, 300);
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
