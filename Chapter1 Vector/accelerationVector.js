
class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y)
        //this.vel = createVector(5, -5)
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(3))
        //this.acc = createVector(0, 0.5)
        this.acc = p5.Vector.random2D()
        this.acc.setMag(0.5)
        this.rad = random(5,20)
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
        if (this.pos.y >= height) {
            this.pos.y = height
            this.vel.y = -(this.vel.y*0.9)
            //print(this.vel.y)
        }
        if (this.pos.x <= 0) {
            this.pos.x = 0
            this.vel.x = -this.vel.x
        }
        if (this.pos.x >= width) {
            this.pos.x = width
            this.vel.x = -this.vel.x
        }
        this.age++
    }

    draw() {
        noStroke()
//        stroke(255)
//        strokeWeight(4)
        fill(255,(255-this.age*2))
        circle(this.pos.x, this.pos.y, this.rad)
    }
}
let v = []
function setup() {
    createCanvas(400, 400)
    background(0)
}

function draw() {
    background(0)
    v.push(new Mover(width/2, height/4))
    v.forEach(e=>{
        e.step()
        e.draw()
    })
    v = v.filter(e=>e.age<200)
    //print('length=', v.length)
}
