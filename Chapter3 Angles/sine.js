let total 
let angles = []
let angleV = []
let r = 4
let increment

function setup() {
    createCanvas(400, 400)
    total = width / (r*2)
    for (let i = 0; i < total+1; i++) {
        angles[i] = map(i, 0, total, 0, TWO_PI)
        angleV[i] = i/100
    }
    print(total)
    background(0)
}

function draw() {
    background(0)
    fill(252, 238, 33)
    noFill()
    translate(width/2, height/2)
    beginShape()
    for (let i = 0; i < angles.length; i++) {
        let x = map(i, 0, angles.length, -200, 200)
        let y = map(sin(angles[i]), -1, 1, -200, 200)
        stroke(255)
        //line(x, 0, x, y)
        //circle(x, y, r*2)
        vertex(x, y)
        angles[i] += 0.01
//        angles[i] += angleV[i]
    }
    endShape()
}