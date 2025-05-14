
const currForm = document.querySelector(".login-form");

currForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const obj = {
		email: String(e.target.elements.email.value).trim(),
		password: String(e.target.elements.password.value).trim(),
	};

	for (const key in obj) {
		if (obj[key] === "") {
			alert(`All form fields must be filled in (${key})`);
			return;
		}
	}
	console.log(obj);

	e.target.reset();
})
