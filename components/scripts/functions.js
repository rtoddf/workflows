// http://api.open-notify.org/astros.json

// one way of writing it:
//const delay = seconds => {
// 	return new Promise(resolve => {
// 		setTimeout(resolve, seconds * 1000)
// 	});
// };

const delay = seconds => {
	return new Promise((resolve, reject) => {
		if(typeof seconds !== 'number'){
			reject(new Error('Argument seconds must be a number'));
		}
		setTimeout(
			() => resolve(`${seconds} second delay is up`),
			seconds * 1000
		);
	});
};

console.log('zero seconds');
// delay(1).then(msg => console.log(msg));
// delay(3).then((msg) => console.log(msg));

// is a callback

delay('ten minutes').then(msg => msg.toUpperCase())
		.then(msg => `${msg}!!!!!!`)
		.then(msg => console.log(msg));

delay(2).then(msg => msg.toUpperCase())
		.then(msg => `${msg}!!!!!!`)
		.then(msg => console.log(msg));