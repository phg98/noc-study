let total 
let angles = []
let angleV = []
let r = 4

let waves = []

class Wave {
    constructor(amp, period, phase) {
        this.amp = amp
        this.period = period
        this.phase = phase
    }
    
    calculate(x) {
        return sin(this.phase + x * TWO_PI / this.period ) * this.amp
    }
}
function setup() {
    createCanvas(600, 400)
    background(0)
    for (let i = 0; i < 5; i++) {
        waves[i] = new Wave(random(0,100), random(0, 600), random(10, 200))
    }
}

function draw() {
    let y = 0
    background(0)
    fill(252, 238, 33)
    for (let x = 0; x < width; x += 10) {
        for (let w of waves) {
            y += w.calculate(x)
        }
        y /= waves.length
        circle(x, y + height/2, 8)
    }

    for (let w of waves) {
        w.phase += 0.1
    }
}