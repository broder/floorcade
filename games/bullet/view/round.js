const log = require('../log');

const colours = require('./colours');

module.exports.render = ({players}, pixels, {width, height}) => {
    const renderColoursAtPixel = (rgb, x, y) => {
        for (let c = 0; c < 3; ++c) {
            const target = (((y * width) + x) * 3) + c;
            pixels[target] = rgb[c];
        }
    }
    players.forEach(player => {
        const colour = player.alive ? colours[player.id] : [128,128,128];
        renderColoursAtPixel(colour, player.x, player.y);
    });
};
