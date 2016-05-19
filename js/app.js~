//Enemy object and Methods
var Enemy = function(initX, initY) {
    // Variables applied to each of our instances go here,
    this.sprite = 'images/enemy-bug.png';
    this.x = initX;
    this.y = initY;
    this.speed = Math.floor(Math.random() * (100 - 200) + 200);
};

// Update the enemy's position by adding speed to initial x coordinate and multiplying by dt.

Enemy.prototype.update = function(dt) {
    if (this.x > 480) {
        this.x = Math.floor(Math.random() * 30);
    }
    this.x = this.x + this.speed * 2 * dt;
};

// Draws the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player Object and methods

//Player constructor
var Player = function(initX, initY) {
    this.x = initX;
    this.y = initY;
    this.sprite = 'images/char-boy.png';
};

// player movement through handleInput which listens to key presses. Resetting player's position once he reaches water
//and also when he collides with any of the enemies.
Player.prototype.update = function() {
    if (player.y == 17.5) {
    this.reset();
    }
    for (var i = 0; i <= allEnemies.length - 1; i++) {
        if (allEnemies[i].x < this.x + 50 &&
            allEnemies[i].x + 50 > this.x &&
            allEnemies[i].y < this.y + 60 &&
            60 + allEnemies[i].y > this.y) {
            this.x = 310;
            this.y = 430;

        }
    }
};

// draws player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//listens to the key presses and moves the player accordingly
Player.prototype.handleInput = function(direction) {
    this.direction = direction;
    if (this.direction == 'left' && this.x > 101) {
        this.x -= 100;
    }
    if (this.direction == 'up' && this.y > 25) {
        this.y -= 82.5;
        console.log(this.y);
    }
    if (this.direction == 'right' && this.x < 404) {
        this.x += 100;
    }
    if (this.direction == 'down' && this.y < 430) {
        this.y += 82.5;
    }

};

var score = 0; //defined to keep track of scores each time the player reaches the water
//everytime the player reaches the water, he comes to the initial position and score gets updated
Player.prototype.reset = function() {
        console.log(player.y+"second");
        player.x = 310;
        player.y = 430;
        ctx.fillStyle = "black";
        ctx.font = "40 georgia";
        ctx.fillText("Great!!", 200, 200);
        score += 100;
        document.getElementById("score").innerHTML = "SCORE: " + score;
    };

//Instantiation of Objects

//instantiation of enemy objects
var allEnemies = [];
x = 30;
y = 70;
for (var i = 0; i <= 2; i++) {
    var enemy = new Enemy(x, y);
    allEnemies.push(enemy);
    x = Math.floor(Math.random() * 505);
    y += 80;
};

// instantiation of the player object
var player = new Player(310, 430);



//Helper/input functions
// This listens for key presses
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
   };

    player.handleInput(allowedKeys[e.keyCode]);
});

