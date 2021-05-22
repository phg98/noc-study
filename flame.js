
class Flame extends Particle {
    constructor(x, y) {
        super(x, y)
        this.gravity = createVector(0, -0.1)
        let windX = map(mouseX, 0, 400, -0.3, 0.3)
        this.wind = createVector(windX, 0)
    }

    step() {
        this.applyForce(this.gravity)
        this.applyForce(this.wind)
        super.step()
    }

    draw() {
        imageMode(CENTER)
        blendMode(ADD)
        tint(255, 100, 100,(255-this.age*2))
        image(img, this.x, this.y, this.rad, this.rad)
    }
}