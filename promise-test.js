'use strict';

/* 
    変数waitPromiseには、new Promise によって、Promiseオブジェクトが格納される。
    Promiseオブジェクトには引数として、resolveとrejectが引数となるような関数を渡している
    resolveは処理が正常終了した時、rejectは処理でエラーが起きた時に呼ばれる。（rejectは省略可）
    Promise内でどちらかが呼ばれると、Promiseの処理は終わる。
*/
const waitPromise = new Promise((resolve, reject) => {

    
    //setTimeout関数...コールバック関数とミリ秒を渡すことで、渡したミリ秒後にコールバック関数が呼ぶ。
    setTimeout(() => resolve(), 1000);
});

/* 
    Promiseオブジェクトに備わっているthenメソッドにコールバック関数としてconsole.logを渡すことで、
    Promiseの処理後hogeが出力される。
*/
waitPromise.then(() => console.log('hoge'));
console.log('fuga');