let player1;
let player2;
let ball;
let move;

function keyPressed() {
    move = true;
}


function keyReleased() {
    move = false;
}

function setup() {
    createCanvas(500, 400);
    ball = new Ball();
    player1 = new Player(10, 20);
    player2 = new Player(width - 20, width - 20);
}


function draw() {
    background(0);

    if (move) {
        if (keyCode === 81) {
            player1.up();
        } else if (keyCode === 65) {
            player1.down();
        } else if (keyCode === UP_ARROW) {
            player2.up();
        } else if (keyCode === DOWN_ARROW) {
            player2.down();
        }
    }

    ball.update();

    player1.draw();
    player2.draw();
    ball.draw();
}