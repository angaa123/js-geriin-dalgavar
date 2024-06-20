// Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]
function addToArray(arr, num) {
	arr.push(num);
	return arr;
}
console.log(addToArray([1, 2, 4], 5));
// Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]
function createArray(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr;
}
console.log(createArray(5));
// Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.
function calculateSumAndAverage() {
	let sum = 0;
	let count = 0;
	let num;
	let numStr = prompt("taslal aar tussgaarlan too oruul:");
	num = numStr.split(",");
	// console.log("ene too", num);
	for (let i = 0; i < num.length; i++) {
		num[i] = Number(num[i]);

		sum = sum + num[i];
		count++;
		// console.log("Sum:", sum);
		// console.log("count:", count);
	}
	let average = sum / count;
	return { outSum: sum, outAverage: average };
}
let result = calculateSumAndAverage();
console.log("Sum:", result.outSum);
console.log("Average:", result.outAverage);
// Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '
function capitalizeWords(str) {
	let words = str.split(" ");
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	return words.join(" ");
}
console.log(capitalizeWords("the quick brown fox"));

// Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
function reverseWords(arr) {
	let reversedArr = [];
	for (let i = 0; i < arr.length; i++) {
		let reversedWord = "";
		for (let j = arr[i].length - 1; j >= 0; j--) {
			reversedWord += arr[i][j];
		}
		reversedArr.push(reversedWord);
	}
	return reversedArr;
}
console.log(reverseWords(["hello", "world", "javascript", "array"]));
// Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
function checkKeyword(text, keyword) {
	return text.includes(keyword);
}
let text = "animal world";
let keyword = prompt("Ta keyword oruulna uu:");
let result1 = checkKeyword(text, keyword);
console.log(result1);

const data = [
	{
		productName: "Bakery",
		unitPrice: 5000,
		amount: 200,
		totalPrice: 500000,
		casherId: 1,
		date: "2022-11-01",
	},
	{
		productName: "Chocolate",
		unitPrice: 3000,
		amount: 18,
		totalPrice: 54.0,
		casherId: 1,
		date: "2022-11-01",
	},
	{
		productName: "Coffee",
		unitPrice: 1000,
		amount: 100,
		totalPrice: 100.0,
		casherId: 1,
		date: "2022-11-01",
	},
	{
		productName: "Tea",
		unitPrice: 700,
		amount: 150,
		totalPrice: 105.0,
		casherId: 1,
		date: "2022-11-01",
	},
	{
		productName: "Bakery",
		unitPrice: 5000,
		amount: 200,
		totalPrice: 500000,
		casherId: 2,
		date: "2022-11-01",
	},
];
// 1. Нийт борлуулалтын дүнг тооцоолох.
function calculateTotalSales(data) {
	let totalSales = 0;
	for (let i = 0; i < data.length; i++) {
		totalSales += data[i].totalPrice;
	}
	return totalSales;
}
console.log("Total Sales:", calculateTotalSales(data));
// 2. Нийт борлуулалтын тоог тооцоолох.
function calculateTotalItemsSold(data) {
	let totalItemsSold = 0;
	for (let i = 0; i < data.length; i++) {
		totalItemsSold += data[i].amount;
	}
	return totalItemsSold;
}
console.log("Total Items Sold:", calculateTotalItemsSold(data));
// Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
function getTop5Products(data) {
	for (let i = 0; i < data.length; i++) {
		for (let j = i + 1; j < data.length; j++) {
			if (data[i].totalPrice < data[j].totalPrice) {
				let temp = data[i];
				data[i] = data[j];
				data[j] = temp;
			}
		}
	}
	return data.slice(0, 5);
}
console.log("Top 5 Products:", getTop5Products(data));
//Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
function getBottom5Products(data) {
	for (let i = 0; i < data.length; i++) {
		for (let j = i + 1; j < data.length; j++) {
			if (data[i].amount > data[j].amount) {
				let temp = data[i];
				data[i] = data[j];
				data[j] = temp;
			}
		}
	}
	return data.slice(0, 5);
}
console.log("Bottom 5 Products:", getBottom5Products(data));
