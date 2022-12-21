const pullsElement = document.querySelector(".pulls");
const orundumElement = document.querySelector("#orundum");
const originiteElement = document.querySelector("#originite");
const headhuntingElement = document.querySelector("#headhunting");

orundumElement.addEventListener("input", updatePulls);
originiteElement.addEventListener("input", updatePulls);
headhuntingElement.addEventListener("input", updatePulls);

updatePulls();

function updatePulls() {
	let orundum = getIntFromElement(orundumElement);
	let originite = getIntFromElement(originiteElement);
	let headhunting = getIntFromElement(headhuntingElement);
	// console.log("orundum: " + orundum + "  originite: " + originite + "  headhunting: " + headhunting);

	// let yellowCerts = prompt("Do you have 258 yellow certs? (Yes/No)");
	// if (yellowCerts.toLowerCase() === "yes") yellowCerts = 1;
	// else yellowCerts = 0;

	// let total = Math.floor((((180*originite) + orundum) / 600) + headhunting + (38*yellowCerts));
	let total = Math.floor((((180*originite) + orundum) / 600) + headhunting);

	pullsElement.textContent = "You have " + total + " pulls";
}

function getIntFromElement(element) {
	let parsedInt = parseInt(element.value);
	if (isNaN(parsedInt)) {
		return 0;
	}

	return parsedInt;
}