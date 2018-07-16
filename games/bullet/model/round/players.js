const { components } = require('./directions');

module.exports.init = ({width, height}) => {
    const offset = Math.round(Math.min(width / 4, height / 4));
    var startingPositions = [{x: 20, y: 20}];
    return startingPositions.map(({x, y}, index) => new Player({
        id: index + 1,
        x: Math.round(x * offset + width / 2),
        y: Math.round(y * offset + height / 2),
        dx: -x,
        dy: -y
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
        if (direction === 0) {
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
        }
    }

    checkCollisions() {
        return [];
    }
}
