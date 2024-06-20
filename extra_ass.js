//Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }
let arrayOrignal = [1, 2, 3, 4, 5];
function findMinMaxAvg(arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}
	let avg = sum / arr.length;
	return { min: min, max: max, avg: avg };
}
console.log(findMinMaxAvg(arrayOrignal)); // { min: 1, max: 5, avg: 3 }
// Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih.
const orders = [
	{
		orderId: 1,
		items: [
			{ itemName: "Apple", price: 1 },
			{ itemName: "Banana", price: 2 },
		],
	},
	{
		orderId: 2,
		items: [
			{ itemName: "Orange", price: 1.5 },
			{ itemName: "Grapes", price: 3 },
		],
	},
];
function calculateTotalSales(orders) {
	let totalSales = 0;
	for (let i = 0; i < orders.length; i++) {
		let order = orders[i];
		for (let j = 0; j < order.items.length; j++) {
			let item = order.items[j];
			totalSales += item.price;
		}
	}
	return totalSales;
}
console.log("uudur niit orson orlogo:", calculateTotalSales(orders));
// Ugugdsun array iin anhnii utagtai bolon квадрат, куб iin oldog function bichih. jishee ni: input [1, 2, 3, 4, 5]
let toon_array = [1, 23, 5, 3, 2, 1, 4, 6];
function cube_kavdrat_oloh(arr) {
	let out_array = [];
	for (let i = 0; i < arr.length; i++) {
		let item = { original: 0, square: 0, cube: 0 };
		item.original = arr[i];
		item.square = arr[i] * arr[i];
		item.cube = arr[i] * arr[i] * arr[i];
		out_array.push(item);
	}
	return out_array;
}
console.log(cube_kavdrat_oloh(toon_array));

// Ugugdsun company iin data aas hamgiin ih tsalintai ajiltang oldog function bichih.
const company = {
	name: "TechCorp",
	address: "123 Silicon Valley",
	employees: [
		{ name: "Alice", salary: 90000 },
		{ name: "Bob", salary: 120000 },
		{ name: "Charlie", salary: 110000 },
	],
};
function highestPaidEmployee(company) {
	let highestPaidEmployee = company.employees[0];
	for (let i = 1; i < company.employees.length; i++) {
		let employee = company.employees[i];
		if (employee.salary > highestPaidEmployee.salary) {
			highestPaidEmployee = employee;
		}
	}
	return highestPaidEmployee;
}
console.log(highestPaidEmployee(company));
