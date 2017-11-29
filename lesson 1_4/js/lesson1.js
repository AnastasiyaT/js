// однострочный комментарий 
/*
многострочный комментарий
*/

'use strict'; /*инструкция, всегда с новой строчки и !!после точка с запятой
 избавляет от ошибок опечаток, если неправильно задать переменную-"строгий режим"*/
console.log("lesson1"); //отладка, инструкция. через запятую м/писать др инфо
var varName; // varName -объявление (создание) переменной
varName=45; //присвоение переменной
varName= "new val"; //переопределение значения переменной
console.log(window);
let var1, var2, var3;
let varName2= "value";
console.log(window, varName2);

// data types
// простые типы данных
let str="строковой тип \'строка в кавычках'\n данных";
str="строковой тип \'строка в кавычках'\n данных";

console.log();

//логитеский тип
let boo=true;
let boo2=false;

// к false преобразуется 
//0
// ""  и " "
// null
// undefined


//Числа
// isNan(someVar);
// true - если занчения являются Nan или не может быть преобразовано в число
// false - если значение число или может быть в него преобразовано

// nuii
//undefined

let nullVar = null;
let undefVar;
let someNum=78; //23.5466

// typeof имя переменной
console.log("typeof str:", typeof str);
console.log("typeof someNum:", typeof someNum);
console.log("typeof nullVar:", typeof nullVar);

//Операторы
//арифметические: +-*/ %-деление по модулю (остаток от деления)

console.log("56"-9);
console.log("hjjjh"-9);
console.log("56"+9);
console.log("jjkk"+"tjggg");
console.log(4**9); //возведение в степень

console.log("0.1 + 0.2 = ", 0.1 + 0.2);
console.log(9999999999999999);

//Операторы присваивания

let a = 30;
// a = a + 10; a += 10;

console.log(10%3);

//операторы сравнения
// == раверство
//!= неравенство
// === идентичность !использовать, не использовать == 
//!== не идентичность

// > больше
// < меньше
// >= больше или равно
// <= меньше или равно

console.log(3>6);


//инкремен и декремент
//++a - префиксный инкремент 
// a++ - постфиксный инкремент

//--a - префиксный инкремент - увеличивает число на 1
// a-- - постфиксный инкремент - уменьшает число на 1

// let x=1;
// let y=9;

// console.log (x++);
// console.log (x);

//Тернарный оперптор "?"

let x=2;
let y=9;

let result=x<y ? x-y: x+y;

console.log ("result=", result);

let now = new Date();
console.log ("now:", now);

let sec = now.getSeconds();
// let month = now.getMonth();
console.log ("month", sec);
// 0 1 2 3 ...11

// в начале каждого часа: 
// в течении 3х минут горит зеленый
// затем, в течении 1 минуты - желтый
// затем, в течении 1 минуты -красный и тд
//Какой сигнал горит сейчас?



let res = sec%5 >= 0 && sec%5 <3 ? "green": sec%5 ===3? "yellow": "red";

console.log (sec, res);





