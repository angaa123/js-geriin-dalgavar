// 1 write 1 to 10 in console.log use for loop
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// 2 write all odd numbers between 1 and 10 in console.log use for loop
console.log("Odd Numbers:");
for (let i = 1; i <= 10; i += 2) {
	console.log(i);
}

// 3 write all even numbers between 1 and 10 in console.log use for loop
console.log("even numbers");
for (let i = 2; i <= 10; i += 2) {
	console.log(i);
}

// 4 add all natural numbers 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum += i;
}
console.log("The sum of natural numbers from 1 to 100 is:", sum);

// 5 Write a program to print natural numbers up to N and find their sum
sum = 0;
let n = 4;
for (let i = 1; i <= n; i++) {
	sum += i;
}
console.log("The sum of the natural numbers is:", sum);

// 6 Write a program to find the factorial of N numbers use wile loop
let fact = 1;
while (n > 1) {
	fact *= n;
	n--;
}
console.log("The factorial is:", fact);

// 7 Find the sum of the all digits in the given number
sum = 0;
n = 1234567;
while (n > 0) {
	let digit = n % 10;
	sum += digit;
	n = (n - digit) / 10;
}
console.log("The sum of the all digits is:", sum);

// 8 Find the sum of the even digits in the given number
sum = 0;
n = 1234567;
while (n > 0) {
	let digit = n % 10;
	if (digit % 2 === 0) {
		sum += digit;
	}
	n = (n - digit) / 10;
}
console.log("The sum of the even digits is:", sum);

// 9 Write a program to print odd numbers up to N and find their sum
n = 89;
sum = 0;
while (n > 0) {
	if (n % 2 !== 0) {
		console.log(n);
		sum += n;
	}
	n--;
}
console.log("The sum of the odd digits is:", sum);
// 10 Write a program to print even numbers up to N and find their sum
n = 89;
sum = 0;
while (n > 0) {
	if (n % 2 === 0) {
		console.log(n);
		sum += n;
	}
	n--;
}
console.log("The sum of the even digits is:", sum);
// 11 Write a program to print the inverse of the given positive number eg input: 123 output: 321
let reversed = 0;
n = 8934;
let originalNum = n;
while (n > 0) {
	let digit = n % 10;
	reversed = reversed * 10 + digit;
	n = (n - digit) / 10;
}
console.log("The inverse of", originalNum, "is:", reversed);
