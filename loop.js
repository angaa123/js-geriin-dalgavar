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
n = 5;
while (n > 1) {
	fact *= n;
	n--;
}
console.log("The factorial is:", fact);
// 7 Find the sum of the all digits in the given number
sum = 0;
n = 1234567;
let digit = 0;
while (n !== 0) {
	digit = n % 10;
	sum += digit;
	n = (n - digit) / 10;
}
console.log("The sum of the all digits is:", sum);

// 8 Find the sum of the even digits in the given number
sum = 0;
n = 1234567;
while (n !== 0) {
	digit = n % 10;
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

//aingid
let too = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < too.length; i++) {
	console.log(too[i]);
}
//1
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log(
	"ehniih,",
	fruits[0],
	"suulchiinh",
	fruits[fruits.length - 1],
	"3dahi",
	fruits[2]
);
// //2
// array: [5, 6, 4, 12, 19, 121, 1, 7,  9, 63]
// Хэдэн ширхэг сондгой тоо байгаа вэ?
// Хэдэн ширхэг тэгш тоо байгаа вэ?
let numbers = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let oddCount = 0;
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		evenCount++;
	} else {
		oddCount++;
	}
}
console.log("array", numbers);
console.log("Odd numbers:", oddCount);
console.log("Even numbers:", evenCount);
//3 arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]
// Array iin length iin oloh
// Array доторх тоонуудын нийлбэрийг ол.
// Array доторх тоонуудын average ол.
// Array доторх тоонуудын нийлбэрийг ол.
// Array доторх тэгш тоонуудын нийлбэрийг ол.
// Array доторх сондгой тоонуудын үржвэрийг ол.
// Хамгийн их тоог ол.
// Хамгийн бага тоог ол.

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log("array:", arrayOfNumbers);
// 3.1 Array iin length iin oloh
console.log("Length of the array:", arrayOfNumbers.length);
// 3.2 Array доторх тоонуудын нийлбэрийг ол.
sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
	sum += arrayOfNumbers[i];
}
console.log("Sum of the numbers in the array:", sum);
// 3.3 Array доторх тоонуудын average ол.
let average = sum / arrayOfNumbers.length;
console.log("Average of the numbers in the array:", average);
// 3.4 Array доторх тэгш тоонуудын нийлбэрийг ол.
let evenSum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
	if (arrayOfNumbers[i] % 2 === 0) {
		evenSum += arrayOfNumbers[i];
	}
}
console.log("Sum of the even numbers in the array:", evenSum);
// 3.5Array доторх сондгой тоонуудын үржвэрийг ол.
let oddProduct = 1;
for (let i = 0; i < arrayOfNumbers.length; i++) {
	if (arrayOfNumbers[i] % 2 !== 0) {
		oddProduct *= arrayOfNumbers[i];
	}
}
console.log("Product of the odd numbers in the array:", oddProduct);
// 3.6 Хамгийн их тоог ол.
let maxNumber = arrayOfNumbers[0];
for (let i = 1; i < arrayOfNumbers.length; i++) {
	if (arrayOfNumbers[i] > maxNumber) {
		maxNumber = arrayOfNumbers[i];
	}
}
console.log("Maximum number in the array:", maxNumber);
