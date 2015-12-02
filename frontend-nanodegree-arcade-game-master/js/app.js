//*********************** Enemy object and Methods************************************
var Enemy = function(initX, initY) {
    // Variables applied to each of our instances go here,
    this.sprite = 'images/enemy-bug.png';
    this.x = initX;
    this.y = initY;
    this.speed = Math.floor(Math.random() * (100 - 200) + 200);
};

// Update the enemy's position by adding speed to initial x coordinate and multiplying by dt.

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x > 480) {
        this.x = Math.floor(Math.random() * 505);
    }

   this.x = this.x + this.speed * 2 * dt;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//*********************************** Player Object and methods ****************************************

var score = 0;
var Player = function(initX, initY) {
    this.x = initX;
    this.y = initY;
    this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function() {
    reset();
    for (var i = 0; i <= allEnemies.length - 1; i++) {
        if (allEnemies[i].x < this.x + 50 &&
            allEnemies[i].x + 50 > this.x &&
            allEnemies[i].y < this.y + 60 &&
            60 + allEnemies[i].y > this.y) {
            this.x = 310;
            this.y = 430;

        } else {
            Player.prototype.handleInput();
        }

    }


}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}


Player.prototype.handleInput = function(direction) {
    if (direction == 'left' && this.x > 101) {
        this.x -= 100;
    }
    if (direction == 'up' && this.y > 25) {
        this.y -= 82.5;
        console.log(this.y);
   }
    if (direction == 'right' && this.x < 404) {
        this.x += 100;
    }
    if (direction == 'down' && this.y < 430) {
        this.y += 82.5;
    }

}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
x = 30;
y = 70;
for (var i = 0; i <= 2; i++) {
    var enemy = new Enemy(x, y);
    allEnemies.push(enemy);
    x = Math.floor(Math.random() * 505);
    y += 80;
}
// Place the player object in a variable called player

var player = new Player(310, 430);


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
});

function reset() {
    console.log(player.y);
    if (player.y == 17.5) {
        player.x = 310;
        player.y = 430;
        ctx.fillStyle = "black";
        ctx.font = "40 georgia";
        ctx.fillText("Great!!", 200, 200);
        score += 100;
        document.getElementById("score").innerHTML = "SCORE: " + score;
    }
}

