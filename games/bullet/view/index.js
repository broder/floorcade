const round = require('./round');

module.exports.init = ({width, height}) => {
    const pixels = new Uint8Array(width * height * 3);

    const render = state => {
        round.render(state.round, pixels);
        return pixels;
    }

    return {
        render
    }
}
