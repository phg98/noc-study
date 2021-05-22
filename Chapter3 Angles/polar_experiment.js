function setup() {
    createCanvas(400, 400)
    background(0)
}
let r = 100
let increment
function draw() {
    background(0)
    strokeWeight(1)
    textSize(20)
    text('Move mouse in X and Y', 10, 30)
    let mx = constrain(mouseX, 0, width-1)
    let my = constrain(mouseY, 0, width-1)
    increment = map(mx, 0, width, 3, 20)
    increment = floor(increment)*2
    horn = map(my, 0, height, 0, 40)
    print(mouseX, increment)
    translate(width/2, height/2)
    stroke(255)
    strokeWeight(4)
    noFill()
    beginShape()
    for (let i = 0; i < increment; i++) {
        let th = (TWO_PI/increment)*i
        if (i%2==0) 
            r1 = r + horn
        else
            r1 = r - horn
        let x = r1 * cos(th)
        let y = r1 * sin(th)
        vertex(x,y)
    }

    endShape(CLOSE)
}
