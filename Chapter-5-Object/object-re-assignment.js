// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “Delhi”.
// Add a new property country and set it to the India.
const person = {
    name: 'sahl salam',
    age: 24,
    city: 'Nawada'
}
console.log(`Old Value of Person =`, person);
person.city = "Delhi"
console.log(`New Value of Person's City after editing city =`, person.city);
person.country = 'India';
console.log(`New Value of Person after adding country =`, person);