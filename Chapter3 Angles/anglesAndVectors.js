class Mover {
    constructor(x, y, mass) {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.vel.mult(1)
        this.acc = createVector(0, 0)
        this.mass = mass
        this.rad = sqrt(mass)*10
        this.age = 0
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass)
        this.acc.add(f)
    }

    step() {
        //this.friction()
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.set(0,0)
    }

    draw() {
        noStroke()
        fill(255, 200)
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading())
        triangle(-this.rad/2, -this.rad/2, 
                 -this.rad/2, this.rad/2, 
                 this.rad, 0)
        pop()
    }
}

class Attractor {
    constructor(x, y, m) {
        this.pos = createVector(x, y)
        this.m = m
        this.rad = sqrt(m)*10
    }

    attract(mover) {
        //let force = p5.Vector.sub(mover.pos, this.pos)
        let force = p5.Vector.sub(this.pos, mover.pos)
        let d = constrain(force.magSq(), 25, 200)
        force.normalize()
        force.setMag(gC*this.m*mover.mass/d)
        mover.applyForce(force)
    }

    draw() {
        noStroke()
        fill(255, 0, 100)
        circle(this.pos.x, this.pos.y, this.rad*2)
    }
}

let gC = 1
let movers = []
let attractor
function setup() {
    createCanvas(400, 400)
    angleMode(RADIANS)
    attractor = new Attractor(width/2, height/2, 5)
    for (let i = 0; i < 10; i++) {
        movers.push(new Mover(random(width), random(height) , random(1,5)))
    }
    background(0)
}

function draw() {
    background(0)
    for (let e of movers) {
        e.step()
        e.draw()
        attractor.attract(e)
    }
    attractor.draw()
}
