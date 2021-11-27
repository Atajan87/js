'use strict';
//objects home-work


//first 1

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

//second 1.1
//es5
function Product(name, price) {
	this.name = name;
	this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
	this.price -= Math.round((this.price / 4) * 100) / 100;
}

const prod1 = new Product('apple', 406);
const prod2 = new Product('cherry', 502);

//es6
class ProductNew {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	make25PercentDiscount() {
		this.price -= Math.round((this.price / 4) * 100) / 100;
	}
}
const newProd1 = new ProductNew('chocolate', 620);
const newProd2 = new ProductNew('cake', 213);