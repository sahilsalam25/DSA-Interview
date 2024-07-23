// const words = ['hello', 'world', 'javascript', 'filter'];
// const longWords = words.filter(word => {
//     if (word.length >= 5) {
//         // console.table(word)
//     }

// });
// console.log(longWords); // Output: ['javascript', 'filter']
// const words = ['apple', 'ssss', 'banana', 'kiwi', 'orange', 'grape'];
// const filteredWords = words.filter(word => word.includes('a' && 's' && 'i' && 's'));
// console.log(filteredWords); // Output: ['kiwi', 'grape']
// console.log(includes);

// const words = ['apple', 'banana', 'kiwi', 'orange', 'boy', 'grape'];
// const startsWithB = words.filter(word => word.endsWith('e'));
// console.log(startsWithB); // Output: ['banana']
const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Charlie' },
    { id: 3, name: 'Alice' }
];
console.log(
    students.findIndex((find) => {
        if (find.id == students[0].id) {
            // console.log('Stu---', students[0].id);
            // console.log('---', find);
        }

    })
);

const uniqueStudents = students.filter((student, index, self) => {
    // console.log('student -', student);
    // console.log('index -', index);
    // console.log('self -', self);
    // self.findIndex((s) =>
    // if(s.id== index)
    // console.log(s.id, index));
    // s.id === student.id) === index;
}
);
// console.log(uniqueStudents); // Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Alice' }]
const words = ['apple', '', 'banana', '    ', '  k i w i ', 'orange', ''];
const nonEmptyWords = words.filter(word => word.trim() !== '');
// console.log(nonEmptyWords); // Output: ['apple', 'banana', 'kiwi', 'orange']
// console.log(words[4].trim());
const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = numbers.filter((number, index, array) => {
    array.indexOf(number) === index;
    console.log('Array ---', array.indexOf(5));
});

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
