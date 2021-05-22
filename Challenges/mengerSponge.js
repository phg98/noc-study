const menger = [
    [[1, 1, 1],
     [1, 0, 1],
     [1, 1, 1]],
    [[1, 0, 1],
     [0, 0, 0],
     [1, 0, 1]],
    [[1, 1, 1],
     [1, 0, 1],
     [1, 1, 1]],
]
const test2= [
    [[1, 0, 1],
     [0, 0, 0],
     [1, 0, 1]],
    [[0, 1, 0],
     [1, 0, 1],
     [0, 1, 0]],
    [[1, 0, 1],
     [0, 0, 0],
     [1, 0, 1]],
]

const test3= [
    [[1, 0, 1],
     [0, 0, 0],
     [1, 0, 1]],
    [[0, 0, 0],
     [0, 0, 0],
     [0, 0, 0]],
    [[1, 0, 1],
     [0, 0, 0],
     [1, 0, 1]],
]

const test = [
    [[1, 0, 0],
     [1, 0, 1],
     [1, 0, 0]],
    [[0, 1, 0],
     [0, 1, 0],
     [0, 1, 0]],
    [[0, 0, 1],
     [1, 0, 1],
     [0, 0, 1]],
]


class Box {


    constructor(x, y, z, r) {
        this.x = x
        this.y = y
        this.z = z
        this.r = r
    }

    show() {
        noStroke()
        fill(255)
        push()
        translate(this.x, this.y, this.z)
        box(this.r)
        pop()
    }

    generate() {
        let newBoxes = []
        let newR = this.r / 3
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    //if (menger[z+1][y+1][x+1] == 1)
                    if (test[z+1][y+1][x+1] == 1)
                        newBoxes.push(new Box(this.x + x * newR, this.y + y * newR, this.z + z * newR, newR))
                }
            }
        }
        return newBoxes
    }
}

let b
let sponge = []

function setup() {
    createCanvas(400, 400, WEBGL)
    sponge.push(new Box(0, 0, 0, 200))
}

function draw() {
    background(0)
    lights()
    rotateX(frameCount * 0.01)
    rotateY(frameCount * 0.02)
    //translate(width / 2, height / 2)
    for (let b of sponge) {
        b.show()
    }
}

function mousePressed() {
    let newSponge = []
    for (let b of sponge) {
        let c = b.generate()
        newSponge = newSponge.concat(c)
    }
    sponge = newSponge
}