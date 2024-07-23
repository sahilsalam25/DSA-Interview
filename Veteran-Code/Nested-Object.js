// Creating a nested object representing a person with their details
const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    contact: {
        name: ['sahil', 'Abdul Salam', 'amir',
            {

                age: 24,
                // age: 54,
                demo_age: [1, 2, 3,
                    {
                        sahil_age: 25,
                        amir_age: 27
                    }
                ],


                // age: 26,

            }


        ],
        email: "john@example.com",
        phone: "123-456-7890"
    }
};
// console.log(person);
// city = Anytown
console.log(person.address.city);
// email
console.log(person.contact.email);
// name= sahil
console.log(person.contact.name);
// sahil age =24
console.log(person.contact.name[3].age);
// demo age = 2


console.log(person.contact.name[3].demo_age[1]);
// amir age= 27
console.log(person.contact.name[3].demo_age[3].amir_age);




// Accessing properties of the nested object
//   console.log(person.name); // Output: "John"
//   console.log(person.address.city); // Output: "Anytown"
//   console.log(person.contact.email); // Output: "john@example.com"






// Example-2
const student = {
    name: "Alice",
    age: 20,
    subjects: {
        mathematics: [80, 85, 90],
        science: [75, 80, 85],
        history: [70, 75, 80]
    }
};

// Accessing properties of the nested object
console.log(student.name); // Output: "Alice"
console.log(student.subjects.mathematics); // Output: [80, 85, 90]
console.log(student.subjects.science[1]); // Output: 80
// student subject marks
console.log(student.subjects);

// Example 3
const library = {
    name: "My Library",
    location: "City Center",
    address: {
        Name: 'Sahil Salam',
        city: 'Nawada',
        state: 'Bihar',
        pin: 805110,
        books:
            [
                {
                    title: "The Great Gatsby",
                    author: "F. Scott Fitzgerald",
                    genre: "Classic",
                    year: 1925
                },

                {
                    title: "To Kill a Mockingbird",
                    author: "Harper Lee",
                    genre: "Fiction",
                    year: 1960
                },
                {
                    title: "1984",
                    author: "George Orwell",
                    genre: "Dystopian",
                    year: 1949
                }
            ]
    }
};

// Accessing properties of the nested object
console.log(library.name); // Output: "My Library"
// Output: "Harper Lee"
console.log(library.address.books[1].author);
// console.log(library.books[1].author); // old output 
console.log(library.address.books.length); // Output: 3
// year 1949
console.log(library.address.books[2].year);
// console.log(library.books[2].year); // old output
// genre Classic
console.log(library['address']['books'][0]['genre']);
console.log(library.address.books[0].genre); // upper method is also same :
// console.log(library['books'][0].genre); // this is old not work
// Name = Sahil Salam
console.log(library['address'].Name);
