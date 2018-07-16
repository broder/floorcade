const { components } = require('./directions');
const log = require ('../../log');

module.exports.init = ({width, height}) => {
    var startingPositions = [{x: 20, y: 20}];
    return startingPositions.map(({x, y}, index) => new Player({
        id: index + 1,
        x: x,
        y: y,
        dx: 0,
        dy: 0
    }));
};

class Player {
    constructor({id, x, y, dx, dy}) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.alive = true;
        this.nextDirection = [];
        this.score = {
            place: 0,
            kills: 0
        }
    }

    updateDirection(direction) {
        log(direction)
        if (direction === 0) {
            log('ZERO')
            return;
        }
        const len = this.nextDirection.length;
        if (len > 1) {
            if (this.nextDirection[len - 1] === (direction | this.nextDirection[len - 2])) {
                this.nextDirection.pop();
            }
        }
        this.nextDirection.push(direction);
    }

    updatePosition() {
        if (this.alive) {
            this.x += this.dx;
            this.y += this.dy;
            log({dx: this.dx, dy: this.dy})
        }
    }

    checkCollisions() {
        let newDirection = components(this.nextDirection.shift());
        // console.error(newDirection)
        while (newDirection && newDirection.dx === -this.dx && newDirection.dy === -this.dy) {
            newDirection = components(this.nextDirection.shift());
        }
        if (newDirection) {
            this.dx = newDirection.dx;
            this.dy = newDirection.dy;
        }        
        return [];
    }
}
