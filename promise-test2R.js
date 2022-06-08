'use strict';

/* promise-test2.js の書き換え */

/* 
    Promise オブジェクトの then 関数では、 
    return 句で 結果や Promise オブジェクトを返すことで then 関数を続けて呼び出せる。

    この手法を「Promiseチェイン」と呼ぶ。
*/
new Promise((resolve) => {
    const nowDate = new Date();
    resolve(nowDate);
})
    .then((v1) => {

        //v1は現在の時刻情報
        const monthAndDate = {
            month: v1.getMonth(),
            date: v1.getDate()
        }
        return new Promise((resolve) => {
            resolve(monthAndDate);
        });
    })
    .then((v2) => {

        //v2は日付の情報
        const text = `今日は${v2.month + 1}月${v2.date}日です。`;
        return new Promise((resolve) => {
            resolve(text);
        });
    })
    .then((v3) => {

        //v3は日付を示す文章
        console.log(v3);  //今日の日付に関する文章が出力される
    });
