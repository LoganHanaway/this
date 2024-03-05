const cat = {
    name: 'blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('THIS IS:', this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    }
}

// cat.dance('salsa');
// const bluesDance = cat.dance;
// bluesDance('salsa');


// start video 3

// function whatIsThis(){
//     console.log("this =", this)
// }

// const myObj = {
//     func: whatIsThis,
//     color: 'purple'
// };

// myObj.func()

// 'this' will be set to whatever you have to the left of the dot 


// start video 4
// strict mode

class Cat{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    dance(danceType){
        console.log('THIS IS:', this);
        console.log(`Meow, I am ${this.breed} and I like to ${danceType}`);
    }
}

const rocket = new Cat('Rocket', 'Tabby');
rocket.dance('tango');
const rocketDance = rocket.dance;
rocketDance('tango');