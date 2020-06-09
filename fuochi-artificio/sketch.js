let fuochi = [];
let gravita;
let posizione = -400;
let musica;

function preload() {
    musica = loadSound("POL-change-short.wav");
}

function setup() {
    createCanvas(600, 400);
    gravita = createVector(0, 0.3);
    fuochi.push(new FuocoArtificio());

    musica.loop();
}

function draw() {
    background(0);

    posizione += 1;

    if (random() < 0.1) {
        fuochi.push(new FuocoArtificio());
    }

    for (let i = fuochi.length - 1; i >= 0; i--) {
        let fuoco = fuochi[i];
        fuoco.aggiorna();
        fuoco.disegna();
        if (fuoco.fuoriSchermo()) {
            fuochi.splice(i, 1);
        }
    }

    textSize(80);
    text('GRAZIE !!!', posizione, height / 2);
    if (posizione > width) {
        posizione = -500;
    }
    
    
}