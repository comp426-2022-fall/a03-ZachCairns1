//This is my roll function. It rolls a dice a chosen number of amount.
//The user selects the sides of dice, how many dice to roll, and how many rolls

function roll(sides, dice, rolls) {
	let arr = [];
	for (let i = 0; i < rolls; i++) {
		let curTotal = 0
		for(let j = 0; j < dice; j++) {
			let curRoll = 1 + Math.floor(Math.random() * sides);
			curTotal += curRoll;
		}
		arr.push(curTotal);
	}
	return JSON.stringify({"sides": sides, "dice": dice, "rolls": rolls, "results": arr});
}


export { roll };
