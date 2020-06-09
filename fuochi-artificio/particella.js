function Particella(x, y, v, c) {
    this.posizione = createVector(x, y);
    this.velocita = v;
    this.trasparenza = 255;
    if (c == undefined) {
        this.colore = color(random(0, 255), random(0, 255), random(0, 255));
    } else {
        this.colore = c;
    }

    this.aggiorna = function () {
        this.posizione.add(this.velocita);
        this.trasparenza--;
    }

    this.applicaForza = function (forza) {
        this.velocita.add(forza);
    }

    this.disegna = function () {
        noStroke();
        fill(this.colore);
        circle(this.posizione.x, this.posizione.y, 10);
    }

}