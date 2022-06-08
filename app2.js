'use strict';

/* app.js のI/Oが同期処理されるように書き換え */

/* I/Oを同期処理させることにより、「あいうえお」が順序よく書き込まれる */

const fs = require('fs');
const fileName = './test2.txt';
for (let count = 0; count < 500; count++) {
    fs.appendFileSync(fileName, 'あ', 'utf8');
    fs.appendFileSync(fileName, 'い', 'utf8');
    fs.appendFileSync(fileName, 'う', 'utf8');
    fs.appendFileSync(fileName, 'え', 'utf8');
    fs.appendFileSync(fileName, 'お', 'utf8');
    fs.appendFileSync(fileName, '\n', 'utf8');
}