function Bird() {
    this.x = 30;
    this.y = height / 2;
    this.velocita = 0;
    this.gravita = 0.6;
    this.aria = 0.9;
    this.spinta = 10;
    this.altezza = 30;
    this.inSalita = false;
    this.animazione = ["bird-01", "bird-02", "bird-03"];
    this.indiceAnimazione = 0;

    this.disegna = function () {
        if (this.inSalita) {
            if (posizione % 5 == 0) {
                this.indiceAnimazione ++;
            }
            
            this.indiceAnimazione %= this.animazione.length;

            let immagine = this.animazione[this.indiceAnimazione];
            image(immagini[immagine], this.x, this.y, 30, this.altezza);
        } else {
            image(immagini["bird-02"], this.x, this.y, 30, this.altezza);
        }
    }

    this.aggiorna = function () {
        let posizioneAttuale = this.y;

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

        if (this.y >= posizioneAttuale) {
            this.inSalita = false;
        } else {
            this.inSalita = true;
        }
    }

    this.vola = function () {
        this.velocita -= this.spinta;
    }

}