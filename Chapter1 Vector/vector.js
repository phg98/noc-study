// p5.js

let walker 
function setup() {
    createCanvas(400, 400)
    walker = new ListWalker(width/2, height/2)
    background(0)  
    noStroke()
}

function draw() {
    walker.update()
    walker.show()
}