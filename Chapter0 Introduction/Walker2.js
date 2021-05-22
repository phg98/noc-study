class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.grid = new Array(400)
        for (let i = 0; i < 400; i++) {
            this.grid[i] = new Array(400)
            this.grid[i].forEach(e => {
               this.grid[i] = 0 
            });
        }
    }

    update() {
        let offset, next
        let inc = 0
        do {
            if (inc > 10) break
            else inc++
            inc++
            offset = createVector(floor(random(-1, 2)), floor(random(-1, 2)))
            print(offset.x, offset.y)
            next = createVector(0,0)
            next.add(this.pos)
            next.add(offset)
        } while (this.grid[next.x][next.y] === 1) 
        this.pos.add(offset)
        this.grid[this.pos.x][this.pos.y] = 1
    }

    show() {
        circle(this.pos.x, this.pos.y, 1)
    }
}