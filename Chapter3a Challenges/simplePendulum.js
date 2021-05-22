let angle
let angleV = 0
let angleA = 0
let len = 300
let origin 
let angleK = 1

function setup() {
    createCanvas(400, 400)
    background(0)
    angle = PI/4
    origin = createVector(200, 0)
}

function draw() {
    background(0)
    fill(252, 238, 33)
    stroke(255)
    strokeWeight(4)

    angleA = -1 * sin(angle) * angleK / len
    angleV += angleA
    angle += angleV
    
    let x = sin(angle) * len + origin.x
    let y = cos(angle) * len + origin.y

    line(200, 0, x, y)
    circle(x, y, 32)

}