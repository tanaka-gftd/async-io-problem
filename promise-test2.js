'use strict';

/* 
    Promise オブジェクトの実行結果を用いたいときは、resolve に以降の処理で使いたい値を引数として渡す。
    その値は then メソッドのコールバック関数の引数として利用できる。
*/
/* 
    最初の Promise で new Date() の結果を次の then に渡し、
    次の Promise ではそのうち日付の情報のみ抽出し、さらに次はそれを文章に整形したものを渡している。
    そして、最後に結果をコンソールに出力。

    コールバック関数を繰り返し記述し、コードの意味が分かりにくくなることを、俗に「コールバック地獄」と呼ぶ。
*/
new Promise((resolve) => {
    const nowDate = new Date();
    resolve(nowDate);
}).then((v1) => {

    //v1は現在の時刻情報
    new Promise((resolve) =>{
        const monthAndDate = {
            month: v1.getMonth(),
            date: v1.getDate()
        }
        resolve(monthAndDate);
    }).then((v2) => {

        //v2は日付の情報
        new Promise((resolve) =>{
            const text = `今日は${v2.month + 1}月${v2.date}日です。`;
            resolve(text);
        }).then((v3) => {
            //v3は日付を示す文章
            console.log(v3); //今日の日付に関する文章が出力される

        });
    });
});