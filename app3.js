'use strict';

/* app2.js をpromiseチェインを使って書き換え */
/* 
    I/Oは同期処理になるが、 書き込み順は上手くいかず、
    あああ...あああいいい....いいいううう...うううえええ...えええおおお...おおお 
    と書き込まれる。
*/
const fs = require('fs');
const fileName = './test3.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

for (let count = 0; count < 500; count++) {
    appendFilePromise(fileName, 'あ')
        .then(() => {
        return appendFilePromise(fileName, 'い');
    })
    .then(() => {
        return appendFilePromise(fileName, 'う');
    })
    .then(() => {
        return appendFilePromise(fileName, 'え');
    })
    .then(() => {
        return appendFilePromise(fileName, 'お');
    })
    .then(() => {
        return appendFilePromise(fileName, '\n');
    });
}