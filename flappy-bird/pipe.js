function Pipe() {
    this.x = width;

    this.alto = random(-320, -28);
    this.spazio = random(30, 80);

    this.aggiorna = function () {
        this.x -= velocita;
    }

    this.disegna = function () {
        image(immagini["tubo-su"], this.x , this.alto);
        image(immagini["tubo-giu"], this.x , this.alto + this.spazio + 536);
    }

    this.colpito = function (bird) {
        if (bird.x > this.x && bird.x < this.x + 20) {
            if ((bird.y < this.alto + 300) || (bird.y > this.alto + this.spazio + 536)) {
                return true;
            }
        } 
        return false;
    }


}