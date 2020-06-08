function Palla() {
    this.posizione = createVector(0, 0);
    this.velocita = createVector(0, 0);
    this.forza = undefined;
    this.gravita = createVector(0, 0.4);

    this.aggiorna = function () {
        if (this.forza != undefined) {
            this.velocita.add(this.forza);
            this.velocita.add(this.gravita);
            this.posizione.add(this.velocita);
            this.forza.mult(0.9);
        }

        if (this.posizione.y > height / 2) {
            this.velocita = createVector(0, 0);
            this.forza = undefined;
            this.posizione = createVector(0, 0);
        }
    }

    this.parti = function (forza) {
        this.forza = forza;
        this.forza.setMag(map(forza.mag(), 0, width / 2, 0, 3));
    }

    this.disegna = function () {
        fill(255);
        circle(this.posizione.x, this.posizione.y, 15);
    }

}