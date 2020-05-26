let ball;
let force;
let go;

function setup() {
    createCanvas(500, 400);
    ball = new Ball();
    go = false;
}

function mouseClicked() {
    console.log("click");
    ball.apply(force);
    go = true;
}


function draw() {
    background(0);
    translate(width / 2, height / 2);

    if (go) {
        ball.update();
    } else {
        stroke(255);
        force = createVector(mouseX - width / 2, mouseY - height / 2);
        line(0, 0, force.x, force.y);
    }

    ball.draw();
}