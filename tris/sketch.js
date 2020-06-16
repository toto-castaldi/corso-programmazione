let turno = "O";
let partita = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];

function setup() {
    createCanvas(300, 300);
}

function cambioTurno() {
    if (turno == "X") {
        turno = "O"
    } else {
        turno = "X";
    }
}

function keyPressed() {
    if (keyCode >= 97 && keyCode <= 105) {
        //mossa valida
        let tasto = keyCode - 96;
        console.log(tasto);
        for (let i = 0; i < partita.length; i++) {
            let riga = partita[i];
            for (let j = 0; j < riga.length; j++) {
                let cella = riga[j];
                if (cella == tasto) {
                    partita[i][j] = turno;
                    cambioTurno();
                }
            }
        }
    }
}

function partitaVinta() {
    for (let i = 0; i < partita.length; i++) {
        let riga = partita[i];
        if (riga[0] == riga[1] && riga[1] == riga[2]) {
            return true;
        }
    }

    for (let i = 0; i < partita[0].length; i++) {
        if (partita[0][i] == partita[1][i] && partita[1][i] == partita[2][i]) {
            return true;
        }
    }

    if (partita[0][0] == partita[1][1] && partita[1][1] == partita[2][2]) {
        return true;
    }

    if (partita[0][2] == partita[1][1] && partita[1][1] == partita[2][0]) {
        return true;
    }

    return false;
}

function draw() {
    background(0);

    fill(255);
    for (let i = 0; i < partita.length; i++) {
        let riga = partita[i];
        for (let j = 0; j < riga.length; j++) {
            let cella = riga[j];
            textSize(32);
            text(cella, j * 100 + 50, i * 100 + 50);
        }
    }

    textSize(10);
    text("è il turno di " + turno, 20, 20);

    if (partitaVinta()) {
        cambioTurno();
        textSize(10);
        text("ha vinto " + turno + " !", 20, height - 10);
        noLoop();
    }
}