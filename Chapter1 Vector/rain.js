class Rain {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        //this.vel = p5.Vector.random2D()
        //this.vel.setMag(random(3))
        this.acc = createVector(0, 0.5)
        //this.acc = p5.Vector.random2D()
        //this.acc.setMag(0.5)
        this.rad = random(1,7)
        this.age = 0
    }

    step() {
        //let mouse = createVector(mouseX, mouseY)
        //this.acc = p5.Vector.sub(mouse, this.pos)
        //this.acc.setMag(0.05)
        this.acc = createVector(0, 0.1) // Gravity
        this.vel.add(this.acc)
//        this.vel.limit(5)
        this.pos.add(this.vel)
//        print(this.pos.y)
        //if (this.pos.y >= height) {
        //    this.pos.y = height
        //    this.vel.y = -(this.vel.y*0.9)
        //    //print(this.vel.y)
        //}
        this.age++
    }

    draw(thunder) {
        noStroke()
//        stroke(255)
//        strokeWeight(4)
        //fill(255,(255-this.age*2))
        if (thunder) 
            fill(map(8 - this.rad, 1, 7, 50, 255))
        else
            fill(map(this.rad, 1, 7, 50, 255))
        circle(this.pos.x, this.pos.y, this.rad)
    }
}
let v = []
let thunder = 0
function setup() {
    createCanvas(400, 400)
    background(0)
}

function draw() {
    if (thunder <= 0) {
        bg = 0
        thunder = random(200)
        if (thunder > 15) {
            thunder = 0
        }
    }
    else {
        thunder--
        bg = 255
    }
    //print(thunder)
    background(bg)
    v.push(new Rain(random(-10, width+10), -200))
    v.forEach(e=>{
        e.step()
        e.draw(thunder != 0)
    })
    v = v.filter(e=>e.age<200)
    //print('length=', v.length)
}
