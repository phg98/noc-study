class Particle {
    constructor(x, y) {
        this.position = createVector(x, y)
        this.forceK = 1
        this.mass = 1
        this.positionA = createVector(0, 0)
        this.positionV = createVector(0, 0)
        this.isLocked = false
    }

    draw() {
        //fill(100)
        fill(252, 238, 33)
        stroke(255)
        strokeWeight(4)
        circle(this.position.x, this.position.y, 16)
    }

    step() {
        this.positionV.mult(0.99)
        this.positionV.add(this.positionA)
        if (!this.isLocked) {
            this.position.add(this.positionV)
        }
        this.positionA.mult(0)
    }

    applyForce(force) {
        let f = force.copy()
        this.positionA.add(f.mult(this.forceK / this.mass))
    }
}