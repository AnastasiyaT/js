(function () {
	'use strict';

 console.log("%c%s", "color:orange", "Задание 1");
//1-ый способ создания объекта
	var city1 = {
		name: 'St-Peterburg',
		population: 5200000,
		mayor: 'Poltavchenko',
		addPopulation: function(city, popCount){ // функции нужно передать объект = city2 и количество переселяемого населения
			this.population += popCount; // населения города city1 увеличивается на popCount человек
			city2.population -= popCount; // население города city2 уменьшается на popCount человек
			}
	}; 
console.log("Мэр sity1", city1.mayor);
console.log("Город 'sity1'", city1.name);
console.log("Население sity1", city1.population); 

//2-ой способ создания объекта
	var city2 = {};
		city2.name = 'Yakutsk';
		city2.population = 307900;
		city2.mayor = 'Nikolaev'; 

console.log("Sity2. Мэр, город, население: ", city2.mayor, city2.name, city2.population);


city1.addPopulation(city2, 56); // вызываем метод city1.addPopulation и передаем ему city2, чтобы уменьшить его население и 56 - столько людей передет из второго города в первый
console.log("После переезда '56' население city1 стало:", city1.population, "население city2 стало:", city2.population);

	function showMayor(city) {
		console.log("Мэр города: ", city.mayor);
	}

showMayor(city1);
showMayor(city2);

var president = {
	changeSityMayor: function(mayor){
		
	};
}


} ());