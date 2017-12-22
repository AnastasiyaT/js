    'use strict';
 
let userChoice6 = document.getElementById('size6');
let userChoice3 = document.getElementById('size3');

let gameContainer = document.getElementsByClassName('game-container');
let container = document.getElementsByClassName('container');

let buttonClick = document.getElementById('start');
// console.log(buttonClick);
buttonClick.addEventListener('click', getUserInfo);


function getUserInfo(){
	console.log(buttonClick);
	   console.log("клик мыши на элементе");
			gameContainer.style.display != 'none';
			container.style.display = 'none';
				
}
     