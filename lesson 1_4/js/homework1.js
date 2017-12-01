let a = 5;
let b = 2;
let c = 3;

console.log("Задача 1:а-5, b-2, c-3. Площадь S=2(аb+bc+ac)=", 2*(a*b+b*c+a*c));
let result = b > c ? b : c; 
console.log("Узнать что больше: ширина или высота (высота c-3, ширина b-2). Результат = ", result);
//Задача 2
let x = 1000;
let y = 15;
let z = 25;
let result2 = x%(y*z);
// let result3 = y * z;
// let result4 = result2 - result3;

console.log("Задача 2. Вопрос: Сколько м2 не занято грядками? Ответ:", result2, "м2.");
//Задача 3

let S1 = 15;
let S2 = 600;// S1 переводим в см2
let result5 = (S1*100)-600;
console.log("Задача 3. Найдите площадь овального кольца, \n полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.", result5, "см2.");

//задача 4.
let a2 = 12;
let b2 = 5;

console.log("Задача 4. Результат = ", a2%b2 <= 4 ? a2 + b2 : a2 - b2);

