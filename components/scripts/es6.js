// maps
// var course = new Map();

// course.set('react', {description: 'ui'});
// course.set('jest', {description: 'testing'});

// console.log(course);
// console.log(course.react);
// console.log(course.get('react'));

// var details = new Map([
// 	[new Date(), 'today'],
// 	['items', [1, 2]]
// ]);

// console.log(details.size);
// details.forEach(function(item){
// 	console.log(item);
// });


//sets - colletions of values, but each must be unique
//duplicates are removed
// var books = new Set();
// books.add('It')
// 	.add('The Stand')
// 	.add('Misery');

// console.log('books size: ', books.size);
// console.log('has It: ', books.has('It'));

//for of loop
// var topics = new Map([
// 	['HTML', '/class/html'],
// 	['CSS', '/class/css'],
// 	['Javascript', '/class/javascript'],
// 	['Node', '/class/node']
// ]);

// for(let topic of topics.keys()){
// 	console.log('key: ', topic)
// }

// for(let topic of topics.values()){
// 	console.log('value: ', topic)
// }

// for (let course of topics.entries()){
// 	console.log('course: ', course)
// }

// $ npm install --save-dev gulp-babel babel-preset-env
// npm install --save-dev babel-core
// https://www.npmjs.com/package/gulp-babel

// var x = 6;

// if(x){
// 	var x = 4;
// }

// console.log('x: ', x)

// for(let i=1;i<46;i++){
// 	var div = document.createElement('div');
// 	div.onclick = function(){
// 		console.log('you clicked on a box #', i);
// 	}
// 	document.getElementsByTagName('section')[0].appendChild(div);
// }

// function print(firstName){
// 	console.log(`hello ${firstName}`);
// }

// print('Todder');

// Array.from(document.getElementsByTagName('div')).forEach(x => console.log(`damn ${x} `));