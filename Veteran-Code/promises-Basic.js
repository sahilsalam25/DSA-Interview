
// Demo-1
// let prom = new Promise((resolve, reject) => {
//     console.log('fetching data...');
//     console.log('res', resolve);
//     console.log('rej', reject);
//     // resolve('resolved...');
//     reject('error ....'); // after reject it will not execute the further code...
//     resolve('done...');
//     console.log('checking');
// })
// // prom();
//  console.log('---', prom);

// Demo-2
// function getData(userId, getNewData) {

//     console.log('fetching data.... wait');
//     return new Promise((resolve, reject) => {
//         // reject('error.....')
//         resolve('resolved.')
//         setTimeout(() => {
//             console.log('Data =', userId);
//             resolve('resolved.')
//             // reject('error.....')
//             if (getNewData) {
//                 getNewData();
//             }
//         }, 4000)

//     })
// }
// getData(1);
// let promise1 = getData(2);
// console.log('promise =', promise1);
// getData(2)

// Demo 3
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('fetching data...');
        reject('network error')
        resolve('success')
    })
    // demo -: // return new Promise((a, b) => {
    //     console.log('fetching data...');

    //     console.log('a =', a);
    //     console.log('b =', b);
    //     // a('success')
    //     b('error')
    // })
}

let result = getPromise();
console.log('Result.....', result);
result.then((result) => {
    console.log('resolve =', result);

})
result.catch((error) => {
    console.log('error =', error);
})

// demo // let res1 = getPromise().then((result) => {
//     console.log('result =', result);
// })
// console.log('promise =', res1);