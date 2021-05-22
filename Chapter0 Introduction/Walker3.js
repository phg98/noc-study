class ListWalker {
    constructor(x, y) {
        this.pos = createVector(x, y)
        this.body = []
    }

    isExists() {
        this.body.forEach(element => {
            if ((element.x == this.pos.x + this.offset.x) &&
                (element.y == this.pos.y + this.offset.y)) {
                    print('exists!')
                    return true
                }
        });
        print('Not exists!')
        return false
    }
    update() {
        let inc = 0
        do {
            if (inc > 100) {
                print('too many')
                exit()
            }
            else {
                print('inc=', inc)
                inc += 1
            }

            this.offset = createVector(floor(random(-1,2)), floor(random(-1,2)))
        } while (this.isExists())
        print('new added with inc = ', inc)
        this.pos.add(this.offset)
        this.body.push(this.pos)
        print('body lenght is ', this.body.length)
    }

    show() {
        circle(this.pos.x, this.pos.y, 1)
    }
}