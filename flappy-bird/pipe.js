function Pipe() {
    this.x = width;
    this.alto = random(10, altezzaCielo / 2);
    this.spazio = random(50, altezzaCielo / 2);

    this.aggiorna = function () {
        this.x -= velocita;
    }

    this.disegna = function () {
        rect(this.x, 0, 20, this.alto);
        rect(
            this.x, 
            this.alto + this.spazio,
            20, 
            altezzaCielo - this.alto - this.spazio
        );
    }


}