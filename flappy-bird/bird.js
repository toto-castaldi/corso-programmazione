function Bird() {
    this.x = 30;
    this.y = height / 2;
    this.velocita = 0;
    this.gravita = 0.6;
    this.aria = 0.9;
    this.spinta = 10;
    this.altezza = 30;

    this.disegna = function () {
        image(immagini["bird"], this.x, this.y, 30, this.altezza);
    }

    this.aggiorna = function () {
        this.velocita += this.gravita;
        this.velocita *= this.aria;
        this.y += this.velocita;

        if (this.y + this.altezza> altezzaCielo) {
            this.velocita = 0;
            this.y = altezzaCielo - this.altezza;
        }

        if (this.y < 0) {
            this.velocita = 0;
            this.y = 0;
        }
    }

    this.vola = function () {
        this.velocita -= this.spinta;
    }

}