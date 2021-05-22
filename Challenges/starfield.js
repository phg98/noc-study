// Check https://ashik-starfield.glitch.me/ for canvas
class Star {
    constructor() {
        this.x = random(-width/2, width/2)
        this.y = random(-height/2, height/2)
        this.z = random(300, width)
        this.r = abs(randomGaussian())*10
    }

    step() {
        this.z = this.z - 2
        if (this.z < 1) {
            this.z = width
            this.x = random(-width/2, width/2)
            this.y = random(-height/2, height/2)
            this.z = random(300, width)
            this.r = abs(randomGaussian())*10
        }
    }

    draw() {
        let px = map(this.x / this.z, 0, 1, 0, width)
        let py = map(this.y / this.z, 0, 1, 0, height)
        let pr = map(this.z, 0, width, this.r, 0)
        fill(map(this.z, 0, width, 255, 0))
        circle(px, py, pr)
    }
}

const stars = []

function setup() {
    createCanvas(400, 400)
    for (let i = 0; i < 400; i++) {
        stars.push(new Star)
    }
}

function draw() {
    background(0)
    translate(width / 2, height / 2)
    for (let i of stars) {
        i.step()
        i.draw()
    }
}