let forza;
let palla;

function setup() {
    createCanvas(400, 400);
    palla = new Palla();
}

function mouseClicked() {
    palla.parti(forza);
}

function draw() {
    translate(width / 2, height / 2);
    background(0);


    forza = createVector(mouseX - width / 2, mouseY - height / 2);

    stroke(255);
    line(0, 0, forza.x, forza.y);

    palla.aggiorna();
    palla.disegna();

}