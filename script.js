//-----to shuffle the puzzle----------
const pieces = document.querySelectorAll('.image');
function shuffle() {
	pieces.forEach(piece => {
	  piece.style.order = Math.floor(Math.random() * 9) + 1;
	  console.log("clicked")
	});
  }
// -----------------------------------------------

// ------to drag and drop the image parts-------------
let piece= document.querySelectorAll('.image');
let emptyPiece = null;

piece.forEach((piece) => {
  piece.addEventListener('dragstart', dragStart);
  piece.addEventListener('dragover', dragOver);
  piece.addEventListener('drop', drop);
});

function dragStart() {
  emptyPiece = this;
  setTimeout(() => (this.style.display = 'fixed'), 0);
}

function dragOver(event) {
  event.preventDefault();
}

function drop() {
  this.parentNode.insertBefore(emptyPiece, this);
  this.style.border = '2px solid #000';
  emptyPiece.style.display = 'block';
  emptyPiece = null;
}
// -----------------------------------------------