window.onload = getRange(16);

function addSquare(range) {
    const grid = document.querySelector('#grid');
    //Empty the grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    let sizeOfSquare = (document.querySelector('#grid').clientWidth)/range;
    //Creates new columns and call the addsquare function
    for(i = 0; i < range; i++) {
        let newRow = document.createElement('div');
        createSquare(newRow,range,sizeOfSquare);
        grid.appendChild(newRow);
    }
    //Add mouseover function
    let squares = document.querySelectorAll('.gridSquare');
    squares.forEach((div) => {
        div.addEventListener('mouseover',changeColor,false);
    });
}

function createSquare(newRow,range,sizeOfSquare) {
    for(j = 0; j < range; j++) {
        let newSquare = document.createElement('div');
        newSquare.classList.add("gridSquare");
        newSquare.style.width = sizeOfSquare +"px";
        newSquare.style.height = sizeOfSquare +"px";
        newRow.appendChild(newSquare);
    }
}

function changeColor() {
    if(document.getElementById("randomColors").checked) {this.style.backgroundColor = getRandomColor();this.style.border = "none"}
    else{this.style.backgroundColor = "#000000"; this.style.border = "#A9A9A9"}
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getRange() {
let range = document.getElementById("myRange").value;
addSquare(range);
}