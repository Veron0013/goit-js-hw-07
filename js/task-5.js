function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const bgChange = document.querySelector("span.color");

btn.addEventListener("click", () => {
  const rndColor = getRandomHexColor();
  document.body.style.backgroundColor = rndColor;
  bgChange.textContent = `${rndColor}`;
})

//знову не так?