const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

function setInitialFontSize() {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
}

setInitialFontSize();
fontSizeControl.addEventListener("input", () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
