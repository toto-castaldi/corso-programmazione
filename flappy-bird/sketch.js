let bird;
let immagini = {};
let posizione = 0;
let altezzaCielo = 0;
let tubi = [];
let velocita = 3;

function setup() {
    createCanvas(immagini["terreno"].width - 20, 700);
    bird = new Bird();
    altezzaCielo = height - immagini["terreno"].height;
}

function preload() {
    immagini["bird"] = loadImage("flappy_beans/png/fbs-02.png");
    immagini["terreno"] = loadImage("flappy_beans/png/fbs-04.png");
}

function keyPressed() {
    if (key == " ") {
        bird.vola();
    }
}

function draw() {
    background(120, 222, 218);

    bird.aggiorna();
    bird.disegna();

    for (let indice = 0; indice < tubi.length; indice++) {
        const tubo = tubi[indice];
        tubo.aggiorna();
        tubo.disegna();
    }

    image(
        immagini["terreno"], 
        posizione % 20, 
        height - immagini["terreno"].height
    );
    
    posizione -= velocita;

    //ogni 160 frame
    if (posizione % 80 == 0) {
        tubi.push(new Pipe());
    }
}