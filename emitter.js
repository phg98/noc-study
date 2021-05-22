class Emitter {
    constructor(x, y) {
        this.position = createVector(x, y)
        this.particles = []
    }

    emit(num) {
        for (let i = 0; i < num; i++) {
            if (i%2 == 0) {
            this.particles.push(new Particle(this.position.x, this.position.y))
            }
            else {
            this.particles.push(new Confetti(this.position.x, this.position.y))
            }
        }
    }

    draw() {
        this.particles.forEach(e => {
            e.step()
            e.draw()
        })
        this.particles = this.particles.filter(e => e.age < 200)
        //print('length=', this.particles.length)
    }

}

let emitters = []
function mousePressed() {
    emitters.push(new Emitter(mouseX, mouseY))
}
function setup() {
    createCanvas(400, 400)
    background(0)
}

function draw() {
    background(0)
    for(let e of emitters) {
    e.emit(3)
    e.draw()

    }
}
