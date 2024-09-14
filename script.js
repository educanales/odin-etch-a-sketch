/*

*/

const container = document.querySelector(".container");
const squaresBtn = document.querySelector(".squares-btn");
let squaresDivs = 16;
// let squareSize = 640 / squaresDivs;
// squareSize = (squareSize.toString()+"px");

// console.log(squaresDivs)

function generateDivs(num) {
  for (let i= 0; i < num * num; i++) {
    const div = document.createElement("div");
    let squareSize = 640 / squaresDivs;
    squareSize = (squareSize.toString()+"px");
    // div.classList.add("new-div");
    div.style.width = squareSize;
    div.style.height = squareSize;
    container.appendChild(div);
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = "black";
    })
  }
}

function removeDivs() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

generateDivs(squaresDivs);

squaresBtn.addEventListener('click', () => {
  removeDivs();
  squaresDivs = prompt( "How many squares per side do you want? (Max. 100): " );
  squaresDivs = Number(squaresDivs);
  if (squaresDivs > 100) {
    squaresDivs = prompt( "Please enter a number less than 100: " );
  }
  generateDivs(squaresDivs);
})
