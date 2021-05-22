class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(1, 1)

    }

    step() {
        this.pos.add(this.vel)
    }

    draw() {
        stroke(2)
        circle(this.pos.x, this.pos.y, 10)
    }
}