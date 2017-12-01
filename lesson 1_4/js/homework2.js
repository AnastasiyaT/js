'use strict';
// Задача 1
console.log("Задача 1.")
var tar = 51;
var fairy = 7;

console.log("Моющего средства:", fairy);
console.log("Тарелок:", tar);

while (tar>0 && fairy>0) {
	console.log("После мытья тарелки. fairy=", fairy = fairy - 0.5);
		tar--;  
} 

if (tar === 0) {
	console.log("Осталось моющего средства:", fairy);
	console.log("Осталось 0 тарелок");
}	else {
	console.log("Осталось 0 моющего средства.");
	console.log("Осталось тарелок", tar);
}
//Задача 2.
console.log("Задача 2.")

var pound = 1;
var kg = 0.454;

while (pound <11) {
	console.log(pound, "Фунт =", kg, "Килограмм");
		pound++; kg = kg + 0.454;
}


//Задание 3 join, slice, indexOf/lastIndexOf, concat.
console.log("Задача 3")

console.log("join");
var arrJoin = ['Север', 'Юг', 'Запад', 'Восток'];
var join = arrJoin.join(', ');
console.log(arrJoin);
console.log(join);

console.log("slice");
var arr1 = ['Один', 'Два', 'Три', 'Четыре', 'Пять']
var arr2 = arr1.slice(0, 2); //вырежет три четыре пять
console.log('Массив 1', arr1);
console.log('Массив 2', arr2);

console.log("indexOf/lastIndexOf");
var arr3 = ['Утро', 'День', 'Вечер', 'Ночер', 'Ночь']
var Index3 = arr3.indexOf('Вечер'); //выведет 2, перебор массива
console.log('indexOf от arr3', Index3);

console.log("метод concat"); //создает новый массив? в который копирует элементы из предыдущего
var arrConcat = [1, 2, 3, 4];
var newArr = arrConcat.concat('5', '6');
console.log('arrConcat',arrConcat);
console.log('newArr', newArr);


console.log("Задача 4")


console.log("Задача 5")



