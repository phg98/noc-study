class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.rad = 10
        this.age = 0
    }

    applyForce(force) {
        this.acc.add(force)
    }

    step() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
//        print(this.pos.y)
        if (this.pos.y >= height) {
            this.pos.y = height
            this.vel.y = -(this.vel.y*0.9)
            //print(this.vel.y)
        }
        if (this.pos.x <= 0) {
            this.pos.x = 0
            this.vel.x = -this.vel.x
        }
        if (this.pos.x >= width) {
            this.pos.x = width
            this.vel.x = -this.vel.x
        }
        this.age++
    }

    draw() {
        noStroke()
//        stroke(255)
//        strokeWeight(4)
        fill(255)
        circle(this.pos.x, this.pos.y, this.rad)
    }
}
let e
let v = []
function setup() {
    createCanvas(400, 400)
    background(0)
    e = (new Mover(width/2, height/4))
}

function draw() {
        if (mouseIsPressed) {
            let wind = createVector(0.1, 0)
            e.applyForce(wind)
        }
        let gravity = createVector(0, 0.1)
        e.applyForce(gravity)
    background(0)
    e.step()
    e.draw()
    e.acc = createVector(0,0)
}
