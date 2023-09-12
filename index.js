let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count++;
  countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash + " ";
  countEl.textContent = 0;
  count = 0;
}
