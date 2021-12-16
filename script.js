// Main container
const gridDiv = document.createElement("div");
gridDiv.setAttribute("class", "grids");
document.body.appendChild(gridDiv);

// Global grayscale variable
let grayscaleIndex = 255;

// Global screen height
const vhPixels = Math.round(screen.height);


// Create an HTML button to set the grid size
function createGridUserPrompt() {
    const button = document.createElement("button");
    button.setAttribute("id", "btn");
    button.innerHTML = "SET GRID SIZE";
    gridDiv.appendChild(button);
}

// Add an event listener to the button
function addGridUserPrompterListener() {
    document.getElementById("btn").addEventListener("click", function() {
        let userInput = prompt("Enter an interger value between 1 and 100", "0");
        let gridSize = parseInt(userInput);
    
        if (gridSize >= 1 && gridSize <= 100) {
            createGrid(gridSize);
        }
     });
}


// Create the grid of the given size
function createGrid(gridSize) {
    const gridName = "grid";
    resetGrid(gridName);

    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.setAttribute("class", gridName);
        gridRow.setAttribute("id", "gridrow" + i.toString());

        for (let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "square");
            gridRow.appendChild(gridSquare);
        }
        gridDiv.appendChild(gridRow);
    }

    setSquareHeight(gridSize);
    addEventListener(gridSize);
}

// Remove the grid if it exists
function resetGrid(gridName) {
    grayscaleIndex = 255;
    const elements = document.getElementsByClassName(gridName);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Set the height for the grid
function setSquareHeight(gridSize) {
    let squares = document.getElementsByClassName("square");

    for (let i = 0; i < squares.length; i++) {
        // squares[i].style.height = 90/(gridSize) + "vh";
        squares[i].style.height = vhPixels/gridSize + "px";
    }
}

// Add hover functionality
function addEventListener(gridSize) {
    let squares = document.getElementsByClassName("square");

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseleave', e=> {
            grayscaleChecker();
            squares[i].style.backgroundColor = 'rgb(' + grayscaleIndex + ',' + grayscaleIndex + ',' + grayscaleIndex + ')';
        })
    }
}

// Grayscale checker
function grayscaleChecker() {
    grayscaleIndex -= 2;
    if (grayscaleIndex < 0) {
        grayscaleIndex = 0;
    }
}

createGridUserPrompt();
addGridUserPrompterListener();
