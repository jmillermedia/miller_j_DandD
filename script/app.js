(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'), // querySelectorAll one to many relationship; returns a NodeList of matching elements
				puzzlePieces = document.querySelectorAll('.puzzle-image'),
				dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector(".puzzle-board"); //querySelector one to one relationship; returns the first matching element.

				let imageNames = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

				let gameBoardChildren = gameBoard.children;

				let puzzlePiecesChildren = puzzlePieces.children;

				// add event handling here -> how is the user going to use our app?
				// what triggers do we need?


	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources,
		 imageNames.forEach((piece, index) => {
			 puzzlePieces[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
		 });
		// and set the drop zone background

		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;

		resetGame();

	}

		function allowDrag(event) {
			//let the drag happen and store a reference to the ID of the element we're dragging
			console.log('Started draging the image: ', event.target.id);

		event.dataTransfer.setData('draggedImage', this.id);
		}

		function allowDragOver(event) {
			event.preventDefault();
			// console.log('Dragged something over me!');

		}

		function allowDrop(event) {
			event.preventDefault();
			// console.log(gameBoardChildren);

			// console.log(puzzlePiecesChildren); //returns "undefined", I'm guessing because it's querySelectorAll. 

			let droppedImage = event.dataTransfer.getData('draggedImage');

			if (event.target.children.length > 0) {
				return;
			}
			event.target.appendChild(document.querySelector(`#${droppedImage}`));

			// if () {
			// 	event.dropZones.replaceChild('draggedImage', this.id);
			// 	// debugger;
			// 	dragged.parentNode.removeChild( dragged );
			// 	event.target.appendChild(document.querySelector(`#${droppedImage}`));
			}
			

		// with the reset game function, I need to figure out how to replace the pieces and put them back onto the puzzleBoard.

		function resetGame() {
			console.log(gameBoardChildren);
			// gameBoard.removeChild(puzzlePieces);
		}




	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet, resetGame)); 

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});

	//research call, apply and bind as JavaScript
	changeImageSet.call(puzzleButtons[0]); // emulates a click on the first bottom button
})();
