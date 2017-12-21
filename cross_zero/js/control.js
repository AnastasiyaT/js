(function() {
	'use strict'

// обработчик событий на кнопку
var button = document.getElementsByClassName('start');
button.addEventListener('click', GameTable);
//создание div для игры
var GameTable = function() {
	for (var i = 0; i < 9; i++) {	
	document.getElementByID('game-container').innerHTML+='<div class="cell"></div>';
	};
	container.style.display = none;	
}

GameTable.show();

















}());