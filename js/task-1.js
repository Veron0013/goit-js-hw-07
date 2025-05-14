
const catArray = document.querySelector("ul#categories");

if (catArray) {
	const catNumber = catArray.children.length;
	console.log(`Number of categories: ${catNumber}`);

	for (const element of catArray.children) {
		const catName = element.querySelector("h2").textContent;
		const itemQty = element.querySelectorAll("li").length;
		console.log(`Category: ${catName}`);
		console.log(`Category: ${itemQty > 0 ? itemQty : 0}`);
	}
}