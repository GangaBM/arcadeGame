// Enemies our player must avoid
var Enemy = function(initX, initY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = initX;
    this.y = initY;
    this.speed = Math.floor(Math.random()*(10-4)+4);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 480)
        {
            this.x = -50;
           // this.speed = Math.floor(Math.random()*(10-4)+4);
        }

             this.x = this.x+this.speed+Math.floor(Math.random()*(500-300)+300)*dt;



};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var score = 0;
var Player = function(initX, initY){
    this.x = initX;
    this.y = initY;
    this.sprite = 'images/char-boy.png';
}
function reset(){
        console.log(score);
       if(score == 20 || y <= 1 ){
            ctx.fillStyle = "blue";
            ctx.rect(10, 10, 505, 606);
            ctx.font = "50px Georgia";
            ctx.fillText("GAME OVER", 100, 300);
            ctx.font = "20px Georgia";
            ctx.fillText("PRESS SPACE TO RESTART", 100, 350);
            player.x = 310;
            player.y = 400;
           for(i=0; i<= 2; i++)
                {
                    allEnemies[i].x = 0;
                    allEnemies[i].y = 0;

                }
        restart();
    }
}

function restart(keyCode){
    //addEventListener.
    if(keyCode == "(space)")
    {
        var allEnemies = [];
        x = 30;
        y = 70;
        for(i = 0; i <= 2; i++){
            var enemy = new Enemy(x, y);
            allEnemies.push(enemy);
            x = 100;
            y += 80;
            player.x = 310;
            player.y = 400;
    }

    }
}
Player.prototype.update = function(){
    reset();
    for (var i =0; i <= allEnemies.length-1; i++)
        {
            if (allEnemies[i].x < this.x + 50 &&
                allEnemies[i].x + 50 > this.x &&
                allEnemies[i].y < this.y + 60 &&
                60 + allEnemies[i].y > this.y) {
                 // collision detected!
                   this.x = 310;
                   this.y = 400;
                   score += 1;
                   }
            else {
                Player.prototype.handleInput();
                }

            }

    }

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}


Player.prototype.handleInput = function(direction){
        if(direction == 'left' && this.x >101) {
            this.x -= 100;
        }
        if(direction == 'up' && this.y > 35.5) {
            this.y -= 82.5;
        }
        if(direction == 'right' && this.x < 404){
            this.x += 100;
        }
        if(direction == 'down' && this.y < 400) {
            this.y += 82.5;
        }

}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
x = 30;
y = 70;
for(i = 0; i <= 2; i++){
    var enemy = new Enemy(x, y);
    allEnemies.push(enemy);
    x = 100;

    y += 80;
}
// Place the player object in a variable called player

var player = new Player(310, 400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: '(space)'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    restart(allowedKeys[e.keyCode]);
});