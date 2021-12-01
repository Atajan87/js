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

//third 1.2
//es5
function Post(author, text) {
	this.author = author;
	this.text = text;
	this.date = new Date().toLocaleString();
}
Post.prototype.edit = function (text) {
	this.text = text;
}
const post = new Post('John', 'Hi Polat');

//extended constructor
function AttachedPost(author, text) {
	Post.call(this, author, text);
	this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
	this.highlighted = true;
}
const exPost = new AttachedPost('Polat', 'hello John');

//es6
class PostNew {
	constructor(author, text) {
		this.author = author;
		this.text = text;
		this.date = new Date().toLocaleString();
	}
	edit(text) {
		this.text = text;
	}
}
const postNew = new PostNew('Marina', 'Hi John');

//extended class
class AttachedPostNew extends PostNew {
	constructor(author, text) {
		super(author, text);
		this.highlighted = false;
	}
	makeTextHighlighted() {
		this.highlighted = true;
	}
}
const exPostNew = new AttachedPostNew('John', 'How are you Marina');