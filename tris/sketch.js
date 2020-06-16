let partita = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"]
];
let grandezza = 300;
let giocatore = "X";

function setup() {
    createCanvas(grandezza, grandezza);
}

function keyPressed() {
    let tasto = keyCode - 96;
    for (let r = 0; r < 3; r++) {
        let riga = partita[r];
        for (let c = 0; c < 3; c++) {
            let cella = riga[c];
            //tasto valido e trovato libero nella partita
            if (cella == tasto) {
                partita[r][c] = giocatore;
                cambioTurno();
            }
        }
    }
}

function cambioTurno () {
    if (giocatore == "X") {
        giocatore = "O";
    } else {
        giocatore = "X";
    }
}

function finePartita () {
    //controllo sulle righe
    for (let r = 0; r < 3; r++) {
        let riga = partita[r];
        if (riga[0] == riga[1] && riga[1] == riga[2]) {
            return true;
        }
    }

    //controllo sulle colonne
    for (let c = 0; c < 3; c++) {
        if (partita[0][c] == partita[1][c] && partita[1][c] == partita[2][c]) {
            return true;
        }
    }

    //controllo diagonale alto-sx -> basso-dx
    if (partita[0][0] == partita[1][1] && partita[1][1] == partita[2][2]) {
        return true;
    }

    //controllo diagonale alto-dx -> basso-sx
    if (partita[0][2] == partita[1][1] && partita[1][1] == partita[2][0]) {
        return true;
    }

    return false;
}

function draw() {
    //resetta il canvas a NERO
    background(0);

    //stampa piano di gioco
    for (let r = 0; r < 3; r++) {
        let riga = partita[r];
        for (let c = 0; c < 3; c++) {
            let cella = riga[c];
            fill(255);
            textSize(grandezza / 10);
            text(cella, c * grandezza / 3 + grandezza / 10, r * grandezza / 3 + grandezza / 5);
        }
    }

    textSize(grandezza / 15);
    text("è il turno di " + giocatore, grandezza / 15, height - grandezza / 20 );

    if (finePartita()) {
        cambioTurno();
        textSize(grandezza / 15);
        text("ha vinto il giocatore " + giocatore, grandezza / 15,  grandezza / 20 );
        noLoop();
    }

}