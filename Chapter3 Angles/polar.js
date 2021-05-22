function setup() {
    createCanvas(400, 400)
    background(0)
}
let r = 100
let increment
function draw() {
    background(0)
    increment = map(mouseX, 0, width-1, PI, 0.1)
    print(increment)
    translate(width/2, height/2)
    stroke(255)
    strokeWeight(4)
    noFill()
    beginShape()
    for (let th = 0; th < TWO_PI; th += increment) {
        let r1 = r + random(-10, 10)
        let x = r1 * cos(th)
        let y = r1 * sin(th)
        vertex(x,y)
    }

    endShape(CLOSE)
}
