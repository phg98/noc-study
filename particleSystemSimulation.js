let particles = []
let springs = []
let count = 20
let pitch = 20
let head, tail
let springK = 0.1
let gravity
function setup() {
    createCanvas(400, 800)
    background(0)
    for (let i = 0; i < count; i++) {
        particles.push(new Particle(200, pitch * i))
        if (i != 0) {
            springs.push(new Spring(springK, pitch, particles[i - 1], particles[i]))
        }
    }
    head = particles[0]
    tail = particles[count - 1]
    head.isLocked = true
    gravity = createVector(0, 0.1)
}

function draw() {
    background(0)

    if (mouseIsPressed) {
        tail.position.set(mouseX, mouseY)
        tail.positionV.set(0, 0)
    }

    beginShape()
    for (let s of springs) {
        //s.draw()
        s.step()
    }

    for (let p of particles) {
        //p.draw()
        curveVertex(p.position.x, p.position.y)
        p.applyForce(gravity)
        p.step()
    }
    endShape()
}