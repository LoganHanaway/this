// const blue = {
// 	name  : 'Blue',
// 	breed : 'Scottish Fold',
// 	dance : function(dance) {
// 		console.log('THIS IS:', this);
// 		console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
// 	},
// 	play  : function(...toys) {
// 		for (let toy of toys) {
// 			console.log(`${this.name} plays with ${toy} `);
// 		}
// 	},
// 	greet() {
// 		alert(`${this.name} SAYS MEOW!`);
// 	}
// };

// document
// 	.querySelector('#btn-1')
// 	.addEventListener('click', blue.greet.bind(blue));

// const btnA = document.querySelector('#a');
// const btnB = document.querySelector('#b');
// const btnC = document.querySelector('#c');

// function popUp(msg) {
// 	alert('Secret message is ' + msg);
// }

// btnA.addEventListener('click', popUp.bind(null, 'Button A Says Hi'));
// btnB.addEventListener('click', popUp.bind(null, 'Button B Says Hi'));
// btnC.addEventListener('click', popUp.bind(null, 'Button C Says Hi'));

// btnA.addEventListener('click', function() {
// 	popUp('BUTTON A SAYS HI!');
// });
// btnB.addEventListener('click', function() {
// 	popUp('BUTTON B SAYS HI!');
// });
// btnC.addEventListener('click', function() {
// 	popUp('BUTTON C SAYS HI!');
// });



// start video 8


const blue = {
	name  : 'Blue',
	breed : 'Scottish Fold',
	dance : function(dance) {
		console.log('THIS IS:', this);
		console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
	},
	play  : function(...toys) {
		for (let toy of toys) {
			console.log(`${this.name} plays with ${toy} `);
		}
	},
	greet() {
		alert(`${this.name} SAYS MEOW!`);
	}
};

document.querySelector('#btn-1').addEventListener('click', blue.greet.bind(blue));

const btnA = document.querySelector("#a");
const btnB = document.querySelector("#b");
const btnC = document.querySelector("#c");

function popUp(msg){
	alert("Secret message is " + msg);
}

// btnA.addEventListener('click', function(){
// 	popUp('BUTTON A SAYS HI!');
// })
// btnB.addEventListener('click', function(){
// 	popUp('BUTTON B SAYS HI!');
// })
// btnC.addEventListener('click', function(){
// 	popUp('BUTTON C SAYS HI!');
// })

// or we can bind to bake in an arguemnt instead of adding sperate callback functions

btnA.addEventListener('click', popUp.bind(null, 'Button A Says Hi'));
btnB.addEventListener('click', popUp.bind(null, 'Button B Says Hi'));
btnC.addEventListener('click', popUp.bind(null, 'Button C Says Hi'));





// start video 9
// arrow functions and this
// arrow functions cause this to behave differently

const greeter = {
	msg: 'I like chickenz',
	sayHi: () => {
		// console.log(this);
		alert(this.msg);
	},
	// waitAndGreet: function(delay){
	// 	console.log(this);
	// 	setTimeout(function(){
	// 		console.log(this);
	// 		alert(this.msg);
	// 	}, delay)
	// }
	// waitAndGreet: function(delay){
	// 	console.log(this);
	// 	let callback = function(){
	// 		console.log(this);
	// 		alert(this.msg);
	// 	}
	// 	setTimeout(callback.bind(this), delay);
	// }
	// waitAndGreet: function(delay){
	// 	setTimeout(function(){
	// 		alert(this.msg);
	// 	}.bind(this), delay)
	// }
	waitAndGreet: function(delay){
		setTimeout(() => {
			alert(this.msg);
		}, delay)
	}
};

// greeter.sayHi() // returns undefinied but works fine if not an arrow function
// arrow function do not make their own this
// not recomended to use => as methods on objects

// greeter.waitAndGreet(2000); 
// notice the differnt results for 'this' when logged