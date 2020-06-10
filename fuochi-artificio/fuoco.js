function Fuoco() {
    //prima particella princiale che sale
    this.principale = new Particella(createVector(
        random(0, width),
        height
    ),
        createVector(0, random(-25, -5)),
        color(random(0, 255), random(0, 255), random(0, 255), 200)
    );
    this.esploso = false;
    this.particelle = [];

    this.aggiorna = function () {
        if (this.esploso == false) {
            //la particella incomincia a scendere
            if (this.principale.velocita.y >= 0) {
                this.esploso = true;
                //creao altre particelle per esplosione
                for (let i = 0; i < 50; i++) {
                    this.particelle.push(new Particella(
                        createVector(this.principale.posizione.x, this.principale.posizione.y),
                        createVector(random(-5, +5), random(-5, +5)),
                        this.principale.colore
                    ));
                }
            }
        }

        //aggiorno particella principale
        this.principale.applicaForza(gravita);
        this.principale.aggiorna();
        //aggiorno particelle esplosione
        for (let i = 0; i < this.particelle.length; i++) {
            this.particelle[i].aggiorna();
            this.particelle[i].applicaForza(gravita);
        }
    }

    this.disegna = function () {
        if (this.esploso == false) {
            this.principale.disegna();
        }
        for (let i = 0; i < this.particelle.length; i++) {
            this.particelle[i].disegna();
        }
    }
}