    'use strict';

//СОЗДАНИЕ ФОРМЫ
	let div = document.createElement('div');
	div.classList.add('login');
	let label = document.createElement('label');
	label.setAttribute('for', 'login');
	let labelText = document.createTextNode('Введите имя ');
	let input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('required', true);
	div.appendChild(label);
	label.appendChild(labelText);
	div.appendChild(input);	
	container.appendChild(div);

	// <div class="board-size"><p>Выберите поле</p>	

	div = document.createElement('div');
	div.classList.add('board-size');
	let p = document.createElement('p');
	let pText = document.createTextNode('Выберите поле');
	let inputText = document.createTextNode('3 x 3');
	label = document.createElement('label');
	input = document.createElement('input');
	input.setAttribute('id', 'size3');	
	input.setAttribute('type', 'radio');
	input.setAttribute('name', 'radio');
	input.setAttribute('checked', true);	
	div.appendChild(p);
	div.appendChild(label);	
	label.appendChild(input);
	p.appendChild(pText);
	label.appendChild(inputText);


	label = document.createElement('label');
	input = document.createElement('input');
	inputText = document.createTextNode('6 x 6');
	input.setAttribute('id', 'size6');
	input.setAttribute('type', 'radio');
	input.setAttribute('name', 'radio');
	div.appendChild(label);	
	label.appendChild(input);
	container.appendChild(div);
	label.appendChild(inputText);

// <div class="enemy"><p>Выбор противника:</p>

	div = document.createElement('div');
	div.classList.add('enemy');
	p = document.createElement('p');
	pText = document.createTextNode('Выбор противника');
	label = document.createElement('label');
	input = document.createElement('input');
	input.setAttribute('name', 'radio-enemy');
	input.setAttribute('type', 'radio');
	input.setAttribute('checked', true);

	inputText = document.createTextNode('Играть против другого игрока');
	div.appendChild(p);
	div.appendChild(label);
	p.appendChild(pText);
	label.appendChild(input);	
	label.appendChild(inputText);

	label = document.createElement('label');
	input = document.createElement('input');
	input.setAttribute('name', 'radio-enemy');
	input.setAttribute('type', 'radio');
	inputText = document.createTextNode('Играть против компьютера');
	div.appendChild(label);
	label.appendChild(input);
	label.appendChild(inputText);
	container.appendChild(div);

	// При выборе игры с др игроком, повесить обработчик событий и дорисовать поле
	// <div class="login2">	<label for="login">Введите 2 -e имя</label>	

	div = document.createElement('div');
	label = document.createElement('label');
	label.setAttribute('for', 'login2');
	labelText = document.createTextNode('Введите имя второго игрока ');
	input = document.createElement('input');
	input.setAttribute('type', 'text');
	
	div.appendChild(label);	
	div.appendChild(input);
	label.appendChild(labelText);
	container.appendChild(div);

		// <div class="start"><input type="button" value="Начать игру" id="start">	

	div = document.createElement('div');
	div.classList.add('start');
	input = document.createElement('input');
	input.setAttribute('type', 'button');
	input.setAttribute('value', 'Начать игру');
	input.setAttribute('id', 'start');
	div.appendChild(input);
	container.appendChild(div);

	//обработчик событий
let userChoice6 = document.getElementById('size6');
let userChoice3 = document.getElementById('size3');
let gameContainer = document.getElementsByClassName("game-container")[0];


let divContainer = document.getElementsByClassName("divContainer")[0];
let startGame = document.getElementById('start');

startGame.addEventListener('click', getDisplayNone);
//скрыли основное поле
function getDisplayNone(){	
	divContainer.style.display = 'none';				
} 

startGame.addEventListener('click', getShowGameContainer);
//показываем игровое поле
function getShowGameContainer(){
	gameContainer.style.display = 'block';
}
/*отрисовать поле 
  <label><input id="size3" type="radio" checked>3 Х 3</label>
  <label><input id="size6" type="radio">6 Х 6</label> 
   3*3 height: 148px; width: 148px;      6*6    height: 72px; width: 72px; */ 
let fieldGame = document.getElementById('field');  
let fieldSize3 = document.getElementById('size3');
let fieldSize6 = document.getElementById('size6');
startGame.addEventListener('click', drawField);
function drawField(){	
	if(fieldSize6.checked){
		for(let i = 0; i < 36; i++){
			let div = document.createElement('div');		
			div.classList.add('cell');
			fieldGame.appendChild(div);	
			div.style.height = 72 + "px";
			div.style.width = 72 +"px";
		}
	} else {		
		for(let i = 0; i < 9; i++){
			let div = document.createElement('div');		
			div.classList.add('cell');
			fieldGame.appendChild(div);	
			div.style.height = 148 + "px";
			div.style.width = 148 +"px";
		}		
	}
}
//начало игры. кто ходит//<div class="game-container" id="field">
startGame.addEventListener('click', drawSymb);

function drawSymb (){
	console.log("test");
}
















