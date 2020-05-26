function Ball() {
    this.velocity = createVector(0, 0);
    this.position = createVector(0, 0);
    this.force = undefined;
    this.gravity = createVector(0, 0.05);

    this.update = function () {
        this.velocity.add(this.force);
        this.velocity.add(this.gravity);
        this.position.add(this.velocity);
        this.force.mult(0.9);
    }

    this.apply = function (f) {
        this.force = f;
        this.force.setMag(map(f.mag(), 0, width / 2, 0, 1));

    }

    this.draw = function () {
        fill(255);
        circle(this.position.x, this.position.y, 15);
    }
}