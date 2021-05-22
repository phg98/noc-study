function setup() {
    createCanvas(400, 400)
    background(0)
}

function draw() {
    background(0)
    //let v = createVector(random(-100,100), random(-100,100))
    let pos = createVector(width/2, height/2)
    let mouse = createVector(mouseX, mouseY)
    let v = p5.Vector.sub(mouse, pos)
    //background(v.mag())
    //v.normalize()
    //v.mult(50)
    v.setMag(50)
    translate(width/2, height/2)
    strokeWeight(4)
    stroke(255)
    line(0, 0, v.x, v.y)
}