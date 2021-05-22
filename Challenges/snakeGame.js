const gridSize = 10
let blocks = []
let score = 0
let initGameSpeed = 10
let gameSpeed = initGameSpeed
let commands = []
let blockColor
let shouldClear = true

let s

function setup() {
    blockColor = color('#AAAAAA')
    createCanvas(400, 400)
    background(0)
    frameRate(gameSpeed)
    s = new Snake()
    food = generateFood()
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
    blocks.push(createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize))
}

function draw() {
    if (shouldClear) {
        Clear()
        shouldClear = false
    }
    fill(color('#FF0000'))
    rect(food.x, food.y, gridSize)
    fill(blockColor)
    for (let block of blocks) {
        rect(block.x, block.y, gridSize)
    }
    s.update()
    s.show()
}

function keyPressed() {
    commands.push([keyCode, key])
}

function handleCommand() {
    if (commands.length == 0)
        return

    let command = commands.pop()
    let arrow = command[0]
    let alphabet = command[1]
    if (arrow == RIGHT_ARROW || alphabet == 'l') {
        s.dir(1, 0)
    }
    if (arrow == LEFT_ARROW || alphabet == 'j') {
        s.dir(-1, 0)
    }
    if (arrow == DOWN_ARROW || alphabet == 'k') {
        s.dir(0, 1)
    }
    if (arrow == UP_ARROW || alphabet == 'i') {
        s.dir(0, -1)
    }

}

function Clear() {
    fill(color('#666666'))
    for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
            rect(x, y, gridSize)
        }
    }
}

function generateFood() {
    let food = createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize)
    for (let block of blocks) {
        if ((abs(block.x - food.x) < 20) && abs(block.y - food.y) < 20) {
            console.log('Food overlap!')
            food = generateFood()
            break;
        }
    }
    return food
}