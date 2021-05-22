function setup() {
    createCanvas(400, 400)
    background(0)
}
let a = 0
let angleV = 0;
let increment
function draw() {
    background(0)
    for (let x = 0; x < width; x += 32) {
        let offset = map(x, 0, width, 0, TWO_PI)
        let y = map(sin(a + offset), -1, 1, -200, 200)
        let r = map(sin((a + offset + PI)*2), -1, 1, 0, 32)
        fill(252, 238, 33)
        stroke(255)
        line(x, height/2, x, height/2 + y)
        circle(x, height/2 + y, r)
    }
    angleV += 0.0001
    a += angleV
}