class Spring {
    constructor(k, restLen, a, b) {
        this.springK = k
        this.restLen = restLen
        this.a = a
        this.b = b
        this.springV = createVector(0, 0)
        this.springA = createVector(0, 0)
    }

    draw() {
        stroke(255)
        strokeWeight(4)
        line(this.a.position.x, this.a.position.y,
            this.b.position.x, this.b.position.y)
    }

    step() {
        // angle = atan2(position.x, position.y)
        // let len = position.mag()
        // angleA = -1 * sin(angle) * angleK / len
        // angleV += angleA
        // angle += angleV

        // position.x = sin(angle) * len
        // position.y = cos(angle) * len

        this.springA = p5.Vector.sub(this.b.position, this.a.position)
        let len = this.springA.mag()
        this.springA.normalize()
        this.springA.mult(this.springK * (len - this.restLen))
        this.a.applyForce(this.springA)
        this.springA.mult(-1)
        this.b.applyForce(this.springA)

    }
}

