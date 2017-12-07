(function () {
	'use strict';
	//1-ый способ создания объекта
		var sity1 = {
		name: 'St-Peterburg',
		population: 5200000,
		mayor: 'Poltavchenko',
		addPopulation: function(x, y){
			return y - 100 + x;
		}
		
	};	

	console.log("Мэр", sity1.mayor);
	console.log("Город", sity1.name);
	console.log("Население", sity1.population);	

	//2-ой способ создания объекта

	var sity2 = {};
		sity2.name = 'Yakutsk';
		sity2.population = 307900;
		sity2.mayor = 'Nikolaev';		

	console.log("Sity2. Мэр, город, население", sity2.mayor, sity2.name, sity2.population);
		
		
	sity1.addPopulation(sity1.population, sity2.population);
	console.log("вычитание", sity1.addPopulation);

	


	

	//Метод = (свойство=функция), которая позволяет забирать какую-то часть населения у sity2и добавлять к sity1



	



}());