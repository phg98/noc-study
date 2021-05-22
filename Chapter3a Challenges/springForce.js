let angle
let angleV = 0
let angleA = 0
let restLen = 200
let origin 
let angleK = 1
let position
let springA, springV
let springK = 0.001

function setup() {
    createCanvas(400, 400)
    background(0)
    //springK = random(0.001, 0.01)
    springK = 0.01
    angleK = 0.1
    print('springK: ', springK, ' angleK: ', angleK)
    origin = createVector(200, 0)
    position = createVector(100, 250)
    springV = createVector(0, 0)
    springA = createVector(0, 0)
}

function draw() {
    background(0)
    fill(252, 238, 33)
    stroke(255)
    strokeWeight(4)

    angle = atan2(position.x, position.y)
    let len = position.mag()
    angleA = -1 * sin(angle) * angleK / len
    angleV += angleA
    angle += angleV
    
    position.x = sin(angle) * len
    position.y = cos(angle) * len

    springA = position.copy()
    springA.normalize()
    springA.mult(-1 * springK * (position.mag() - restLen))
    springV.add(springA)
    position.add(springV)
    let disp = createVector(position.x, position.y)
    disp.add(origin)

    line(origin.x, origin.y, disp.x, disp.y)
    circle(disp.x, disp.y, 32)

}