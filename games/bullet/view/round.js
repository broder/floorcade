const log = require('../log');

const colours = require('./colours');

module.exports.render = ({players}, pixels, {width, height}) => {
    players.forEach(player => {
        const colour = player.alive ? colours[player.id] : [128,128,128];
        for (let c = 0; c < 3; ++c) {
            const target = (((player.y * width) + player.x) * 3) + c;
            pixels[target] = colour[c];
        }
    });
};
