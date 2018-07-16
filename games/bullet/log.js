const fs = require('fs');

module.exports = (msg) => {
	fs.appendFileSync('log.txt', JSON.stringify(msg) + '\n');
}