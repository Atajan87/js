'use strict';
// homeWork3
// firstHomeWork---------------------------------------------------------
console.log('--first--');

for (let i = 0; i <= 10; i++) {
	if (i == 0) {
		console.log(i + '-this is zero');
	} else if (i % 2 == 0) {
		console.log(i + '-even number');
	} else {
		console.log(i + '-odd number');
	}
}

// secondHomeWork----------------------------------------------------
console.log('--second--');
const post = {
	author: "John", //вывести этот текст 
	postId: 23,
	comments: [{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число 
			}
		},
		{
			userId: 5, //вывести это число 
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст 
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
}
console.log(post.author);
console.log(post["author"]);

console.log(post.comments[0].rating.dislikes);
console.log(post["comments"][0]["rating"]["dislikes"]);

console.log(post.comments[1].userId);
console.log(post["comments"][1]["userId"]);

console.log(post.comments[1].text);
console.log(post["comments"][1]["text"]);

// thirdHomeWork----------------------------------------------
console.log('--third--');

const products = [{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

// Возврощает массив со скидкой
products.forEach(function (el, index) {
	let pr = el.price;
	products[index].price = pr - (pr * 15 / 100);
	console.log(products[index]);
});

console.log(products.__proto__); // просто так

// fourthdHomeWork------------------------------------------------------------
console.log('--fourth--');

const products2 = [{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];

// Создает массив из другого массива с свойтвом "photos"
let productIncPhoto = products2.filter(function (photoArr) { 
	return photoArr.hasOwnProperty("photos");
});
console.log(productIncPhoto);

products2.sort(function (a, b) { // Сортирует массив по цене
	if (a.price > b.price) {
		return 1;
	}
	if (a.price < b.price) {
		return -1;
	}
	return 0;
});

console.log(products2); // Выводит отсортированный массив

// fifthdHomeWork--------------------------------------------------------------
console.log('--fifth--');

for (let i = 0; i < 10; i = figure(i)) {
	/*empty body */
}

function figure(n) {
	console.log(n);
	return ++n;
}

// sixthdHomeWork-------------------------------------------------------------
console.log('--sixth--');

let mountain = 'x';
for (let i = 0; i < 20; i++) {
	console.log(mountain);
	mountain += 'x';
}