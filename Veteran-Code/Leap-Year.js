// let Year = 2024;

// if (Year % 4 == 0) {
//     console.log(Year, 'is a Leap Year');
// }
// else {
//     console.log(Year, 'is Not a Leap Year');
// }

// M2---
function isLeapYear(year) {
    if (year % 400 === 0) {
        console.log(" Input year:", year, "is a Leap Year");
    }
    else if (year % 4 === 0 && year % 100 !== 0) {
        console.log(" Input year:", year, "is a Leap Year");
    }

    else
        console.log(
            " Input year:",
            year,
            "is NOT a Leap Year"
        );
}

let inputYear = 2020;
isLeapYear(inputYear);
inputYear = 2023;
isLeapYear(inputYear);
isLeapYear(2001);
isLeapYear(2002);
isLeapYear(2004);

