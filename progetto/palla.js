function Palla(
    posizioneInizialeX,
    posizioneInizialeY,
    r,
    g,
    b
) {
    this.posizione = posizioneInizialeX;
    this.direzione = random([+1, -1]);
    this.daRimuovere = false;

    //disegno
    this.disegna = function () {
        stroke(r, g, b);
        noFill();
        circle(this.posizione, posizioneInizialeY, 40);
    }

    //aggiornamento
    this.aggiorna = function () {
        if (this.posizione >= width) {
            this.direzione = -1;
        }
        if (this.posizione <= 0) {
            this.direzione = +1;
        }

        this.posizione += this.direzione * velocita.value();
    }

    this.colpita = function () {
        if (dist(mouseX, mouseY, this.posizione, posizioneInizialeY) < 40) {
            this.daRimuovere = true;
        }
        return this.daRimuovere;
    }

}