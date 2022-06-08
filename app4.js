'use strict';

/* app3.js をasync/awaitを使って書き換え（I/Oは同期処理） */

const fs = require('fs');
const fileName = './test4.txt';

function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
}

/* 
    async function で main が非同期関数であることを宣言することで、
    main 関数内で await 演算子が使えるようになる。
    （厳密には異なるが）結果として async function は Promise オブジェクトを返す。
*/
async function main() {
    for (let count = 0; count < 500; count++) {

        /* 
            appendFilePromise を await 演算子を用いて処理が完了するのを待機している。
            await 演算子によって、 Promise の完了を待ってから次の行の処理へ移るようになる。
        */
        await appendFilePromise(fileName, 'あ');
        await appendFilePromise(fileName, 'い');
        await appendFilePromise(fileName, 'う');
        await appendFilePromise(fileName, 'え');
        await appendFilePromise(fileName, 'お');
        await appendFilePromise(fileName, '\n');
    }
}

main();