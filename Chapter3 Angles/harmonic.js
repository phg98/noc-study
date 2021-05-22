function setup() {
    createCanvas(400, 400)
    background(0)
}
let r = 100
let a = 0
let angleV = 0;
let increment
function draw() {
    background(0)
    //r = map(sin(a), -1, 1, 0, 200)
    r = 32
    let y = map(sin(a), -1, 1, -200, 200)
    translate(200, 200)
    fill(252, 238, 33)
    stroke(255)
    line(0, 0, 0, y)
    circle(0, y, r)
    angleV += 0.0001
    a += angleV
}