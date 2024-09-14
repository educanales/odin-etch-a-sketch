/*

*/

const container = document.querySelector(".container");
let squaresDivs = 16


function generateDivs(num) {
  for (let i= 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("new-div");
    container.appendChild(div);
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = "black";
    })
  }
}

generateDivs(squaresDivs);

