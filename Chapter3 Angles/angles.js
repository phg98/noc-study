let angle = 0
let angleV = 0
let angleA = 0.001

function setup() {
    createCanvas(400, 400)
    angleMode(RADIANS)
}

function draw() {
    angleA = map(mouseX, 0, width, -0.01, 0.01)
    angleV = constrain(angleV, -0.2, 0.2)
    background(132, 83, 162)
    noStroke()
    fill(240, 99, 164)
    translate(width/2, height/2)
    rotate(angle)
    rectMode(CENTER)
    rect(0, 0, 200, 50)
    angle += angleV
    angleV += angleA
}
