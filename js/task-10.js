const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  let size = 30;
  let step = parseInt(input.getAttribute("step"));
  let minValue = parseInt(input.getAttribute("min"));
  let maxValue = parseInt(input.getAttribute("max"));
  if (
    amount < parseInt(input.getAttribute("min")) ||
    amount > parseInt(input.getAttribute("max"))
  ) {
    const message = document.createElement("div");
    message.innerText = "The value is out of range.";
    message.style.color = "red";
    document.body.appendChild(message);
    setTimeout(() => {
      message.remove();
    }, 500);
    return;
  }

  for (let i = 0; i < amount; i += step) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
