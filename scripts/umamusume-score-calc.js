const witElement = document.getElementById("wit");
const normalSkillsElement = document.getElementById("normal-skills");
const goldSkillsElement = document.getElementById("gold-skills");
const activationChanceElement = document.getElementById("activation-chance");
const scoreElement = document.getElementById("score");

witElement.addEventListener("input", updateScore);
normalSkillsElement.addEventListener("input", updateScore);
goldSkillsElement.addEventListener("input", updateScore);

updateScore();

function updateScore() {
	let wit = getIntFromElement(witElement);
	let normalSkills = getIntFromElement(normalSkillsElement);
	let goldSkills = getIntFromElement(goldSkillsElement);

	// console.log("orundum: " + orundum + "  originite: " + originite + "  headhunting: " + headhunting + "  certs: " + yellowCerts);
	
	let activationChance = Math.pow(Math.max(100 - 9000 / wit, 20) / 100, normalSkills + goldSkills);

	activationChanceElement.textContent = `${Math.round(activationChance * 10000) / 100}% chance of all skills activating`;
	scoreElement.textContent = `${(normalSkills * 500) + (goldSkills * 1200)} potential score`;
}

function getIntFromElement(element) {
	let parsedInt = parseInt(element.value);
	if (isNaN(parsedInt)) {
		return 0;
	}

	return parsedInt;
}