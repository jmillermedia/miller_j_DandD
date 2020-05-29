(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'), // querySelectorAll one to many relationship; returns a NodeList of matching elements

				puzzlePieces = document.querySelectorAll('.puzzle-image'),
				dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector(".puzzle-board"); //querySelector one to one relationship; returns the first matching element.

				// add event handling here -> how is the user going to use our app?
				// what triggers do we need?


	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources,
		// and set the drop zone background

		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;
}
		function allowDrag(event) {
			//let the drag happen and store a reference to the ID of the element we're dragging
			console.log('Started draging the image: ', event.targer.id);
		}

		function allowDragOver(event) {
			event.preventDefault();
			console.log('Dragged something over me!');
		}

		function allowDrop(event) {
			console.log('dropped something on me!');
		}




	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover, allowDragOver');
		zone.addEventListener('drop', allowDrop);
		
	//research call, apply and bind as JavaScript
	changeImageSet.call(puzzleButtons[0]); // emulates a click on the first bottom button
})();
