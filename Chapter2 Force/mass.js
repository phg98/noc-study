class Mover {
    constructor(x, y, rad) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.rad = rad
        this.mass = rad ** 2 / 100
        this.age = 0
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass)
        this.acc.add(f)
    }

    drag(dragC) {
        let drag = this.vel.copy()
        drag.normalize()
        drag.mult(-1)
        let dragSpeed = this.vel.magSq()
        drag.setMag(dragC * dragSpeed)
        this.applyForce(drag) 
    }

    friction() {
        let diff = (height - this.rad / 2) - this.pos.y
        if (diff < 1) {
            let friction = this.vel.copy()
            friction.normalize()
            friction.mult(-1)
            let mu = 0.05
            friction.setMag(mu * this.mass)
            this.applyForce(friction)
        }

    }

    step() {
        //this.friction()
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        //        print(this.pos.y)
        if (this.pos.y >= height - this.rad / 2) {
            this.pos.y = height - this.rad / 2
            this.vel.y = -(this.vel.y * 0.8)
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
        fill(255, 200)
        circle(this.pos.x, this.pos.y, this.rad)
    }
}
let movers = []
function setup() {
    createCanvas(400, 400)
    background(0)
    for (let i = 0; i < 10; i++) {
        movers.push(new Mover(random(width), height / 4, random(10, 30)))
    }
}

function draw() {
    background(0)
    fill(255,50)
    noStroke()
    rect(0, height/2, width, height/2)
    rect(0, height*3/4, width, height/4)
    for (let e of movers) {
        if (e.pos.y > height*3/4) {
            e.drag(0.5)
        }
        else if (e.pos.y > height/2) {
            e.drag(0.2)
        }
        if (mouseIsPressed) {
            let wind = createVector(0.1, 0)
            e.applyForce(wind)
        }
        let gravity = createVector(0, 0.3)
        let weight1 = p5.Vector.mult(gravity, e.mass)
        e.applyForce(weight1)
        e.step()
        e.draw()
        e.acc = createVector(0, 0)
    }
}
