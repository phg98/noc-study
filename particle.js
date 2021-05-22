
class Particle extends p5.Vector {
    constructor(x, y) {
        super(x, y)
        //this.vel = createVector(5, -5)
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(1))
        //this.acc = createVector(0, 0.5)
        this.acc = p5.Vector.random2D()
        this.acc.setMag(2)
        this.rad = 20
        this.age = 0
    }

    applyForce(force) {
        this.acc.add(force)
    }

    step() {
        //let mouse = createVector(mouseX, mouseY)
        //this.acc = p5.Vector.sub(mouse, this.pos)
        //this.acc.setMag(0.05)
        this.vel.add(this.acc)
//        this.vel.limit(5)
        this.add(this.vel)
//        print(this.pos.y)
        if (this.y >= height) {
            this.y = height
            this.vel.y = -(this.vel.y*0.9)
            //print(this.vel.y)
        }
        if (this.x <= 0) {
            this.x = 0
            this.vel.x = -this.vel.x
        }
        if (this.x >= width) {
            this.x = width
            this.vel.x = -this.vel.x
        }
        this.age += 10
        this.acc.set(0,0)
    }

    draw() {
        noStroke()
//        stroke(255)
//        strokeWeight(4)
        fill(255,(255-this.age*2))
        circle(this.x, this.y, this.rad)
    }
}
let v = []
function setup() {
    createCanvas(400, 400)
    background(0)
}

function draw() {
    background(0)
    v.push(new Particle(width/2, height/4))
    v.forEach(e=>{
        e.step()
        e.draw()
    })
    v = v.filter(e=>e.age<200)
    //print('length=', v.length)
}
