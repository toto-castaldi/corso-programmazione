function Ball() {
    this.velocity = createVector(3, 3);
    this.position = createVector(width / 2, height / 2);

    this.update = function () {
        this.position.add(this.velocity);
        if (
            this.position.x <= player1.edge && this.position.y > player1.y - player1.h / 2 && player1.y < player1.y + player1.h / 2) {
            this.velocity.x *= -1;
        }
        if (
            this.position.x >= player2.edge && this.position.y > player2.y - player2.h / 2 && player2.y < player2.y + player2.h / 2) {
            this.velocity.x *= -1;
        }
        if (this.position.y < 0 || this.position.y > height) {
            this.velocity.y *= -1;
        }
    }

    this.draw = function () {
        fill(255);
        circle(this.position.x, this.position.y, 15);
    }
}