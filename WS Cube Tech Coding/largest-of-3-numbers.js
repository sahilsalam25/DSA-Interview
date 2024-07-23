let a = 185;
let b = 215;
let c = 20;
// console.log('---------');
if (a > b && a > c) {
    console.log(a, 'a is Largest');

}
else if (b > a && b > c) {
    console.log(b, 'b is Largest');

}
else {
    console.log(c, 'c is Largest');
}
console.log(Math.max(a, b, c));
