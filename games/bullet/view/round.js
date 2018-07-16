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
        // Make the spaceship a 3x3 blob. So majestic. Wowe.
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                renderColoursAtPixel(colour, player.x + dx, player.y + dy);
            }   
        }
    });
};
