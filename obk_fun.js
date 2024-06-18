// Өгөгдсөн 2 тооны ихийг олох функц бич.
function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}
// Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function findIndex(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}
	return -1;
}
// Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function findCharIndex(str, char) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			return i;
		}
	}
	return -1;
}
// Өгөгдсөн array - ийн дундажыг олох функц бич.
function average(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}
// Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// Өгөгдсөн тоо анхны эсэхийг олох функц бич.
function isPrime(num) {
	for (let i = 2; i < num / 2; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
// Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12  output: false
function isItPalindrome(num) {
	let reversed = 0;
	let originalNum = num;
	while (n > 0) {
		let digit = num % 10;
		reversed = reversed * 10 + digit;
		n = (num - digit) / 10;
	}
	if (originalNum === reversed) {
		return true;
	} else {
		return false;
	}
}
// Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh
function isItPalindrome(str) {
	let reversedstr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedstr += str[i];
	}
	return reversedstr;
}
