const colours = require('./colours');
const width = 72;

module.exports.render = ({players}, pixels) => {
    players.forEach(player => {
        const colour = player.alive ? colours[player.id] : [128,128,128];
        for (let c = 0; c < 3; ++c) {
            pixels[(((player.y * width) + player.x) * 3) + c] = colour[c];
        }
    });
};
