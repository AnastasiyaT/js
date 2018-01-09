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
var x = [ 1, 1 ];
var y = [ 1, 4 ];
var z = [ 3, 1 ];

//Найдём стороны тр-ка.  (X2-X1)²+(Y2-Y1)²
 var xy = ((x[1]-x[0])*(x[1]-x[0]))+((y[1]-y[0])*(y[1]-y[0]));
 var yz = ((y[1]-y[0])*(y[1]-y[0]))+((z[1]-z[0])*(z[1]-z[0]));
 var zx = ((z[1]-z[0])*(z[1]-z[0]))+((x[1]-x[0])*(x[1]-x[0]));

 console.log("Сторона XY равна", xy, "²");
 console.log("Сторона YZ равна", yz, "²");
 console.log("Сторона XZ равна", zx, "²");

 if ((xy == yz + zx) || (yz == xy + zx) || (zx == xy + yz)) {
 	console.log("Треугольник является прямоугольным.");
 } else {
 	console.log("Треугольник не является прямоугольным.");
 };

console.log("Задача 5")
/*Создать массив из чисел. Выполнить сортировку 
массива по возрастанию методом пузырька. 
Запрещено использовать стандартные методы.*/

    var arrNumber = [1, 6, 9, 2, 5, 25, 3];
    console.log("Массив", arrNumber);
    var i, i2;
    var sort;
    for (i = arrNumber.length - 1; i > 1; i--) {
        sort = arrNumber[i];

        for (i2 = i; i2 > 1; i2--) {

            if (sort < arrNumber[i2-1]) {
                arrNumber[i] = arrNumber[i2-1];
                arrNumber[i2-1] = sort;
                sort = arrNumber[i];
            }
        }
    }
    console.log('Массив после сортировки', arrNumber);

console.log("Задача 5. Массив 2-й способ")
    var newArray = [5, 0, 9, 25, 8, 12],
    j, k, m, n = newArray.length;

    console.log("Исходный массив", newArray);
    console.log("Количество элементов в массиве: " + n);

    for (j = 0; j < n ; j++){//повторяем  сортировку n раз 
        for (m = 0; m < n - 1; m++){// сортировка
            if (newArray[m] > newArray[m + 1]) {//сравниваем рядом стоящие элементы массива
                k = newArray[m];//сохраняем в новую переменную если элемент больше
                newArray[m] = newArray[m + 1];// меняем местами
                newArray[m + 1] = k;
            }
        }
    console.log("Новый массив " + newArray);
    }