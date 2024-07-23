const person = { name: 'John', age: 30, city: 'New York' };
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
const obj = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}
