function Particella(p, v, c) {

    this.velocita = v;
    this.posizione = p;
    this.colore = c;


    this.applicaForza = function (forza) {
        this.velocita.add(forza);
    }

    this.aggiorna = function () {
        this.posizione.add(this.velocita);
    }

    this.disegna = function () {
        noStroke();
        fill(this.colore);
        circle(this.posizione.x, this.posizione.y, 10);
    }


}