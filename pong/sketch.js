let palla;
let player1;
let player2;
let movimento = false;
let gioco = true;

function setup() {
    createCanvas(700, 400);

    palla = new Palla();
    player1 = new Player(10, 20);
    player2 = new Player(width - 20, width - 20);
}

function keyPressed() {
    movimento = true;
}

function keyReleased() {
    movimento = false;
}

function draw() {
    background(0);

    if (gioco == true) {
       palla.aggiorna();
    }
    palla.disegna();


    player1.disegna();
    player2.disegna();


    if (movimento == true) {
        if (keyCode == 38) {
            player2.su();
        }
        if (keyCode == 40) {
            player2.giu();
        }
        if (keyCode == 81) {
            player1.su();
        }
        if (keyCode == 65) {
            player1.giu();
        }
        if (keyCode == 13) {
            gioco = true;
        }
    }
}