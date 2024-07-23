// Normal function...
three();
two();
one();
function one() {
    console.log('function one...1');
}
function two() {
    console.log('function two...2');
}

function three() {
    console.log('function three...3');
}

// Now using call back hell
function One(callback) {
    setTimeout(() => {
        console.log('function one');
        callback();
    }

        , 1800)

}
function Two(callback) {
    setTimeout(() => {
        console.log('function Two');
        callback();
    }

        , 1200)

}
function Three(callback) {
    setTimeout(() => {
        console.log('function Three');
        callback();
    }

        , 800)

}
Three(() => {
    Two(() => {
        One(() => {
            setTimeout(() => {
                console.log('finally done...');
            }, 2300);

        })

    })

})
// One(
//     Two(
//         Three(
//             console.log('Done......')
//         )
//     )
// );
