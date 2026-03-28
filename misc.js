// Part 1 Exercises (use Copilot inline suggestions)

// Exercise 1: Comment-Driven Development
// Function to calculate the factorial of a number
// !5 = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}


// Exercise 2: Array Operations
const numbers = [1, 2, 3, 4, 5];
//filter even numbers from the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Filter even numbers
const evenNumbers1 = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// Exercise 3: Function from Signature
// Type this on a new line and press Enter:
// function reverseString(str)
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello, World!")); // Output: !dlroW ,olleH


// Exercise 4: Process User Data 
const users = [
    { name: "Alice", age: 30, hobbies: ["reading", "yoga"] },
    { name: "Bob", age: 25, hobbies: ["golf"] },
    { name: "Charlie", age: 35, hobbies: ["coding", "hiking"] }
];

// Use map to create an array of user names
const userNames = users.map(user => user.name);
console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]

// Use flatMap to create a flat array of all hobbies
const allHobbies = users.flatMap(user => user.hobbies);
console.log(allHobbies); // Output: ["reading", "yoga", "golf", "coding", "hiking"]

// Use filter to create an array of users older than 30
const usersOlderThan30 = users.filter(user => user.age > 30);
console.log(usersOlderThan30); // Output: [{ name: "Charlie", age: 35, hobbies: ["coding", "hiking"] }]

// Use reduce to calculate the average age of the users
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(averageAge); // Output: 30  
    