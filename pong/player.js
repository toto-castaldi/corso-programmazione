function Player(position, edge) {

    this.y = height / 2;
    this.x = position;
    this.edge = edge;
    this.h = 70;
    this.w = 10;
    this.step = 5;

    this.up = function() {
        this.y -= this.step;
    }

    this.down = function() {
        this.y += this.step;
    }

    this.draw = function () {
        fill(100, 100, 100);
        rect(this.x, this.y - this.h / 2, this.w, this.h);
    }
}