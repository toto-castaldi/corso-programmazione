function Player(disegno, rimbalzo) {
    this.posizione = createVector(disegno, height / 2);
    this.larghezza = 10;
    this.altezza = 80;
    this.rimbalzo = rimbalzo;

    this.disegna = function () {
        fill(150);
        rect(this.posizione.x, this.posizione.y - this.altezza / 2, this.larghezza, this.altezza);

    }

    this.su = function () {
        this.posizione.y -= 10;
    }

    this.giu = function () {
        this.posizione.y += 10;
    }
}