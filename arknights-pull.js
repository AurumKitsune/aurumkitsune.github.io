const pullsElement = document.querySelector(".pulls");
const orundumElement = document.querySelector("#orundum");
const originiteElement = document.querySelector("#originite");
const headhuntingElement = document.querySelector("#headhunting");
const yellowCertsElement = document.querySelector("#yellow-certs");

orundumElement.addEventListener("input", updatePulls);
originiteElement.addEventListener("input", updatePulls);
headhuntingElement.addEventListener("input", updatePulls);
yellowCertsElement.addEventListener("input", updatePulls);

updatePulls();

function updatePulls() {
	let orundum = getIntFromElement(orundumElement);
	let originite = getIntFromElement(originiteElement);
	let headhunting = getIntFromElement(headhuntingElement);

	let yellowCerts = yellowCertsElement.checked ? 1 : 0;

	// console.log("orundum: " + orundum + "  originite: " + originite + "  headhunting: " + headhunting + "  certs: " + yellowCerts);
	
	let total = Math.floor((((180 * originite) + orundum) / 600) + headhunting + (38 * yellowCerts));

	pullsElement.textContent = "You have " + total + " pulls";
}

function getIntFromElement(element) {
	let parsedInt = parseInt(element.value);
	if (isNaN(parsedInt)) {
		return 0;
	}

	return parsedInt;
}