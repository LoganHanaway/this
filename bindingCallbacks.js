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