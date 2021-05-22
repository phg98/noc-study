class PerlinWalker {
    constructor() {
        this.x = 0
        this.y = 0
        this.tx = 1
        this.ty = 10000
    }

    step = () => {
        let stepX = noise(this.tx)
        this.x = map(stepX, 0, 1, 0, 400 )
        let stepY = noise(this.ty)
        this.y = map(stepY, 0, 1, 0, 200 )
        this.tx += 0.01
        this.ty += 0.01
    }

    draw = () => {
        print(this.x)
        print(this.y)
        circle(this.x, this.y, 20)
    }
    
}
class Walker {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

}
class Perlin2DWalker extends PerlinWalker {
    constructor() {
        super()
    }
    draw = () => {
        loadPixels()
        print('width=', width)
        print('height=', height)
        //let d = pixelDensity()
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                let index = (x + y*width)*4
                brightness = map(noise(x/100, y/100), 0, 1, 0, 255)
                //print(brightness)
                pixels[index+0] = (brightness)
                pixels[index+1] = (brightness)
                pixels[index+2] = (brightness)
                pixels[index+3] = 255
            }
        }
        updatePixels()
    }
}
//const walker = new Walker(0, 200)
//const walker = new PerlinWalker(0, 200)
const walker = new Perlin2DWalker()

function setup() {
    createCanvas(400, 400)
    pixelDensity(1)
    //background(200)
}

function draw() {
//    background(200)
    //walker.step()
    walker.draw()
        // loadPixels()
        // print('width=', width)
        // print('height=', height)
        // //let d = pixelDensity()
        // for (let x = 0; x < width; x++) {
        //     for (let y = 0; y < height; y++) {
        //         let index = (x + y*width) * 4
        //         brightness = map(noise(x/100, y/100), 0, 1, 0, 255)
        //         //print(brightness)
        //         pixels[index+0] = (brightness)
        //         pixels[index+1] = (brightness)
        //         pixels[index+2] = (brightness)
        //         pixels[index+3] = 255
        //     }
        // }
        // updatePixels()
    //noLoop()
}