function selectWeapon() {
	var pngs = [
		["srcFiles/Elements/rock.png"],
		["srcFiles/Elements/paper.png"],
		["srcFiles/Elements/paper.png"]
	];

	var dropdownValue = document.querySelector(".dropdown").value;
	var picSrc = document.querySelector(".player-choice.pic");

	if(document.querySelector(".dropdown").value === "rock") {
		document.querySelector(".player-choice-pic").src = 
		"srcFiles/Elements/rock.png";
	} else if(document.querySelector(".dropdown").value === "paper") {
		document.querySelector(".player-choice-pic").src =
		"srcFiles/Elements/paper.png"
	} else if(document.querySelector(".dropdown").value === "scissors") {
		document.querySelector(".player-choice-pic").src =
		"srcFiles/Elements/scissors.png"
	}
}