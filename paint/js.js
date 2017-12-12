(function(){
	'use strict'

/*В js файле создать объект handlers со следующими методами:
startDraw
endDraw
drawing
erase
на canvas повесить следующие обработчики:
'mousedown' - метод handlers - startDraw
'mouseup'- метод handlers - endDraw
'mouseout' - метод handlers - endDraw
'mousemove'- метод handlers - drawing*/

	let handlers = {};
		handlers.startDraw = function() {
			
		};
		handlers.endDraw = function() {

		};
		handlers.drawing = function()  {

		};
		handlers.erase = function() {

		};

	let canvas = document.getElementById('canvas1');
	canvas.addEventListener('mousedown', handlers.startDraw);
	canvas.addEventListener('mouseup', handlers.endDraw);
	canvas.addEventListener('mouseout', handlers.endDraw);
	canvas.addEventListener('mousemove', handlers.drawing);




}());