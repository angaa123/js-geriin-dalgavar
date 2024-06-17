// myAge гэсэн хувьсагч зарлаж. 25 аас дээш байвал console дээр “above 25” гэж гаргах, 25 аас доош байвал console дээр “below 25” гэж гаргах
let myAge = 25;
if (myAge > 25) {
	console.log("above 25");
} else {
	console.log("below 25");
}
// n хувьсагчын утгын дагуу сондгой эсвэл тэгш олж хэвлэнэ. жишээ нь: n = 2 байвал it’s even number гэж console дээр гарж ирэх
let n = 2;
if (n % 2 == 0) {
	console.log("it's even number");
} else {
	console.log("it's odd number");
}
// if … else ашиглан 12, 45, 30 хамгийн их утгатай хувьсагчийг console дээр хэвлэнэ үү
let a = 12;
let b = 45;
let c = 30;
if (a > b && a > c) {
	console.log(a);
} else if (b > a && b > c) {
	console.log(b);
} else {
	console.log(c);
}
// if … else ашиглан 12, 45, 30 хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
a = 12;
b = 45;
c = 30;
if (a < b && a < c) {
	console.log(a);
} else if (b < a && b < c) {
	console.log(b);
} else {
	console.log(c);
}
// Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү. 2-р сарыг хаварт тооцно уу. Input: 3 output: Spring
let month = 3;
if (month == 12 || month == 1 || month == 2) {
	console.log("Winter");
} else if (month >= 3 && month <= 5) {
	console.log("Spring");
} else if (month >= 6 && month <= 8) {
	console.log("Summer");
} else if (month >= 9 && month <= 11) {
	console.log("Autumn");
} else {
	console.log("Invalid month");
}
// 4 н хувьсагч зарлан 85, 75, 96, 69 гэсэн тоон утга өгөх. Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол: 80-аас их тоонуудын нийлбэр - 181
let d = 85;
let e = 75;
let f = 96;
let g = 69;
let sum = 0;
if (d > 80) {
	sum += d;
}
if (e > 80) {
	sum += e;
}
if (f > 80) {
	sum += f;
}
if (g > 80) {
	sum += g;
}
console.log("Sum of numbers greater than 80: " + sum);
// 4 н хувьсагч зарлан 3, 7, 2, 4 гэсэн тоон утга өгөх.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоонуудын үржвэр - 24
d = 3;
e = 7;
f = 2;
g = 4;
let product = 1;
if (d < 5) {
	product *= d;
}
if (e < 5) {
	product *= e;
}
if (f < 5) {
	product *= f;
}
if (g < 5) {
	product *= g;
}
console.log("Product of numbers less than 5: " + product);

// Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// Бат - 67 оноо, Очир - 59 оноо авчээ
// Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
// a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
// b. Хэрвээ оноо 60 - 70 хооронд байвал - Хангалттай
// c. Хэрвээ оноо 70 - 80 хооронд байвал - Дунд
// d. Хэрвээ оноо 80 - 90 хооронд байвал - Сайн
// e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм
// Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.
let batScore = 67;
let ochirScore = 59;
let batGrade = "";
let ochirGrade = "";
if (batScore < 60) {
	batGrade = "Маш муу";
} else if (batScore >= 60 && batScore < 70) {
	batGrade = "Хангалттай";
} else if (batScore >= 70 && batScore < 80) {
	batGrade = "Дунд";
} else if (batScore >= 80 && batScore < 90) {
	batGrade = "Сайн";
} else {
	batGrade = "Маш сайн";
}
if (ochirScore < 60) {
	ochirGrade = "Маш муу";
} else if (ochirScore >= 60 && ochirScore < 70) {
	ochirGrade = "Хангалттай";
} else if (ochirScore >= 70 && ochirScore < 80) {
	ochirGrade = "Дунд";
} else if (ochirScore >= 80 && ochirScore < 90) {
	ochirGrade = "Сайн";
} else {
	ochirGrade = "Маш сайн";
}
console.log("Бат - " + batScore + " оноо - " + batGrade);
console.log("Очир - " + ochirScore + " оноо - " + ochirGrade);
// Tухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү. Input: 120, 33, 10, 12 output: 10
let input1 = [120, 33, 10, 12];
let min = input1[0];
for (let i = 1; i < input1.length; i++) {
	if (input1[i] < min) {
		min = input1[i];
	}
}
console.log(min);
// Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
let aTeamScore1 = [96, 108, 89];
let bTeamScore1 = [88, 91, 110];
let aTeamAvg = (aTeamScore1[0] + aTeamScore1[1] + aTeamScore1[2]) / 3;
let bTeamAvg = (bTeamScore1[0] + bTeamScore1[1] + bTeamScore1[2]) / 3;
console.log("A team avg: " + aTeamAvg);
console.log("B team avg: " + bTeamAvg);
// Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү. Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй.
if (aTeamAvg >= 100 && bTeamAvg >= 100) {
	if (aTeamAvg > bTeamAvg) {
		console.log("A team won");
	} else if (aTeamAvg < bTeamAvg) {
		console.log("B team won");
	} else {
		console.log("Draw");
	}
} else {
	console.log("No winner");
}
// 3 н хувьсагч зарлан height, age, hasAdult. Өндөр нь 140cm болон нас нь 10-ээс тэнцүү буюу дээш байвал дугуй унаж болно. Эсвэл hasAdult нь үнэн байвал дугуй унаж болно. Бусад нөхцөлд "not allowed to ride" гэсэн console гарна
let height = 140;
let age = 10;
let hasAdult = true;
if (height >= 140 && age >= 10) {
	console.log("Allowed to ride");
} else if (hasAdult) {
	console.log("Allowed to ride");
} else {
	console.log("Not allowed to ride");
}
// Өгөгдсөн 4 тооны 11-д хууваагддаггүй тоонуудынх нь нийлбэрийг ол. Input: 7 22 13 30 output: 50
let nuber1 = [7, 22, 13, 30];
sum = 0;
for (let i = 0; i < nuber1.length; i++) {
	if (nuber1[i] % 11 !== 0) {
		sum += nuber1[i];
	}
}
console.log(sum);
