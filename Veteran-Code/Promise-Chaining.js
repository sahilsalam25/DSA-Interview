function asyncfunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data 1');
            resolve('successfully fetched.')
        }, 4000)
    })
}
function asyncfunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data 2');
            resolve('successfully fetched.')
        }, 4000)
    })
}
// let promise1 = asyncfunc1();
// console.log('---', promise1);
// let promise2 = asyncfunc2();
// Method -1  by storing function in variable
// console.log('fetching data 1 using Method 1.....');
// promise1.then((result) => {
//     console.log(result);
//     console.log('fetching data 2 using Method 2.....');
//     let promise2 = asyncfunc2();
//     promise2.then((result) => {
//         console.log(result);
//     })
// })
// // console.log('fetching data 2.....');
// // promise2.then((result) => {
//   //   console.log(result);
// //  })

// Method 2--- by directly calling .then in function...
// console.log('fetching data 1.....');
// asyncfunc1().then((result) => {
//     console.log(result);

//     console.log('fetching data 2.....');
//     asyncfunc2().then((result) => {
//         console.log(result);
//     })
// })

// Demo 3---
function getData(dataId) {
    // 2 sec
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data =', dataId);
            resolve('successfully fetched.')


        }, 2500);
    })

}
console.log('fetching data 1...');
getData(1)
    .then((result) => {
        console.log(result);
        console.log('fetching data 2....');
        return getData(2)
            .then((result) => {
                console.log(result);
                console.log('fetching data 3....');

                return getData(3)
                    .then((result) => {
                        console.log(result);
                        console.log('fetching data 4....');
                        return getData(4).then(() => {
                            console.log(result);
                        })
                    })
            })
    });
getData().catch((error) => {
    console.log('Error ?', error);
})