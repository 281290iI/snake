const board = document.querySelector("#board");
const colors = ["#48f1f1", "#42f63f", "#fdbe2b", "#d42ec4", "#2a51c5", "#d81818", "#30ddff", "#1fdb83", "#c219e8", "#f0ff1e"];
const SQUARES_NUMBER = 564;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}
function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1b1b"
  element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
