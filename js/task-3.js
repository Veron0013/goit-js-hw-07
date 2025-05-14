

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const staticText = "Anonymous";

nameInput.addEventListener("input", (e) => {
	const currText = String(e.target.value).trim();
	nameOutput.textContent = currText.length > 0 ? currText : staticText;
})