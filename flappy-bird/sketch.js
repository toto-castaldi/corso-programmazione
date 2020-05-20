let bird;
let immagini = {};
let posizione = 0;
let altezzaCielo = 0;
let tubi = [];
let velocita = 3;
let punti = 0;

function setup() {
    createCanvas(immagini["terreno"].width - 20, 700);
    bird = new Bird();
    altezzaCielo = height - immagini["terreno"].height;
}

function preload() {
    immagini["bird-01"] = loadImage("flappy_beans/png/fbs-01.png");
    immagini["bird-02"] = loadImage("flappy_beans/png/fbs-02.png");
    immagini["bird-03"] = loadImage("flappy_beans/png/fbs-03.png");
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

    for (let indice = tubi.length -1 ; indice >= 0; indice--) {
        const tubo = tubi[indice];
        tubo.aggiorna();
        tubo.disegna();
        if (tubo.x < -30) {
            tubi.splice(indice,1);
            punti++;
        }
    }

    image(
        immagini["terreno"],
        posizione % 20,
        height - immagini["terreno"].height
    );

    posizione -= velocita;

    //ogni 80 frame
    if (posizione % 80 == 0) {
        tubi.push(new Pipe());
    }

    textSize(32);
    fill(0, 102, 153);
    text(punti, 10, 60);


}