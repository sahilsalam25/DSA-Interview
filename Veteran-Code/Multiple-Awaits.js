// Multiple await Expressions
// You can use multiple await expressions to wait for several asynchronous operations to complete:


async function getMultipleData() {
    try {
        let [data1, data2] = await Promise.all([
            (await fetch('https://dummyjson.com/carts/2')).json(),
            (await fetch('https://dummyjson.com/carts/1')).json()

        ]);
        console.log("Data1:", data1);
        console.log('fetching Another data...');
        setTimeout(() => {

            console.log("Data2:", data2);
        }, 3500);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getMultipleData();
console.log('fetching Data... Wait');
// In this example, Promise.all is used to wait for both fetchData calls to resolve before proceeding.

// M-2 --- Using axios method
// async function getMultipleData() {
//     try {
//         let [data1, data2] = await Promise.all([
//             (await fetch('https://dummyjson.com/carts/2')).json(),
//             (await axios.get('https://dummyjson.com/carts/1')).data,
//         ]);
//         console.log("Data1:", data1);
//         console.log('fetching Another data...');
//         setTimeout(() => {
//             console.log("Data2:", data2);
//         }, 3500);

//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// getMultipleData();
// console.log('fetching Data... Wait');
