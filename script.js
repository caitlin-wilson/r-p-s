function selectWeapon() {
	if(document.querySelector(".dropdown").value === "rock") {
		document.querySelector(".player-choice-pic").src = 
		"srcFiles/Elements/rock.png";
	} else if(document.querySelector(".dropdown").value === 
		"paper") {
		document.querySelector(".player-choice-pic").src =
		"srcFiles/Elements/paper.png"
	} else if(document.querySelector(".dropdown").value === 
		"scissors") {
		document.querySelector(".player-choice-pic").src =
		"srcFiles/Elements/scissors.png"
	} else if(document.querySelector(".dropdown").value === 
		"default") {
		document.querySelector(".player-choice-pic").src =
		""
	}
}

function shoot() {
	var weapons = ["rock", "paper", "scissors"];
	var compChoice = weapons[Math.floor(Math.random() * (3 - 0))]
	console.log(compChoice);

	if(compChoice === "rock") {
		document.querySelector(".computer-choice-pic").src =
		"srcFiles/Elements/rock.png";
		document.querySelector(".computer-choice").innerHTML = 
		"Rock";
	} else if(compChoice === "paper") {
		document.querySelector(".computer-choice-pic").src =
		"srcFiles/Elements/paper.png";
		document.querySelector(".computer-choice").innerHTML = 
		"Paper";
	} if(compChoice === "scissors") {
		document.querySelector(".computer-choice-pic").src =
		"srcFiles/Elements/scissors.png";
		document.querySelector(".computer-choice").innerHTML = 
		"Scissors";
	} 
}