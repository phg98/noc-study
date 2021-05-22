class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y)
    }

    update() {
        let offset = createVector(floor(random(-1,2)), floor(random(-1,2)))
        this.pos.add(offset)
    }

    show() {
        circle(this.pos.x, this.pos.y, 1)
    }
}