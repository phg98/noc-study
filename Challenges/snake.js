class Snake {
    constructor() {
        this.x = 10
        this.y = 10
        this.speedX = 1
        this.speedY = 0
        this.body = []
        this.body.push([this.x, this.y])
        this.tail = {}
        this.tail.x = this.x
        this.tail.y = this.y
    }

    update() {
        handleCommand()
        this.x += this.speedX * gridSize
        if (this.x >= width)
            this.x = 0
        if (this.x < 0)
            this.x = width - (1 * gridSize)
        this.y += this.speedY * gridSize
        if (this.y >= height)
            this.y = 0
        if (this.y < 0)
            this.y = height - (1 * gridSize)
        this.body.push([this.x, this.y])

        if ((abs(this.x - food.x) < 1) && abs(this.y - food.y) < 1) {
            score += 10
            console.log('Score: ', score)
            document.getElementById("score").textContent="Score: "+score
            gameSpeed = initGameSpeed + score / 10
            frameRate(gameSpeed)
            food = generateFood()
            let block = createVector(floor(random(width / gridSize)) * gridSize, floor(random(height / gridSize)) * gridSize)
            blocks.push(block)
        }
        else {
            this.tail.x = this.body[0][0]
            this.tail.y = this.body[0][1]
            this.body.shift()
        }
        this.checkCrash()
    }

    show() {
        fill(color('#666666'))
        rect(this.tail.x, this.tail.y, gridSize)
        fill(255)
        rect(this.x, this.y, gridSize)
    }

    dir(x, y) {
        if ((this.speedX + x == 0) || (this.speedY + y == 0))
            return
        this.speedX = x
        this.speedY = y
    }

    checkCrash() {
        const head = this.body[this.body.length - 1]
        for (let e of this.body) {
            if (e != head) {
                if (abs(head[0] - e[0]) < 1 && abs(head[1] - e[1]) < 1) {
                    console.log('Crashed!')
                    this.body = []
                    this.body.push(head)
                    this.InitGame()
                    return
                }
            }
        }
        for (let block of blocks) {
            if (abs(head[0] - block.x) < 1 && abs(head[1] - block.y) < 1) {
                console.log('Block Crashed!')
                this.body = []
                this.body.push(head)
                this.InitGame()
                return
            }
        }
    }

    InitGame() {
        score = 0
        gameSpeed = initGameSpeed
        frameRate(gameSpeed)
        blocks = []
        shouldClear = true
    }
}
