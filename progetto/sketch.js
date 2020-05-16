let palle;
let velocita;
let palleInserite;

function setup() {
    createCanvas(300, 200);
    //width, height
    velocita = createSlider(1, 100, 1);
    //lista vuota
    palle = [];
    palleInserite = 0;
}

function mouseClicked() {
    for (let indice = 0; indice < palle.length; indice = indice + 1) {
        let palla = palle[indice];
        let eColpita = palla.colpita();
        if (eColpita) {
            console.log("colpita !", palla);
        }
    }
}

function draw() {
    //Red Green Blue
    background(0, 0, 0);

    let millisecondi = millis();

    let secondi = Math.floor(millisecondi / 1000);
    if (secondi > palleInserite) {
        palle.push(new Palla(random(width), random(height), random(255), random(255), random(255)));
        palleInserite++;
    }

    //ciclo FOR
    let palleRimosse = 0;
    for (let indice = 0; indice < palle.length; indice = indice + 1) {
        let palla = palle[indice];
        if (palla.daRimuovere) {
            palleRimosse ++;
        } else {
            palla.disegna();
            palla.aggiorna();
        }
    }

    let palleRimaste = palle.length - palleRimosse;

    textSize(32);
    
    if (palleRimaste > 5) {
        text(secondi + "punti", 10, 30);
        noLoop();
    } else {
        text(palleRimaste, 10, 30);
    }

}
