(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'), // one to many relationship
				gameBoard = document.querySelector(".puzzle-board"); //one to one relationship

	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources,
		// and set the drop zone background
		//
		//
		// let newBackgroundImage = `images/backGround${this.dataset.bgkey}.jpg`;

		// gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;

		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;

		debugger;
	}

	// add event handling here -> how is the user going to use our app?
	// what triggers do we need?

	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	//research call, apply and bind as JavaScript
	changeImageSet.call(puzzleButtons[0]); // emulates a click on the first bottom button
})();
