// 1 write 1 to 10 in console.log use for loop
for(let i=1; i<=10; i++){
    console.log(i);
}

// 2 write all odd numbers between 1 and 10 in console.log use for loop
console.log("Odd Numbers:");
for(let j=1; j<=10; j+=2){
    console.log(j);
}

// 3 write all even numbers between 1 and 10 in console.log use for loop
console.log("even numbers")
for(let k=2; k<=10; k+=2){
    console.log(k); 
}

// 4 add all natural numbers 1 to 100
let sum = 0;
for(let l=1; l<=100; l++){
    sum += l;
}
console.log("The sum of natural numbers from 1 to 100 is:", sum);

// 5 Write a program to print natural numbers up to N and find their sum
sum = 0;
let n = 4;
for(let i=1; i<=n; i++) {
    sum += i;
}
console.log('The sum of the natural numbers is:', sum);

// 6 Write a program to find the factorial of N numbers use wile loop
let fact = 1;
while(n > 1) {
    fact *= n;
    n--;
}
console.log('The factorial is:', fact);

// 7 Find the sum of the all digits in the given number
sum = 0;
let num = 1234567;
while(num > 0) {
    let digit = num % 10; // Get the last digit of the number.
    sum += digit; // Add it to the sum.
    num =(num - digit)/10; // Remove the last digit from the number.
}
console.log('The sum of the all digits is:', sum);

// 8 Find the sum of the even digits in the given number
sum = 0;
num = 1234567;
while(num > 0) {
    let digit = num % 10; // Get the last digit of the number.
    if(digit % 2 === 0) { // Check if the digit is even.
        sum += digit; // Add it to the sum.
    }
    num =(num - digit)/10; // Remove the last digit from the number.
}
console.log('The sum of the even digits is:', sum);

// 9 Write a program to print odd numbers up to N and find their sum
n=89;
sum = 0;
while(n > 0) {
    if(n % 2 !== 0) { // Check if n is odd.
        console.log(n); // Print the odd number.
        sum += n; // Add it to the sum.
    }
    n--; 
}
console.log('The sum of the odd digits is:', sum);
// 10 Write a program to print even numbers up to N and find their sum
n=89;
sum = 0;
while(n > 0) {
    if(n % 2 === 0) { // Check if n is even.
        console.log(n); // Print the even number.
        sum += n; // Add it to the sum.
    }
    n--; 
}
console.log("The sum of the even digits is:", sum);
// 11 Write a program to print the inverse of the given positive number eg input: 123 output: 321
let reversed = 0;
num = 8934;
let  originalNum = num;
while(num > 0) {
    let digit = num % 10; // Get the last digit of the number.
    reversed = (reversed * 10) + digit; // Append it to the reversed number.
    num = (num-digit) / 10; // Remove the last digit from the number.
}
console.log('The inverse of', originalNum , 'is:', reversed);