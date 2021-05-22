
let flock = []
let range = 50
let steerK = 0.005
let cohesionK = 0.005
let collisionK = 0.15
let numBoids = 30
let velLimit = 3

class Boid extends p5.Vector {
    constructor(x, y) {
        super(x, y)
        //this.vel = createVector(5, -5)
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(1.5, 2.5))
        //this.acc = createVector(0, 0.5)
        this.acc = createVector(0, 0)
        this.rad = 10
        this.age = 0
    }

    applyForce(force) {
        this.acc.add(force)
    }

    steer() {
        let steerForce = createVector(0, 0)
        let count = 0
        for (let boid of flock) {
            let d = p5.Vector.sub(this, boid)
            if (d.mag() < range) {
                if (boid != this) {
                    steerForce.add(boid.vel)
                    count++
                }
            }
        }
        if (0 < count) {
            steerForce.div(count)
            steerForce.mult(steerK)
        }
        return steerForce
    }

    cohesion() {
        let cohesionForce = createVector(0, 0)
        let count = 0
        for (let boid of flock) {
            let d = p5.Vector.sub(this, boid)
            if (d.mag() < range) {
                if (boid != this) {
                    cohesionForce.add(boid)
                    count++
                }
            }
        }
        if (0 < count) {
            cohesionForce.div(count)
            cohesionForce = p5.Vector.sub(cohesionForce, this)
            cohesionForce.mult(cohesionK)
        }
        return cohesionForce
    }

    collision() {
        let collisionForce = createVector(0, 0)
        let count = 0
        for (let boid of flock) {
            let d = p5.Vector.sub(this, boid)
            let distance = d.mag()
            if (distance < range) {
                if (boid != this) {
                    if (0.1 < distance) {
                        d.div(distance)
                    } else {
                        d.div(10)
                    }
                    collisionForce.add(d)
                    count++
                }
            }
        }
        if (0 < count) {
            collisionForce.div(count)
            collisionForce.mult(collisionK)
        }
        return collisionForce
    }

    step() {
        this.acc.add(this.steer())
        this.acc.add(this.cohesion())
        this.acc.add(this.collision())
        this.vel.add(this.acc)
        this.vel.limit(velLimit)
        this.add(this.vel)
        if (this.y > height) {
            this.y -= height
        }
        if (this.y < 0) {
            this.y += height
        }
        if (this.x < 0) {
            this.x += width
        }
        if (this.x > width) {
            this.x -= width
        }
        //this.age += 10
        this.acc.set(0, 0)
    }

    draw() {
        noStroke()
        //        stroke(255)
        //        strokeWeight(4)
        fill(255)
        circle(this.x, this.y, this.rad)
    }
}

function setup() {
    createCanvas(400, 400)
    background(0)
    for (let i = 0; i < numBoids; i++) {
        flock.push(new Boid(random(1, width), random(1,height)))
    }
}

function draw() {
    background(0)
    flock.forEach(e => {
        e.step()
        e.draw()
    })
}
