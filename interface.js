document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    })
})
let restartButton = document.getElementById('restart');

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert('Game Over');
        }, 10)
    };
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
}

function clearSquares() {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {

        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class=""></div>`;
        }
    })
    restartGame();
}
restartButton.addEventListener("click", clearSquares);