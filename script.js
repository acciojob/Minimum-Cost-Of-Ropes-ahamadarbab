function calculateMinCost() {
	// Get the input value
	const input = document.getElementById("rope-lengths").value;

	// Convert comma-separated values into an array of numbers
	let ropes = input
		.split(",")
		.map(num => Number(num.trim()))
		.filter(num => !isNaN(num));

	let totalCost = 0;

	// keep connecting the two smallest ropes
	while(ropes.length > 1) {
		// Sort in ascending order
		ropes.sort((a, b) => a - b);

		// remove the two smallest ropes
		const first = ropes.shift();
		const second = ropes.shift();

		// cost of connecting them
		const cost = first + second;
		totalCost += cost;

		// Add the new rope back
		ropes.push(cost);
	}
	
	// Display the result
	document.getElementById("result").textContent = totalCost;
}  
