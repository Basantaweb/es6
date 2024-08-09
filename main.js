// // Import the App component
// import App from './App.js';

// // Render the App component into the DOM
// ReactDOM.render(App(), document.getElementById('root'));

// Even and odd number of times
let frist_number = Number(prompt("Number"));
if(frist_number%2==0) { 
    console.log(frist_number, "The number is even");
} else {
    console.log(frist_number, "The number is odd");
}

// Fibonacci sequence

let second_number = Number(prompt("Number"));
let fibonacci_sequence = [0, 1];
while (fibonacci_sequence[fibonacci_sequence.length - 1] + fibonacci_sequence[fibonacci_sequence.length - 2] <= second_number) {
    fibonacci_sequence.push(fibonacci_sequence[fibonacci_sequence.length - 1] + fibonacci_sequence[fibonacci_sequence.length - 2]);
}

console.log("Fibonacci sequence till", second_number, "is:", fibonacci_sequence);

// Palindrome check

let third_number = prompt("Number");
let reversed_number = third_number.split('').reverse().join('');
if(third_number === reversed_number) {
    console.log(third_number, "is a palindrome");
} else {
    console.log(third_number, "is not a palindrome");
}

// Factorial

let fourth_number = Number(prompt("Number"));
let factorial = 1;
for(let i = 1; i <= fourth_number; i++) {
    factorial *= i;
}

console.log("Factorial of", fourth_number, "is:", factorial);

// Prime number check

let fifth_number = Number(prompt("Number"));
let is_prime = true;
if(fifth_number <= 1) {
    is_prime = false;
} else {
    for(let i = 2; i < fifth_number; i++) {
        if(fifth_number % i === 0) {
            is_prime = false;
            break;
        }
    }
}

if(is_prime) {
    console.log(fifth_number, "is a prime number");
} else {
    console.log(fifth_number, "is not a prime number");
}

// Armstrong number check

let sixth_number = Number(prompt("Number"));
let number_of_digits = sixth_number.toString().length;
let sum = 0;
let temp = sixth_number;
while(temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, number_of_digits);
    temp = Math.floor(temp / 10);
}

if(sixth_number === sum) {
    console.log(sixth_number, "is an Armstrong number");
} else {
    console.log(sixth_number, "is not an Armstrong number");
}

// Fibonacci number check

let seventh_number = Number(prompt("Number"));
let fibonacci_check = false;
let a = 0, b = 1;
while(a < seventh_number) {
    let temp = a;
    a = b;
    b = temp + b;
    if(a === seventh_number) {
        fibonacci_check = true;
        break;
    }
}

if(fibonacci_check) {
    console.log(seventh_number, "is a Fibonacci number");
} else {
    console.log(seventh_number, "is not a Fibonacci number");
}

// Greatest common divisor

let eighth_number1 = Number(prompt("First number"));
let eighth_number2 = Number(prompt("Second number"));
let gcd = Math.abs(eighth_number1);

while(eighth_number2 !== 0) {
    let temp = eighth_number2;
    eighth_number2 = gcd % eighth_number2;
    gcd = temp;
}

console.log("GCD of", eighth_number1, "and", eighth_number2, "is:", gcd);

// Least common multiple

let ninth_number1 = Number(prompt("First number"));
let ninth_number2 = Number(prompt("Second number"));
let lcm = (ninth_number1 * ninth_number2) / gcd;

console.log("LCM of", ninth_number1, "and", ninth_number2, "is:", lcm);

// Prime factorization

let tenth_number = Number(prompt("Number"));
let factors = [];

for(let i = 2; i <= tenth_number; i++) {
    while(tenth_number % i === 0) {
        factors.push(i);
        tenth_number /= i;
    }
}

console.log("Prime factors of", tenth_number, "are:", factors);

// Largest prime number

let largest_prime = 0;
for(let i = 2; i <= tenth_number; i++) {
    if(tenth_number % i === 0) {
        let is_prime = true;
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                is_prime = false;
                break;
            }
        }
        if(is_prime) {
            largest_prime = i;
            break;
        }
    }
}

console.log("Largest prime factor of", tenth_number, "is:", largest_prime);

// Smallest prime number



let smallest_prime = 0;

for(let i = 2; i <= tenth_number; i++) {
    if(tenth_number % i === 0) {
        let is_prime = true;
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                is_prime = false;
                break;
            }
        }
        if(is_prime) {
            smallest_prime = i;
            break;
        }
    }
}

console.log("Smallest prime factor of", tenth_number, "is:", smallest_prime);

// Catalan number