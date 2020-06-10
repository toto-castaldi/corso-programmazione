let fuochi = [];
let gravita;
let suono;
let posizione = -200;

function preload() {
    suono = loadSound("POL-change-short.wav");
}

function setup() {
    createCanvas(700, 400);
    gravita = createVector(0, 0.4);

    suono.loop();
}

function draw() {
    background(0);

    if (random(1) < 0.1) {
        fuochi.push(new Fuoco());
    }

    for (let i = fuochi.length -1; i >= 0; i--) {
        let fuoco = fuochi[i];
        fuoco.aggiorna();
        fuoco.disegna();
        if (fuoco.principale.posizione.y > height) {
            fuochi.splice(i, 1);
        }
    }

    textSize(80);
    text('grazie !!!', posizione, height / 2);

    posizione += 7;

    if (posizione > width) {
        posizione = -100;
    }

}