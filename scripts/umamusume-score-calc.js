const witElement = document.getElementById("wit");
const uniqueSkillElement = document.getElementById("unique-skill");
const threeStarElement = document.getElementById("three-star");
const goldSkillsElement = document.getElementById("gold-skills");
const normalSkillsElement = document.getElementById("normal-skills");
const activationChanceElement = document.getElementById("activation-chance");
const scoreElement = document.getElementById("score");

const inputElements = document.querySelectorAll(".input");
inputElements.forEach((element) => {
	element.addEventListener("input", updateScore);
});

updateScore();

function updateScore() {
	let wit = getIntFromElement(witElement);
	let uniqueSkill = getIntFromElement(uniqueSkillElement);
	let goldSkills = getIntFromElement(goldSkillsElement);
	let normalSkills = getIntFromElement(normalSkillsElement);
	let threeStar = threeStarElement.checked ? 2000 : 1500;

	if (uniqueSkill == 1) uniqueSkill -= 1;

	// console.log("orundum: " + orundum + "  originite: " + originite + "  headhunting: " + headhunting + "  certs: " + yellowCerts);
	
	let activationChance = Math.pow(Math.max(100 - 9000 / wit, 20) / 100, normalSkills + goldSkills);

	activationChanceElement.textContent = `${Math.round(activationChance * 10000) / 100}% chance of all skills activating`;
	scoreElement.textContent = `${(normalSkills * 500) + (goldSkills * 1200) + (uniqueSkill * 100) + threeStar} potential score`;
}

function getIntFromElement(element) {
	let parsedInt = parseInt(element.value);
	if (isNaN(parsedInt)) {
		return 0;
	}

	return parsedInt;
}
