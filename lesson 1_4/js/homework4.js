(function () {
	'use strict';
	//1-ый способ создания объекта
		var сity1 = {
		name: 'St-Peterburg',
		population: 5200000,
		mayor: 'Poltavchenko',
		addPopulation: function(city, popCount){//Метод = (свойство=функция)		
			this.population += popCount;
			city.population -= popCount;
		},
	};	

	console.log("Мэр", сity1.mayor);
	console.log("Город", сity1.name);
	console.log("Население", сity1.population);	

	//2-ой способ создания объекта
	var сity2 = {};
		сity2.name = 'Yakutsk';
		сity2.population = 307900;
		сity2.mayor = 'Nikolaev';		

	console.log("сity2. Мэр, город, население", сity2.mayor, сity2.name, сity2.population);
	
	city1.addPopulation(city2, 100);
	console.log("После переезда население city1 стало:", city1.population, "население cite2 стало:", city2.population);


}());