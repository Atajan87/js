//objects home-work
//first

/**
 * Number to object
 * @param {number} number arguments should be between 0-999
 * @returns {object}
 */
function createObj(number) {
	const obj = {};
	if (Number.isInteger(number) && number >= 0 && number < 1000) {
		obj.units = number % 10;
		obj.tens = Math.floor((number % 100) / 10);
		obj.hundreds = Math.floor(number / 100);
		return obj;
	} else {
		console.log("The number should be between 0-999");
		return obj;
	}
}
console.log("write run() to creat obj");
function run() {
	const newObj = createObj(+prompt("Enter number between 0-999"));
	console.log(newObj);
}