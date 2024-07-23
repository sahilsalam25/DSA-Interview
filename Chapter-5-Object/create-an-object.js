// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name

const car = {
    name: 'honda',
    model: 255,
    color: 'black'
}
console.log(`Old car`, car);
console.log(`Car's Name =`, car.name);
console.log(`Car's model =`, car.model);
car.name = 'Mecedez Benz'
car.model = '1250'
console.log(`new car`, car);
console.log(`Car's Name =`, car.name);
console.log(`Car's color =`, car.model);
car.color = 'sky blue'
console.log(`Car's color =`, car.color);
// Below code will give an error because we cant assign with const datatype---
// TypeError: Assignment to constant variable
car = {
    hi: 'hello',
    hello: 'hi'
}
console.log(car);
console.log(car.hi);