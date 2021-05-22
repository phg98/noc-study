/// <reference path="../TSDef/p5.global-mode.d.ts" />

class Drop {
    constructor() {
        this.x = random(-width, width * 2)
        this.y = random(-500, -50)
        this.z = random(0, 20)
        this.speedY = map(this.z, 0, 20, 3, 10)
        this.grav = 0.2
        this.length = map(this.z, 0, 20, 10, 30)
        this.width = map(this.z, 0, 20, 1, 3)
    }

    fall() {
        this.speedY += this.grav
        this.y += this.speedY
        this.speedX = map(mouseX, 0, width, -10, 10)
        this.x += this.speedX
        if (this.y >= height) {
            this.x = random(-width, width * 2)
            this.y = random(-500, -50)
            this.z = random(0, 20)
            this.speedY = map(this.z, 0, 20, 3, 10)
            this.grav = 0.2
            this.length = map(this.z, 0, 20, 10, 30)
            this.width = map(this.z, 0, 20, 1, 3)
        }
    }

    show() {
        strokeWeight(this.width)
        stroke(138, 43, 226)
        line(this.x, this.y, this.x + this.speedX, this.y + this.length)
    }
}

let drops = []

function setup() {
    createCanvas(400, 400)
    for (let i = 0; i < 200; i++) {
        drops.push(new Drop())
    }
}

function draw() {
    background(230, 230, 250)
    for (let d of drops) {
        d.fall()
        d.show()
    }
}