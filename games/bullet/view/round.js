const log = require('../log');

const colours = require('./colours');
const width = 72;

module.exports.render = ({players}, pixels) => {
    players.forEach(player => {
        log({x: player.x, y: player.y})
        const colour = player.alive ? colours[player.id] : [128,128,128];
        for (let c = 0; c < 3; ++c) {
            pixels[(((player.y * width) + player.x)) + c] = colour[c];
            pixels[(((10 * width) + 15)) + c] = [128,128,128][c];
        }
    });
};
