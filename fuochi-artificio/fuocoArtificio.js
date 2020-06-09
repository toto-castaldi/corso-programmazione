function FuocoArtificio() {
    this.principale = new Particella(random(width), height, createVector(0, random(-5, -20)));
    this.esploso = false;
    this.particelle = [];


    this.aggiorna = function () {
        if (this.esploso == false) {
            if (this.principale.velocita.y >= 0) {
                this.esploso = true;
                for (let i = 0; i <= 50; i++) {
                    this.particelle.push(new Particella(
                        this.principale.posizione.x, 
                        this.principale.posizione.y, 
                        createVector(random(-2, +2), random(-2, +2)),
                        this.principale.colore
                        ));
                }
            }
        }
        this.principale.applicaForza(gravita);
        this.principale.aggiorna();

        for (let i = 0; i < this.particelle.length; i++) {
            let particella = this.particelle[i];
            particella.aggiorna();
            particella.applicaForza(gravita);
        }

    }

    this.fuoriSchermo = function () {
        return this.principale.posizione.y > height;
    }

    this.disegna = function () {
        if (this.esploso == false) {
            this.principale.disegna();
        }
        for (let i = 0; i < this.particelle.length; i++) {
            let particella = this.particelle[i];
            particella.disegna();
        }
    }
}