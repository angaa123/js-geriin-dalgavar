// Өгөгдсөн 2 тооны ихийг олох функц бич.
console.log("working");
function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}
console.log("10 20 2 iin max n", max(10, 20));
// Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function findIndex(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}
	return -1;
}
console.log(
	"[1,2,3,4,5] d baigaa  3 iin inedx n :",
	findIndex([1, 2, 3, 4, 5], 3)
);
// Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.
function findCharIndex(str, char) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			return i;
		}
	}
	return -1;
}
console.log("l iin index n", findCharIndex("hello", "l"));
// Өгөгдсөн array - ийн дундажыг олох функц бич.
function average(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}
console.log([1, 2, 3, 4, 5], "dundaj n ", average([1, 2, 3, 4, 5]));
// Өгөгдсөн array - ийн нийлбэрийг олох функц бич.
function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log("sum = ", sum([1, 2, 3, 4, 5]));

// Өгөгдсөн тоо анхны эсэхийг олох функц бич.
function isPrime(num) {
	for (let i = 2; i < num / 2; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
let n = 11;
if (isPrime(n)) {
	console.log(n, "is a prime number");
} else {
	console.log(n, "is not a prime number");
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
n = 121;
if (isItPalindrome(n)) {
	console.log(n, "is a palindrome number");
} else {
	console.log(n, "is not a palindrome number");
}
// Ugugdsun string urvuulna gargah jishee ni: input: hello output: olleh
function isItPalindrome(str) {
	let reversedstr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedstr += str[i];
	}
	return reversedstr;
}
console.log("hello urvuulsen uldegdel", isItPalindrome("hello"));
//---------------------------
let students = [
	{
		name: "Сэд-Эрдэнэ",
		age: 19,
		gender: "male",
		points: 70,
	},
	{
		name: "Индра",
		age: 19,
		gender: "female",
		points: 50,
	},
	{
		name: "Хатнаа ",
		age: 21,
		gender: "male",
		points: 99,
	},
	{
		name: "Тэмүүлэн",
		age: 23,
		gender: "male",
		points: 55,
	},
	{
		name: "Намуун",
		age: 23,
		gender: "female",
		points: 85,
	},
];
// Эхний объектыг хэвлэж гаргах
console.log(students[0]);

// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
function countGender(students) {
	let maleCount = 0;
	let femaleCount = 0;
	for (let i = 0; i < students.length; i++) {
		if (students[i].gender === "male") {
			maleCount++;
		} else {
			femaleCount++;
		}
	}
	return { male: maleCount, female: femaleCount };
}
// Сурагчдын насны дунджийг олох функц бичих
function averageAge(students) {
	let sum = 0;
	for (let i = 0; i < students.length; i++) {
		sum += students[i].age;
	}
	return sum / students.length;
}
// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
function olderThan21(students) {
	let olderStudents = [];
	for (let i = 0; i < students.length; i++) {
		if (students[i].age >= 21) {
			olderStudents.push(students[i]);
		}
	}
	return olderStudents;
}
// 60-аас дээш оноо авсан cурагчдийг тоол
function countStudentsWithPointsAbove60(students) {
	let count = 0;
	for (let i = 0; i < students.length; i++) {
		if (students[i].points > 60) {
			count++;
		}
	}
	return count;
}
//buh funktsuudiig duudaj ashigla
console.log(countGender(students));
console.log(averageAge(students));
console.log(olderThan21(students));
console.log(countStudentsWithPointsAbove60(students));
