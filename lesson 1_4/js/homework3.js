(function(){
'use strict'

/*1.Написать функцию calc(a, b, operator), которая в зависимости от оператора будет
 складывать, умножать, вычитать или делить. */

 console.log("%c%s", "color:red", "Задание 1");

function calc(a, b, operator) {
    switch(operator) {
    case '+': 
    	return a+b;    	
    case '-': 
    	return a-b;
    case '*': 
    	return a*b;
    case '/': 
    	if (b!== 0) {
    		return a/b;
    	} else {
    		return "На ноль делить нельзя."
    	}
    	// b == 0 ? console.log("На ноль делить нельзя") : a/b ;
  	}
}

var res = calc(5, 5, '*');

console.log(res);

//2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.

console.log("%c%s","color:blue;","Задание 2");


function summNums(n) {
    if (n < 10) {
        return n;
    } else {
        return n%10 + summNums((n-(n%10))/10);
    }
}
console.log(123%10 );
console.log(summNums(123));

console.log("%c%s","color:green;","Задание 3");
/*(на замыкание)
Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает
переданное число на указанный при карировании шаг.

Карирование в javascript - действие, в результате которого на выходе 
образуется функция, обладающая возможностью частичного применения.

Частичное применение, в свою очередь, это такая штука (функция), в 
результате которой образуется другая функция, в которой используются
 оставшиеся аргументу, не используемые в первой функции.*/

// function summa(x,y) {
//     var OldX = x;
//     var OldY = y;
    
//     if (typeof OldY == "undefined") {
//         return function (NewY) {
//             return OldX + NewY;
//         };
//     }
//     return x + y;
// }
// typeof (summa(5));  // function
//summa(11,5);        // 16
//summa(11)(15);        // 26
//ЗАМЫКАНИЕ
// function counter() {
//    var num = 0;
//     return function() {
//         return num++; // запоминает
//     };
// }

// var count = counter();

// console.log( count() ); // 1
// console.log( count() ); // 2
// console.log( count() ); // 3

    function count(x) {
        return function (step) {
            return x + step;
        };
    }
    
var plusX = count(1);//переменной присвоили метод с шагом 1
console.log(plusX(100)); 
 
var minusX = count(-1);//переменной присвоили метод с шагом -1
console.log(minusX(100));



}());