function Bird() {
    this.x = 30;
    this.y = height / 2;
    this.velocita = 0;
    this.gravita = 0.6;
    this.aria = 0.9;
    this.spinta = 10;
    this.altezza = 30;
    this.direzioneSu = false;
    this.animazione = ["bird-02", "bird-03", "bird-01"];
    this.animazioneIndice = 0;
    this.aTerra = false;

    this.disegna = function () {
        if (this.direzioneSu) {
            if (posizione % 5 == 0) {
                this.animazioneIndice ++;
                this.animazioneIndice %= this.animazione.length;
            }
        } else {
            this.animazioneIndice = 0;
        }
        if (fineGioco) {
            image(immagini["bird-morto"], this.x, this.y, 30, this.altezza);    
        } else {
            image(immagini[this.animazione[this.animazioneIndice]], this.x, this.y, 30, this.altezza);
        }
        
    }

    this.aggiorna = function () {
        let yAttuale = this.y;
        this.velocita += this.gravita;
        this.velocita *= this.aria;
        this.y += this.velocita;

        if (this.y + this.altezza> altezzaCielo) {
            this.velocita = 0;
            this.y = altezzaCielo - this.altezza;
            this.aTerra = true;
        }

        if (this.y < 0) {
            this.velocita = 0;
            this.y = 0;
        }

        if (this.y < yAttuale) {
            this.direzioneSu = true;
        } else {
            this.direzioneSu = false;
        }
    }

    this.vola = function () {
        this.velocita -= this.spinta;
    }


}