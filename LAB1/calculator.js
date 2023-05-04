function calculate() {
	// Get the input values and the selected operation
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let operation = document.getElementById("operation").value;
	let result;

	// Perform the selected operation
	switch(operation) {
		case "add":
			result = num1 + num2;
			break;
		case "subtract":
			result = num1 - num2;
			break;
		case "multiply":
			result = num1 * num2;
			break;
		case "divide":
			result = num1 / num2;
			break;
		case "sqrt":
			result = Math.sqrt(num1);
			break;
		case "power":
			result = Math.pow(num1, num2);
			break;
		case "modulus":
			result = num1 % num2;
			break;
		default:
			result = null;
			break;
	}

	// Display the result
	document.getElementById("result").value = result;
}
