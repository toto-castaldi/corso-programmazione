function Palla() {
    this.posizione = createVector(width / 2 , height / 2 );
    this.velocita = createVector(5, 5);

    this.aggiorna = function () {
        this.posizione.add(this.velocita);

        if (
            this.posizione.y > height
            || this.posizione.y < 0
        ) {
            this.velocita.y *= -1;
        }
        if (
            this.posizione.x > width
            || this.posizione.x < 0
        ) {
            gioco = false;
            this.posizione = createVector(width / 2, height / 2);
            this.velocita = createVector(5, 5);
        }

        if (
            this.posizione.x >= player2.rimbalzo
            && this.posizione.y > player2.posizione.y - player2.altezza / 2
            && this.posizione.y < player2.posizione.y + player2.altezza / 2
            ) {
            this.velocita.x *= -1;
        }

        if (
            this.posizione.x <= player1.rimbalzo
            && this.posizione.y > player1.posizione.y - player1.altezza / 2
            && this.posizione.y < player1.posizione.y + player1.altezza / 2
            ) {
            this.velocita.x *= -1;
        }


    }

    this.disegna = function () {
        fill(255);
        circle(this.posizione.x, this.posizione.y, 15);
    }

}