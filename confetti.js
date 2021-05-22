class Confetti extends Particle {
    constructor(x, y) {
        super(x, y)
    }

    draw() {
        noStroke()
//        stroke(255)
//        strokeWeight(4)
        let squareColor = color(0, 0, 255)
        squareColor.setAlpha(255-this.age*2)
        fill(squareColor)
        square(this.x, this.y, this.rad*2)
    }
}