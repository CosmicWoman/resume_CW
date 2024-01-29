const fs = require('node-fs');
const getDb = require('../server');

const db = getDb();

fs.mkdir('./build/static/server', () => {
    for (let [key, value] of Object.entries(db)) {
        fs.writeFile(
            `./build/static/server/${key}.json`,
            JSON.stringify(value),
            (err) => {
                if (err) throw err;
            }
        );
    }
});