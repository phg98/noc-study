let img
function preload() {
    img = loadImage('texture32.png')
}
class Emitter {
    constructor(x, y) {
        this.position = createVector(x, y)
        this.particles = []
    }

    emit(num) {
        for (let i = 0; i < num; i++) {
            this.particles.push(new Flame(this.position.x, this.position.y))
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
    emitters.push(new Emitter(200, 350))
    background(0)
}

function draw() {
    clear()
    background(0)
    for(let e of emitters) {
    e.emit(10)
    e.draw()
    }
}
